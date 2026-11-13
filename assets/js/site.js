/* Thomas Mann — site script. Renders every page from content/resume.json
   (and research/index.json), plus theme, command menu
   and the 8-K demo. No build step, no framework. */
(() => {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const root = document.documentElement;
  const page = document.body.dataset.page;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const params = new URLSearchParams(location.search);

  // Tiny element builder: h('a', {href, class, text}, ...children)
  function h(tag, attrs = {}, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k === 'style') el.style.cssText = v;
      else el.setAttribute(k, v);
    }
    for (const k of kids.flat()) if (k != null && k !== false) el.append(k);
    return el;
  }
  // Arrows are drawn, not typed: → ← ↗ aren't in the Archivo/Plex subsets and fell back to a system face
  const ARROWS = { '→': 'M2 8h11M9 4l4 4-4 4', '←': 'M14 8H3M7 4 3 8l4 4', '↗': 'M4 12 12 4M6 4h6v6' };
  const arrow = (c = '→') => { const s = h('span', { class: 'arrow', 'aria-hidden': 'true' }); s.innerHTML = `<svg viewBox="0 0 16 16" focusable="false"><path d="${ARROWS[c]}"/></svg>`; return s; };
  const projectUrl = id => `project.html?id=${encodeURIComponent(id)}`;

  /* ---------------- Card ⇄ detail morph ----------------
     Only the card you clicked (or are returning to) carries view-transition
     names, so the file "pulls out of the drawer" into the detail header and
     every other card leaves with the page. Names are cleared afterwards. */
  const MORPH = ['p-card', 'p-tag', 'p-title'];
  const urlOf = u => { try { return new URL(u, location.href); } catch (e) { return null; } };
  const detailId = u => { const x = urlOf(u); return x && /\/project\.html$/.test(x.pathname) ? x.searchParams.get('id') : null; };
  const isList = u => { const x = urlOf(u); return !!x && /\/(index\.html|projects\.html)?$/.test(x.pathname); };
  function morphEls(id) {
    if (page === 'project') {
      const hero = $('.detail-hero');
      return hero && id === params.get('id') ? [hero, $('.tag', hero), $('h1', hero)] : null;
    }
    const card = id && $$('.card[data-id]').find(c => c.dataset.id === id);
    return card ? [card, $('.k', card), $('h3', card)] : null;
  }
  function morph(vt, otherUrl) {
    if (!vt || !otherUrl) return;
    const id = page === 'project' ? (isList(otherUrl) ? params.get('id') : null) : detailId(otherUrl);
    const els = morphEls(id);
    if (!els) return;
    els.forEach((el, i) => { if (el) el.style.viewTransitionName = MORPH[i]; });
    vt.finished.finally(() => els.forEach(el => { if (el) el.style.viewTransitionName = ''; }));
  }
  addEventListener('pageswap', e => morph(e.viewTransition, e.activation && e.activation.entry && e.activation.entry.url));
  addEventListener('pagereveal', e => {
    const act = window.navigation && navigation.activation;
    morph(e.viewTransition, act && act.from && act.from.url);
  });

  /* ---------------- Theme ---------------- */
  // Follows the system theme; an explicit choice is remembered in localStorage.
  const sysDark = matchMedia('(prefers-color-scheme: dark)');
  const mode = () => root.dataset.theme || (sysDark.matches ? 'dark' : 'light');
  sysDark.addEventListener('change', () => applyTheme());
  function applyTheme() {
    root.dataset.mode = mode();
    const btn = $('.theme-toggle');
    if (btn) btn.setAttribute('aria-label', mode() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  function toggleTheme() {
    const next = mode() === 'dark' ? 'light' : 'dark';
    const swap = () => { root.dataset.theme = next; try { localStorage.setItem('theme', next); } catch (e) {} applyTheme(); };
    // Same-document view transition: circular reveal from the toggle
    if (document.startViewTransition && !reduceMotion) {
      const r = $('.theme-toggle').getBoundingClientRect();
      root.style.setProperty('--tx', `${r.left + r.width / 2}px`);
      root.style.setProperty('--ty', `${r.top + r.height / 2}px`);
      root.classList.add('theme-vt');
      document.startViewTransition(swap).finished.finally(() => root.classList.remove('theme-vt'));
    } else swap();
  }
  applyTheme();
  $('.theme-toggle')?.addEventListener('click', toggleTheme);

  /* ---------------- Data ---------------- */
  const getJSON = url => fetch(url).then(r => { if (!r.ok) throw new Error(url + ' ' + r.status); return r.json(); });
  // research/index.json is always loaded: the command menu lists research items on every page
  Promise.all([getJSON('content/resume.json'), getJSON('research/index.json').catch(() => ({ items: [] }))])
    .then(([d, research]) => {
      d.research = (research && research.items) || [];
      fillCommon(d);
      ({ index: renderHome, work: renderWork, projects: renderProjects, project: renderProject, research: renderResearch }[page] || (() => {}))(d);
      setupPalette(d);
      if (page === 'index') personSchema(d);
    })
    .catch(err => console.warn('Render failed:', err))
    .finally(() => {
      // Reveal once the webfont is ready too (max 1.2s), so the type doesn't jump
      const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
      Promise.race([fonts, new Promise(r => setTimeout(r, 1200))]).then(() => root.classList.remove('loading'));
    });

  function fillCommon(d) {
    $$('[data-field]').forEach(el => { const v = d[el.dataset.field]; if (v) el.textContent = v; });
    $$('[data-href="mailto"]').forEach(a => { a.href = 'mailto:' + d.contact.email; });
    $$('[data-field-email]').forEach(e => { e.textContent = d.contact.email; });
    $$('[data-list="focus"]').forEach(ul => ul.replaceChildren(...d.focus.map(f => h('li', { text: f }))));
    $$('[data-href="linkedin"]').forEach(a => { a.href = d.contact.linkedin; });
    $$('.year').forEach(e => { e.textContent = new Date().getFullYear(); });
    $$('.copy-email').forEach(b => b.addEventListener('click', () => copyEmail(d.contact.email)));
  }

  // Structured data for search engines, built from resume.json so facts live in one place
  function personSchema(d) {
    const job = d.experience[0];
    const ld = {
      '@context': 'https://schema.org', '@type': 'Person',
      name: d.name, alternateName: d.shortName, url: 'https://thomasjmann23.github.io/',
      jobTitle: job.role, worksFor: { '@type': 'Organization', name: job.org },
      homeLocation: { '@type': 'Place', name: d.location },
      alumniOf: d.education.map(e => ({ '@type': 'CollegeOrUniversity', name: e.school })),
      knowsAbout: [...d.focus, ...d.skills['Generative AI'], 'Credit underwriting'],
      email: 'mailto:' + d.contact.email, sameAs: [d.contact.linkedin]
    };
    document.head.append(h('script', { type: 'application/ld+json', text: JSON.stringify(ld) }));
  }

  async function copyEmail(email) {
    const out = $('.copy-status');
    try { await navigator.clipboard.writeText(email); if (out) out.textContent = 'Copied ' + email; }
    catch (e) { if (out) out.textContent = email; }
  }

  /* ---------------- Shared renderers ---------------- */
  function projectCard(p, i) {
    const card = h('a', { class: 'card reveal', href: projectUrl(p.id) },
      h('span', { class: 'k', text: p.tagline }),
      h('h3', { text: p.name }),
      h('ol', { class: 'flow', 'aria-label': 'How it works' }, p.flow.map((s, j) => h('li', { text: s, style: `--i:${j}` }))),
      h('p', { text: p.description }),
      h('ul', { class: 'chips', 'aria-label': 'Skills' }, p.skills.map(s => h('li', { class: 'chip', text: s }))),
      h('span', { class: 'go' }, h('span', { text: 'How it works' }), arrow()));
    card.dataset.skills = p.skills.join('|');
    card.dataset.id = p.id;
    return card;
  }

  /* ---------------- Home ---------------- */
  function renderHome(d) {
    $('[data-render="stats"]').replaceChildren(...d.stats.map(s =>
      h('div', { class: 'stat' }, h('div', { class: 'n', 'data-count': s.count ? s.value : null, text: s.value }), h('div', { class: 'l', text: s.label }))));
    countUp();
    pressName();
    $('[data-render="featured"]').replaceChildren(...d.projects.filter(p => p.featured).map(projectCard));
    lab();
  }

  // Hero name: letters near the pointer press in, condensing on the width axis and
  // getting a touch heavier, like a nib under pressure. Fine pointers only, never
  // under reduced motion. Each letter keeps a fixed box (its measured rest width),
  // so nothing around it moves: no layout shift, no feedback loop with the pointer.
  function pressName() {
    const el = $('.hero .name');
    if (!el || reduceMotion || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const letters = [];
    let shown = null;
    // Split only after the entrance has played, so the per-letter boxes never move during it
    const split = () => {
      const text = el.textContent.trim();
      if (!text) return false;
      shown = h('span', { class: 'press', 'aria-hidden': 'true' }, ...text.split(' ').flatMap((w, i) => [
        i ? ' ' : null,
        h('span', { class: 'word' }, ...[...w].map(c => { const s = h('span', { class: 'ch', text: c }); letters.push({ el: s, v: 0, x: 0, y: 0 }); return s; }))
      ]));
      el.replaceChildren(h('span', { class: 'sr-only', text }), shown);
      return true;
    };
    const REST_W = 125, MIN_W = 90, REST_WT = 750, MAX_WT = 860;
    let px = -1e4, py = -1e4, raf = 0, locked = false, fs = 100;
    const lock = () => {
      shown.classList.remove('locked');
      letters.forEach(l => { l.el.style.width = ''; l.el.style.fontStretch = ''; l.el.style.fontWeight = ''; l.v = 0; });
      const r = letters.map(l => l.el.getBoundingClientRect());
      fs = parseFloat(getComputedStyle(el).fontSize) || 100;
      letters.forEach((l, i) => { l.el.style.width = r[i].width + 'px'; l.x = r[i].left + r[i].width / 2 + scrollX; l.y = r[i].top + r[i].height / 2 + scrollY; });
      shown.classList.add('locked');
      locked = true;
    };
    const frame = () => {
      raf = 0;
      let moving = false;
      const R = fs * .62;
      for (const l of letters) {
        const dx = (l.x - scrollX - px) / R, dy = (l.y - scrollY - py) / (R * 1.6);
        const t = Math.exp(-(dx * dx + dy * dy));
        l.v += (t - l.v) * .16;
        if (Math.abs(t - l.v) > .002) moving = true; else l.v = t;
        l.el.style.fontStretch = (REST_W - (REST_W - MIN_W) * l.v).toFixed(1) + '%';
        l.el.style.fontWeight = Math.round(REST_WT + (MAX_WT - REST_WT) * l.v);
      }
      if (moving) raf = requestAnimationFrame(frame);
    };
    const kick = () => { if (locked && !raf) raf = requestAnimationFrame(frame); };
    const hero = el.closest('.hero') || el;
    hero.addEventListener('pointermove', e => { if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return; px = e.clientX; py = e.clientY; kick(); }, { passive: true });
    hero.addEventListener('pointerleave', () => { px = py = -1e4; kick(); });
    // Lock widths once the entrance stretch has played (and the font is in), re-lock on resize
    let started = false;
    const start = () => { if (started) return; started = true; if (split()) lock(); };
    el.addEventListener('animationend', start, { once: true });
    setTimeout(start, 3200); // fallback if animationend never fires
    let rt = 0;
    addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (shown) { cancelAnimationFrame(raf); raf = 0; lock(); } }, 150); });
  }

  // Animate numbers like "1,000+" once visible
  function countUp() {
    const els = $$('[data-count]');
    const run = el => {
      const raw = el.dataset.count, m = raw.match(/^([^\d]*)([\d,]+)(.*)$/);
      if (!m || reduceMotion) return;
      const target = +m[2].replace(/,/g, ''), t0 = performance.now(), dur = 1400;
      const fmt = v => m[1] + Math.round(v).toLocaleString('en-US') + m[3];
      (function step(t) {
        const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
        el.textContent = fmt(target * e);
        if (k < 1) requestAnimationFrame(step); else el.textContent = raw;
      })(t0);
    };
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }), { threshold: .6 });
    els.forEach(el => io.observe(el));
  }

  /* ---------------- Work ---------------- */
  // Underwriter → builder: each step's roles sit on one ruled line; CSS draws the pen down it on scroll
  const careerStory = j => h('ol', { class: 'story', 'aria-label': `Roles held at ${j.org}, earliest first` },
    j.story.map((st, i) => h('li', { class: 'step' },
      h('span', { class: 'n', text: `${String(i + 1).padStart(2, '0')} · ${st.step}` }),
      h('ul', { class: 'rungs' }, st.roles.map(r => h('li', { text: r }))),
      h('p', { text: st.text }))));
  function renderWork(d) {
    $('[data-render="experience"]').replaceChildren(...d.experience.map((j, i) =>
      h('li', { class: 'job ' + (i ? 'reveal' : 'enter'), style: '--d:3' },
        h('div', {}, h('span', { class: 'when', text: `${j.start} – ${j.end}` }), h('span', { class: 'place', text: j.place })),
        h('div', {},
          h('h3', { text: j.org }),
          h('p', { class: 'role', text: j.role }),
          j.story ? careerStory(j) : null,
          h('ul', { class: 'hl' }, j.highlights.map(x => h('li', { text: x }))),
          j.award ? h('span', { class: 'award', text: '★ ' + j.award }) : null,
          h('ul', { class: 'chips', 'aria-label': 'Skills' }, j.skills.map(s => h('li', { class: 'chip', text: s })))))));
    $('[data-render="education"]').replaceChildren(...d.education.map(e =>
      h('div', { class: 'edu reveal' },
        h('span', { class: 'when', text: `${e.start} – ${e.end} · ${e.place}` }),
        h('h3', { text: e.school }), h('p', { text: e.degree }), h('p', { text: e.detail }))));
    $('[data-render="skills"]').replaceChildren(...Object.entries(d.skills).map(([g, list]) =>
      h('div', {}, h('h3', { text: g }), h('div', { class: 'chips' }, list.map(s => h('span', { text: s }))))));
    $('[data-render="extras"]').replaceChildren(...d.extras.map(x => h('li', { text: '♞ ' + x })));
  }

  /* ---------------- Projects ---------------- */
  function renderProjects(d) {
    const cards = d.projects.map(projectCard);
    $('[data-render="projects"]').replaceChildren(...cards);
    const priv = d.privateWork.map(p => {
      const c = h('div', { class: 'reveal' }, h('h4', { text: p.name }), h('p', { text: p.description }),
        h('ul', { class: 'chips', 'aria-label': 'Skills' }, p.skills.map(s => h('li', { class: 'chip', text: s }))));
      c.dataset.skills = p.skills.join('|');
      return c;
    });
    $('[data-render="private"]').replaceChildren(...priv);

    const all = [...cards, ...priv], counts = {};
    [...d.projects, ...d.privateWork].forEach(p => p.skills.forEach(s => { counts[s] = (counts[s] || 0) + 1; }));
    const skills = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));
    const btns = ['All', ...skills].map(s => h('button', { class: 'pill', type: 'button', 'aria-pressed': String(s === 'All'), text: s }));
    const bar = $('[data-render="filters"]'), status = $('.filter-status');
    bar.replaceChildren(...btns);
    const apply = s => {
      btns.forEach(b => b.setAttribute('aria-pressed', String(b.textContent === s)));
      let n = 0;
      all.forEach(c => { const hit = s === 'All' || c.dataset.skills.split('|').includes(s); c.classList.toggle('dim', !hit); if (hit) n++; });
      const jobs = d.experience.filter(j => j.skills.includes(s)).map(j => j.org);
      status.textContent = s === 'All' ? '' : `${s} · ${n} project${n === 1 ? '' : 's'}` + (jobs.length ? ` · used at ${jobs.join(', ')}` : '');
    };
    bar.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      apply(b.textContent);
    });
    if (params.get('skill') && counts[params.get('skill')]) apply(params.get('skill'));
  }

  /* ---------------- Project detail ---------------- */
  function renderProject(d) {
    const list = d.projects, i = list.findIndex(p => p.id === params.get('id'));
    const host = $('[data-render="project"]');
    if (i < 0) {
      host.replaceChildren(h('div', { class: 'detail-hero' }, h('a', { class: 'back', href: 'projects.html' }, arrow('←'), 'All projects'),
        h('h1', { class: 'page-title', text: 'Project not found.' })));
      return;
    }
    const p = list[i], prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    document.title = `${p.name} · Thomas Mann`;
    host.replaceChildren(
      h('header', { class: 'detail-hero' },
        h('a', { class: 'back enter', href: 'projects.html' }, arrow('←'), 'All projects'),
        h('h1', { text: p.name }),
        h('p', { class: 'tag alt enter', style: '--d:1', text: p.tagline })),
      h('div', { class: 'detail-grid' },
        h('section', { class: 'enter', style: '--d:2', 'aria-labelledby': 'how' },
          h('h2', { id: 'how', text: 'How it works' }),
          h('ol', { class: 'pipeline' }, p.steps.map(s => h('li', {}, h('div', {}, h('h3', { text: s.title }), h('p', { text: s.text })))))),
        h('div', { class: 'side' },
          h('section', { class: 'enter', style: '--d:3', 'aria-labelledby': 'why' }, h('h2', { id: 'why', text: 'The problem' }), h('p', { text: p.problem })),
          h('section', { class: 'enter', style: '--d:4', 'aria-labelledby': 'what' }, h('h2', { id: 'what', text: 'Summary' }), h('p', { text: p.description })),
          h('section', { class: 'enter', style: '--d:5', 'aria-labelledby': 'stack' }, h('h2', { id: 'stack', text: 'Stack' }),
            h('ul', { class: 'chips' }, p.skills.map(s => h('li', {}, h('a', { class: 'chip', href: `projects.html?skill=${encodeURIComponent(s)}`, text: s })))),
            p.demo ? h('p', { style: 'margin-top:16px' }, h('a', { href: p.demo, rel: 'noopener' }, 'Open the live app ', arrow('↗'))) : null,
            p.repoPublic && p.repo ? h('p', { style: 'margin-top:8px' }, h('a', { href: p.repo, rel: 'noopener' }, 'Source on GitHub ', arrow('↗'))) : null))),
      p.replay ? replay(p.replay) : null,
      h('nav', { class: 'pager', 'aria-label': 'More projects' },
        h('a', { href: projectUrl(prev.id) }, h('span', {}, arrow('←'), ' Previous'), prev.name),
        h('a', { href: projectUrl(next.id) }, h('span', {}, 'Next ', arrow()), next.name)));
  }

  /* Q&A replay (synthetic): a question is embedded, every chunk gets a
     similarity score, the list re-sorts itself (FLIP), the top k are kept
     and the answer is written with citations back to them. The finished
     state is what renders at rest; motion only runs when someone asks. */
  function replay(r) {
    const STAGES = ['Embed question', 'Score chunks', `Keep top ${r.topK}`, 'Answer'];
    const qText = h('p', { class: 'rq' }), ans = h('p', { class: 'ra' }), list = h('ol', { class: 'chunks', 'aria-label': 'Chunks in the index' });
    const stages = h('ol', { class: 'stages', 'aria-label': 'Pipeline stage' }, STAGES.map((t, i) => h('li', {}, h('span', { text: String(i + 1).padStart(2, '0') }), ' ' + t)));
    const status = h('p', { class: 'sr-only', role: 'status' });
    const playBtn = h('button', { class: 'pill play', type: 'button' }, 'Replay ', arrow());
    const picks = r.questions.map((q, i) => h('button', { type: 'button', 'aria-pressed': String(i === 0), text: q.label }));
    let cur = 0, timers = [], items = [];
    const later = (fn, ms) => timers.push(setTimeout(fn, ms));
    const stage = n => $$('li', stages).forEach((li, i) => { li.classList.toggle('on', i === n); li.classList.toggle('past', i < n); });
    const light = (rank, on) => {
      items.forEach(it => it.li.classList.toggle('lit', on && it.rank === rank));
      $$('.cite', ans).forEach(c => c.classList.toggle('lit', on && +c.dataset.rank === rank));
    };
    const order = arr => {
      const from = new Map(items.map(it => [it.li, it.li.getBoundingClientRect().top]));
      list.append(...arr.map(it => it.li));
      if (reduceMotion || !Element.prototype.animate) return;
      arr.forEach((it, i) => {
        const dy = from.get(it.li) - it.li.getBoundingClientRect().top;
        if (dy) it.li.animate([{ transform: `translateY(${dy}px)` }, { transform: 'none' }], { duration: 760, delay: i * 30, easing: 'cubic-bezier(.65, 0, .25, 1)', fill: 'backwards' });
      });
    };
    const build = q => {
      qText.textContent = q.q;
      const ranked = q.chunks.map((c, i) => ({ c, i })).sort((a, b) => b.c.score - a.c.score);
      items = q.chunks.map((c, i) => {
        const rank = ranked.findIndex(x => x.i === i) + 1;
        const li = h('li', { class: rank <= r.topK ? 'hit' : 'miss', style: `--i:${i}` },
          h('span', { class: 'rk', 'aria-hidden': 'true', text: rank <= r.topK ? `[${rank}]` : '' }),
          h('span', { class: 'src', text: c.src }),
          h('span', { class: 'sc' }, h('span', { class: 'bar', style: `--s:${c.score}` }), h('span', { class: 'v', text: c.score.toFixed(2) })),
          h('span', { class: 'tx', text: c.text }),
          h('span', { class: 'sr-only', text: rank <= r.topK ? `Retrieved as source ${rank}, similarity ${c.score.toFixed(2)}.` : `Not retrieved, similarity ${c.score.toFixed(2)}.` }));
        li.addEventListener('mouseenter', () => rank <= r.topK && light(rank, true));
        li.addEventListener('mouseleave', () => light(0, false));
        return { li, rank, c };
      });
      list.replaceChildren(...[...items].sort((a, b) => a.rank - b.rank).map(it => it.li));
      // Answer: words are spans so they can be written in place without reflow; [n] become citation buttons.
      let w = 0;
      ans.replaceChildren(...q.answer.split(/(\[\d+\])/).flatMap(part => {
        const m = part.match(/^\[(\d+)\]$/);
        if (m) {
          const n = +m[1], src = q.chunks[ranked[n - 1].i].src;
          const b = h('button', { class: 'cite', type: 'button', 'data-rank': n, style: `--w:${w++}`, 'aria-label': `Source ${n}: ${src}` }, String(n));
          ['mouseenter', 'focus'].forEach(e => b.addEventListener(e, () => light(n, true)));
          ['mouseleave', 'blur'].forEach(e => b.addEventListener(e, () => light(0, false)));
          b.addEventListener('click', () => { const t = items.find(it => it.rank === n); t.li.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' }); light(n, true); });
          return [b];
        }
        return part.split(/(\s+)/).map(t => /^\s+$|^$/.test(t) ? t : h('span', { class: 'w', style: `--w:${w++}`, text: t }));
      }));
    };
    const finish = () => { box.dataset.step = 'done'; stage(-1); playBtn.disabled = false; };
    const play = () => {
      timers.forEach(clearTimeout); timers = [];
      const q = r.questions[cur];
      build(q);
      if (reduceMotion) { finish(); status.textContent = 'Answer ready, with three cited sources.'; return; }
      playBtn.disabled = true; box.classList.remove('writing');
      list.append(...items.map(it => it.li)); // back to document order
      box.dataset.step = '0'; stage(0); status.textContent = 'Replaying: ' + q.q;
      later(() => { box.dataset.step = '1'; stage(1); }, 700);
      later(() => { box.dataset.step = '2'; stage(2); order([...items].sort((a, b) => a.rank - b.rank)); }, 2000);
      later(() => { box.dataset.step = '3'; box.classList.add('writing'); stage(3); }, 3100);
      later(() => { finish(); status.textContent = 'Answer ready, with three cited sources.'; }, 3100 + ans.querySelectorAll('.w, .cite').length * 28 + 500);
    };
    picks.forEach((b, i) => b.addEventListener('click', () => {
      cur = i; picks.forEach(x => x.setAttribute('aria-pressed', String(x === b))); play();
    }));
    playBtn.addEventListener('click', play);
    const box = h('section', { class: 'replay enter', style: '--d:6', 'aria-labelledby': 'replay-h', 'data-step': 'done' },
      h('div', { class: 'replay-head' },
        h('div', {}, h('h2', { id: 'replay-h', text: 'Replay a question' }), h('p', { class: 'demo-note', text: r.note })),
        h('div', { class: 'replay-ctl' }, h('div', { class: 'seg', role: 'group', 'aria-label': 'Question' }, picks), playBtn)),
      stages,
      h('div', { class: 'replay-grid' },
        h('div', { class: 'qa' }, h('h3', { text: 'Question' }), qText, h('h3', { text: 'Answer' }), ans),
        h('div', {}, h('h3', { text: 'Retrieved from the index' }), list)),
      status);
    build(r.questions[0]);
    return box;
  }

  /* ---------------- Research ---------------- */
  function renderResearch(d) {
    const host = $('[data-render="research"]'), items = d.research, id = params.get('id');
    const item = id && items.find(x => x.id === id);
    if (item) return renderArticle(host, item);
    host.replaceChildren(
      h('header', { class: 'wrap page-head' },
        h('p', { class: 'label enter', text: 'Research' }),
        h('h1', { class: 'page-title enter', style: '--d:1' }, 'Notes from ', h('span', { class: 'alt', text: 'the frontier.' })),
        h('p', { class: 'enter', style: '--d:2', text: 'Longer investigations into AI in banking and credit, AI governance, and how people adopt (and misuse) AI tools.' })),
      h('section', { class: 'wrap', 'aria-label': 'Research list' },
        items.length
          ? h('div', { class: 'cards' }, items.map(x => h('a', { class: 'card reveal r-card', href: `research.html?id=${encodeURIComponent(x.id)}` },
              h('span', { class: 'meta', text: [x.date, x.status].filter(Boolean).join(' · ') }),
              h('h3', { text: x.title, style: `view-transition-name: r-${x.id}` }),
              h('p', { text: x.summary }),
              x.tags ? h('ul', { class: 'chips' }, x.tags.map(t => h('li', { class: 'chip', text: t }))) : null,
              h('span', { class: 'go' }, h('span', { text: 'Read' }), arrow()))))
          : h('div', { class: 'empty enter', style: '--d:3' }, h('h2', { text: 'First studies in progress' }),
              h('p', { text: 'Research projects will appear here as they are completed.' }))));
  }

  async function renderArticle(host, item) {
    document.title = `${item.title} · Thomas Mann`;
    host.replaceChildren(h('article', { class: 'wrap' },
      h('header', { class: 'detail-hero' },
        h('a', { class: 'back enter', href: 'research.html' }, arrow('←'), 'All research'),
        h('p', { class: 'note enter', text: [item.date, item.status].filter(Boolean).join(' · ') }),
        h('h1', { text: item.title, style: `view-transition-name: r-${item.id}` }),
        item.summary ? h('p', { class: 'tag alt enter', style: '--d:1', text: item.summary }) : null),
      h('div', { class: 'prose enter', style: '--d:2', text: 'Loading…' })));
    const prose = $('.prose', host);
    try {
      const [md] = await Promise.all([fetch(item.file).then(r => r.text()), loadScript('https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js'), loadScript('https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.1.6/purify.min.js')]);
      prose.innerHTML = window.DOMPurify.sanitize(window.marked.parse(md));
    } catch (e) { prose.textContent = 'Could not load this article.'; console.warn(e); }
  }
  const loadScript = src => new Promise((ok, fail) => { const s = h('script', { src, defer: '' }); s.onload = ok; s.onerror = fail; document.head.append(s); });

  /* ---------------- Command palette (⌘K) ---------------- */
  function setupPalette(d) {
    const dlg = $('.palette'); if (!dlg) return;
    const input = $('input', dlg), list = $('ul', dlg), empty = $('.palette-empty', dlg), status = $('.palette-status', dlg);
    let announce = 0, opener = null;
    const go = url => () => { location.href = url; };
    const cmds = [
      { t: 'Home', s: 'page', run: go('index.html') },
      { t: 'Work & experience', s: 'page', run: go('work.html') },
      { t: 'Projects', s: 'page', run: go('projects.html') },
      { t: 'Research', s: 'page', run: go('research.html') },
      ...d.projects.map(p => ({ t: p.name, s: 'project', k: p.tagline + ' ' + p.skills.join(' '), run: go(projectUrl(p.id)) })),
      ...d.research.map(r => ({ t: r.title, s: 'research', run: go(`research.html?id=${encodeURIComponent(r.id)}`) })),
      { t: 'Email Thomas', s: 'action', run: () => { location.href = 'mailto:' + d.contact.email; } },
      { t: 'Copy email address', s: 'action', run: () => copyEmail(d.contact.email) },
      { t: 'Open LinkedIn', s: 'action', run: () => window.open(d.contact.linkedin, '_blank', 'noopener') },
      { t: 'Toggle light / dark theme', s: 'action', run: toggleTheme }
    ];
    let shown = cmds, sel = 0;
    const draw = () => {
      list.replaceChildren(...shown.map((c, i) => {
        const li = h('li', { role: 'option', id: 'cmd-' + i, 'aria-selected': String(i === sel) }, h('span', { text: c.t }), h('small', { text: c.s }));
        li.addEventListener('click', () => { dlg.close(); c.run(); });
        li.addEventListener('pointermove', () => { if (sel !== i) { sel = i; mark(); } });
        return li;
      }));
      const none = !shown.length;
      list.hidden = none; empty.hidden = !none;
      input.setAttribute('aria-expanded', String(!none));
      if (none) empty.textContent = `No matches for “${input.value.trim()}”. Try a skill, like RAG or Python.`;
      // Announce the result count once typing pauses, not on every keystroke.
      clearTimeout(announce);
      announce = setTimeout(() => { status.textContent = none ? 'No matches' : `${shown.length} result${shown.length === 1 ? '' : 's'}`; }, 450);
      mark();
    };
    const mark = () => {
      $$('li', list).forEach((li, i) => li.setAttribute('aria-selected', String(i === sel)));
      if (shown.length) input.setAttribute('aria-activedescendant', 'cmd-' + sel); else input.removeAttribute('aria-activedescendant');
      list.children[sel]?.scrollIntoView({ block: 'nearest' });
    };
    const filter = () => {
      const q = input.value.trim().toLowerCase();
      shown = !q ? cmds : cmds.filter(c => (c.t + ' ' + c.s + ' ' + (c.k || '')).toLowerCase().includes(q));
      sel = 0; draw();
    };
    const open = () => { if (dlg.open) return; opener = document.activeElement; input.value = ''; status.textContent = ''; filter(); dlg.showModal(); input.focus(); };
    // Hand focus back to whatever opened the menu (unless a command navigated away).
    dlg.addEventListener('close', () => { clearTimeout(announce); if (opener && opener.isConnected && document.activeElement !== opener) opener.focus({ preventScroll: true }); opener = null; });
    input.addEventListener('input', filter);
    input.addEventListener('keydown', e => {
      const n = shown.length;
      const to = { ArrowDown: (sel + 1) % n, ArrowUp: (sel - 1 + n) % n, Home: 0, End: n - 1 }[e.key];
      // Home/End move the caret while there is text to edit; they pick the first/last command otherwise.
      const caretKey = (e.key === 'Home' || e.key === 'End') && input.value && !e.ctrlKey;
      if (to != null && n && !caretKey) { sel = to; mark(); e.preventDefault(); }
      else if (e.key === 'Enter' && shown[sel]) { e.preventDefault(); dlg.close(); shown[sel].run(); }
    });
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    $$('.palette-open').forEach(b => b.addEventListener('click', open));
    document.addEventListener('keydown', e => {
      const typing = /input|textarea|select/i.test(document.activeElement?.tagName || '');
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) { e.preventDefault(); dlg.open ? dlg.close() : open(); }
    });
  }

  /* ---------------- The lab: two demos behind tabs (synthetic data) ----------------
     One Pause button and one visibility check drive whichever tab is open;
     the hidden demo never runs. Each demo also holds still while the pointer
     or focus is inside it, so nothing moves under the reader. */
  function lab() {
    const box = $('.demo'); if (!box) return;
    const pauseBtn = $('.demo-pause');
    const tabs = $$('[role="tab"]', box);
    const demos = { 'lab-8k': eightK(), 'lab-inbox': inbox() };
    let paused = false, visible = true, active = 'lab-inbox'; // inbox first until the 8-K feed uses real data
    const sync = () => Object.entries(demos).forEach(([id, d]) => d.allow(!paused && visible && !document.hidden && id === active));
    const setPaused = v => { paused = v; box.classList.toggle('paused', v); pauseBtn.textContent = v ? 'Play' : 'Pause'; pauseBtn.setAttribute('aria-pressed', String(v)); sync(); };
    const select = (tab, focus) => {
      tabs.forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;
        $('#' + t.getAttribute('aria-controls')).hidden = !on;
      });
      active = tab.getAttribute('aria-controls');
      if (focus) tab.focus();
      sync();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => {
        const n = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
        if (n == null) return;
        e.preventDefault(); select(tabs[(n + tabs.length) % tabs.length], true);
      });
    });
    pauseBtn.addEventListener('click', () => setPaused(!paused));
    if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => { visible = en.isIntersecting; sync(); }).observe(box);
    document.addEventListener('visibilitychange', sync);
    setPaused(reduceMotion);
  }

  // Shared timer logic: runs only when the lab allows it and nobody is reading.
  function ticker(el, fn, ms) {
    let allowed = false, hovering = false, timer = 0;
    const run = () => { clearInterval(timer); timer = allowed && !hovering ? setInterval(fn, ms) : 0; };
    ['mouseenter', 'focusin'].forEach(ev => el.addEventListener(ev, () => { hovering = true; run(); }));
    ['mouseleave', 'focusout'].forEach(ev => el.addEventListener(ev, () => { hovering = false; run(); }));
    return { allow: v => { allowed = v; run(); } };
  }
  const clockText = m => `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
  const pickNot = (n, last) => { let i; do { i = Math.floor(Math.random() * n); } while (i === last && n > 1); return i; };

  /* 8-K alert triage */
  function eightK() {
    const feed = $('.feed');
    const COS = [['HRBR', 'Harborview Bancorp'], ['KSTL', 'Kestrel Logistics'], ['PNLK', 'Pinelake Foods'], ['ORVM', 'Orvium Materials'], ['BLFN', 'Bluefin Health'], ['CDRX', 'Cedar Ridge Energy'], ['MRDN', 'Meridian Hospitality'], ['TLLS', 'Tallis Software'], ['QNTR', 'Quarry & Stone Co.']];
    const ITEMS = [
      { code: '4.02', p: 'high', hd: 'Prior financial statements should no longer be relied upon', why: 'Restatement risk: revisit covenant calculations built on those numbers.' },
      { code: '2.04', p: 'high', hd: 'Triggering event accelerates a direct financial obligation', why: 'Possible default or acceleration: check exposure and cross-default terms.' },
      { code: '1.03', p: 'high', hd: 'Company files for Chapter 11 protection', why: 'Bankruptcy filing: immediate credit review.' },
      { code: '5.02', p: 'watch', hd: 'Chief Financial Officer departs; interim CFO named', why: 'Finance leadership change: watch the next reporting cycle.' },
      { code: '2.03', p: 'watch', hd: 'Enters new $150M term loan facility', why: "New debt changes leverage: update the borrower's debt schedule." },
      { code: '1.01', p: 'watch', hd: 'Signs material supply agreement with new customer', why: 'Revenue concentration may shift: note for the next review.' },
      { code: '2.02', p: 'info', hd: 'Announces quarterly results', why: 'Routine earnings release: summarise, no action needed.' },
      { code: '7.01', p: 'info', hd: 'Investor presentation furnished (Reg FD)', why: 'Routine disclosure: index for search, no action needed.' },
      { code: '8.01', p: 'info', hd: 'Board declares regular quarterly dividend', why: 'Routine: no change in credit picture.' }
    ];
    let filter = 'all', clock = 9 * 60 + 2, last = -1, lastCo = -1;
    const make = () => {
      const it = ITEMS[last = pickNot(ITEMS.length, last)];
      const co = COS[lastCo = pickNot(COS.length, lastCo)];
      clock += 1 + Math.floor(Math.random() * 6);
      const btn = h('button', { type: 'button', 'aria-expanded': 'false' },
        h('span', { class: 'tk', text: co[0] }), h('span', { class: 'hd', text: it.hd }), h('span', { class: 'pri ' + it.p, text: it.p }),
        h('span', { class: 'meta', text: `${clockText(clock)} ET · Item ${it.code} · ${co[1]}` }), h('span', { class: 'why', text: 'Why: ' + it.why }));
      const li = h('li', { class: 'alert' }, btn);
      li.dataset.p = it.p; li.hidden = filter !== 'all' && filter !== it.p;
      btn.addEventListener('click', () => btn.setAttribute('aria-expanded', String(li.classList.toggle('open'))));
      return li;
    };
    const push = () => { feed.prepend(make()); while (feed.children.length > 14) feed.lastElementChild.remove(); };
    for (let k = 0; k < 6; k++) push();
    $('.demo-filters').addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      filter = b.dataset.p;
      $$('.demo-filters button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      $$('.alert', feed).forEach(li => { li.hidden = filter !== 'all' && li.dataset.p !== filter; });
    });
    return ticker(feed, push, 2600);
  }

  /* Inbox triage: a message is read in the slot at the top, gets a lane and a
     reason, then drops into its lane (FLIP, so nothing else on the page moves). */
  function inbox() {
    const panel = $('#lab-inbox'), slot = $('.reading', panel), why = $('.inbox-why', panel);
    const LANES = { act: 'Act today', hand: 'Hand off', fyi: 'FYI' };
    const MAIL = [
      { l: 'act', from: 'Borrower · Pinelake Foods', s: 'Closing moved up: can we sign Thursday?', why: 'A borrower needs a date decision: reply today.' },
      { l: 'act', from: 'Loan officer', s: 'Policy exception request on a pending deal', why: 'The deal is stalled until someone with authority approves it.' },
      { l: 'act', from: 'Title company', s: 'Lien search shows an unexpected UCC filing', why: 'Possible blocker to closing: review before anything else.' },
      { l: 'act', from: 'Borrower · Kestrel Logistics', s: 'Question about a late payment notice', why: 'Payment problem on an active loan: respond the same day.' },
      { l: 'hand', from: 'Credit admin', s: 'Updated tax returns received for annual review', why: 'Routine document: route to the analyst on the file.' },
      { l: 'hand', from: 'Appraiser', s: 'Draft appraisal ready for review', why: 'Needs a reviewer, not the inbox owner.' },
      { l: 'hand', from: 'Borrower · Cedar Ridge Energy', s: 'Renewed insurance certificate attached', why: 'Collateral paperwork: send to loan servicing.' },
      { l: 'hand', from: 'Operations', s: 'Request to change a payment draft date', why: 'Servicing change: belongs with operations.' },
      { l: 'fyi', from: 'Industry newsletter', s: 'Weekly rate outlook', why: 'Newsletter: read in the daily digest.' },
      { l: 'fyi', from: 'Compliance', s: 'Reminder: annual training due end of month', why: 'Deadline is weeks away: no action today.' },
      { l: 'fyi', from: 'Calendar', s: 'Pipeline meeting moved to 2:30', why: 'Calendar update: no reply needed.' },
      { l: 'fyi', from: 'Marketing', s: 'New branch opening announcement', why: 'Announcement: nothing to do.' }
    ];
    const lane = k => $('.lane.' + k, panel);
    let last = -1, clock = 8 * 60 + 14, pending = 0;
    const counts = { act: 0, hand: 0, fyi: 0 };
    const showWhy = (m, btn) => {
      $$('.lane button', panel).forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      why.replaceChildren(h('b', { text: LANES[m.l] + ': ' }), m.why);
    };
    const file = (m, from) => {
      const btn = h('button', { type: 'button', 'aria-pressed': 'false' }, h('span', { class: 'f', text: m.from }), h('span', { class: 's', text: m.s }));
      btn.addEventListener('click', () => showWhy(m, btn));
      const li = h('li', {}, btn), ol = $('ol', lane(m.l));
      li.dataset.s = m.s;
      $$('li', ol).forEach(x => { if (x.dataset.s === m.s) x.remove(); });
      ol.prepend(li);
      while (ol.children.length > 4) ol.lastElementChild.remove();
      $('.n', lane(m.l)).textContent = ++counts[m.l];
      if (from && !reduceMotion && li.animate) {
        const to = li.getBoundingClientRect();
        li.animate([{ transform: `translate(${from.left - to.left}px, ${from.top - to.top}px)`, opacity: .4 }, { transform: 'none', opacity: 1 }],
          { duration: 520, easing: 'cubic-bezier(.16, 1, .3, 1)' });
      }
    };
    const next = () => {
      const m = MAIL[last = pickNot(MAIL.length, last)];
      clock += 1 + Math.floor(Math.random() * 4);
      const card = h('div', { class: 'msg' },
        h('span', { class: 'meta', text: `${clockText(clock)} · ${m.from}` }),
        h('span', { class: 's', text: m.s }),
        h('span', { class: 'verdict' }, h('span', { class: 'to ' + m.l }, arrow(), ' ' + LANES[m.l]), h('span', { text: m.why })));
      slot.replaceChildren(card);
      clearTimeout(pending);
      pending = setTimeout(() => { card.classList.add('done'); file(m, card.getBoundingClientRect()); }, reduceMotion ? 0 : 1500);
    };
    // Seed so the panel reads fully at rest.
    [0, 4, 8, 1, 9, 5, 10].forEach(i => file(MAIL[i]));
    last = 10; next();
    return ticker(panel, next, 3400);
  }
})();
