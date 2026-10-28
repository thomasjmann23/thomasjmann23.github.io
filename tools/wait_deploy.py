"""Wait until GitHub Pages serves the latest commit's changed files.

    python tools/wait_deploy.py [timeout_seconds]

Compares the live copy of each changed site file (from `git diff HEAD~1`)
with the local one. Exits 0 when they all match, 1 on timeout.
"""
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://thomasjmann23.github.io/"
SKIP = ("docs/", "tools/", ".")


def changed_files():
    out = subprocess.run(["git", "diff", "--name-only", "HEAD~1", "HEAD"], cwd=ROOT, capture_output=True, text=True)
    files = [f for f in out.stdout.split() if not f.startswith(SKIP) and (ROOT / f).exists()]
    return files or ["index.html"]


def live_matches(path):
    try:
        req = urllib.request.Request(BASE + path + f"?v={time.time()}", headers={"Cache-Control": "no-cache"})
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.read() == (ROOT / path).read_bytes()
    except Exception:
        return False


def main():
    timeout = int(sys.argv[1]) if len(sys.argv) > 1 else 600
    files, start = changed_files(), time.time()
    while time.time() - start < timeout:
        pending = [f for f in files if not live_matches(f)]
        if not pending:
            print(f"Deployed: {', '.join(files)} ({int(time.time() - start)}s)")
            return 0
        print(f"Waiting for: {', '.join(pending)}")
        time.sleep(20)
    print("Timed out waiting for deploy")
    return 1


if __name__ == "__main__":
    sys.exit(main())
