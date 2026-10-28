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
  const arrow = (c = '→') => h('span', { class: 'arrow', 'aria-hidden': 'true', text: c });
  const projectUrl = id => `project.html?id=${encodeURIComponent(id)}`;

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

  async function copyEmail(email) {
    const out = $('.copy-status');
    try { await navigator.clipboard.writeText(email); if (out) out.textContent = 'Copied ' + email; }
    catch (e) { if (out) out.textContent = email; }
  }

  /* ---------------- Shared renderers ---------------- */
  function projectCard(p, i) {
    const card = h('a', { class: 'card reveal', href: projectUrl(p.id) },
      h('span', { class: 'k', text: p.tagline }),
      h('h3', { text: p.name, style: `view-transition-name: p-${p.id}` }),
      h('ol', { class: 'flow', 'aria-label': 'How it works' }, p.flow.map((s, j) => h('li', { text: s, style: `--i:${j}` }))),
      h('p', { text: p.description }),
      h('ul', { class: 'chips', 'aria-label': 'Skills' }, p.skills.map(s => h('li', { class: 'chip', text: s }))),
      h('span', { class: 'go' }, h('span', { text: 'How it works' }), arrow()));
    card.dataset.skills = p.skills.join('|');
    return card;
  }

  /* ---------------- Home ---------------- */
  function renderHome(d) {
    $('[data-render="stats"]').replaceChildren(...d.stats.map(s =>
      h('div', { class: 'stat' }, h('div', { class: 'n', 'data-count': s.count ? s.value : null, text: s.value }), h('div', { class: 'l', text: s.label }))));
    countUp();
    $('[data-render="featured"]').replaceChildren(...d.projects.filter(p => p.featured).map(projectCard));
    demo();
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
  function renderWork(d) {
    $('[data-render="experience"]').replaceChildren(...d.experience.map((j, i) =>
      h('li', { class: 'job ' + (i ? 'reveal' : 'enter'), style: '--d:3' },
        h('div', {}, h('span', { class: 'when', text: `${j.start} – ${j.end}` }), h('span', { class: 'place', text: j.place })),
        h('div', {},
          h('h3', { text: j.org }),
          h('p', { class: 'role', text: j.role }),
          j.progression ? h('ol', { class: 'ladder', 'aria-label': 'Roles held, earliest first' }, j.progression.map(r => h('li', { text: r }))) : null,
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
        h('h1', { text: p.name, style: `view-transition-name: p-${p.id}` }),
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
            p.demo ? h('p', { style: 'margin-top:16px' }, h('a', { href: p.demo, rel: 'noopener' }, 'Open the live app', arrow('↗'))) : null,
            p.repoPublic && p.repo ? h('p', { style: 'margin-top:8px' }, h('a', { href: p.repo, rel: 'noopener' }, 'Source on GitHub', arrow('↗'))) : null))),
      h('nav', { class: 'pager', 'aria-label': 'More projects' },
        h('a', { href: projectUrl(prev.id) }, h('span', { text: '← Previous' }), prev.name),
        h('a', { href: projectUrl(next.id) }, h('span', { text: 'Next →' }), next.name)));
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
    const input = $('input', dlg), list = $('ul', dlg);
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
      mark();
    };
    const mark = () => {
      $$('li', list).forEach((li, i) => li.setAttribute('aria-selected', String(i === sel)));
      input.setAttribute('aria-activedescendant', shown.length ? 'cmd-' + sel : '');
      list.children[sel]?.scrollIntoView({ block: 'nearest' });
    };
    const filter = () => {
      const q = input.value.trim().toLowerCase();
      shown = !q ? cmds : cmds.filter(c => (c.t + ' ' + c.s + ' ' + (c.k || '')).toLowerCase().includes(q));
      sel = 0; draw();
    };
    const open = () => { if (dlg.open) return; input.value = ''; filter(); dlg.showModal(); input.focus(); };
    input.addEventListener('input', filter);
    input.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { sel = Math.min(shown.length - 1, sel + 1); mark(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); mark(); e.preventDefault(); }
      else if (e.key === 'Enter' && shown[sel]) { e.preventDefault(); dlg.close(); shown[sel].run(); }
    });
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    $$('.palette-open').forEach(b => b.addEventListener('click', open));
    document.addEventListener('keydown', e => {
      const typing = /input|textarea|select/i.test(document.activeElement?.tagName || '');
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) { e.preventDefault(); dlg.open ? dlg.close() : open(); }
    });
  }

  /* ---------------- 8-K triage demo (synthetic data) ---------------- */
  function demo() {
    const feed = $('.feed'); if (!feed) return;
    const box = $('.demo'), pauseBtn = $('.demo-pause');
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
    let filter = 'all', paused = false, timer = 0, clock = 9 * 60 + 2, last = -1, lastCo = -1, visible = true;
    const make = () => {
      let i; do { i = Math.floor(Math.random() * ITEMS.length); } while (i === last); last = i;
      const it = ITEMS[i];
      let c; do { c = Math.floor(Math.random() * COS.length); } while (c === lastCo); lastCo = c; const co = COS[c];
      clock += 1 + Math.floor(Math.random() * 6);
      const t = `${String(Math.floor(clock / 60) % 24).padStart(2, '0')}:${String(clock % 60).padStart(2, '0')}`;
      const btn = h('button', { type: 'button', 'aria-expanded': 'false' },
        h('span', { class: 'tk', text: co[0] }), h('span', { class: 'hd', text: it.hd }), h('span', { class: 'pri ' + it.p, text: it.p }),
        h('span', { class: 'meta', text: `${t} ET · Item ${it.code} · ${co[1]}` }), h('span', { class: 'why', text: 'Why: ' + it.why }));
      const li = h('li', { class: 'alert' }, btn);
      li.dataset.p = it.p; li.hidden = filter !== 'all' && filter !== it.p;
      btn.addEventListener('click', () => btn.setAttribute('aria-expanded', String(li.classList.toggle('open'))));
      return li;
    };
    const push = () => { feed.prepend(make()); while (feed.children.length > 14) feed.lastElementChild.remove(); };
    const run = () => { clearInterval(timer); timer = (!paused && visible && !document.hidden && !hovering) ? setInterval(push, 2600) : 0; };
    let hovering = false;
    const setPaused = v => { paused = v; box.classList.toggle('paused', v); pauseBtn.textContent = v ? 'Play' : 'Pause'; pauseBtn.setAttribute('aria-pressed', String(v)); run(); };
    for (let k = 0; k < 6; k++) push();
    pauseBtn.addEventListener('click', () => setPaused(!paused));
    ['mouseenter', 'focusin'].forEach(ev => feed.addEventListener(ev, () => { hovering = true; run(); }));
    ['mouseleave', 'focusout'].forEach(ev => feed.addEventListener(ev, () => { hovering = false; run(); }));
    $('.demo-filters').addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      filter = b.dataset.p;
      $$('.demo-filters button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      $$('.alert', feed).forEach(li => { li.hidden = filter !== 'all' && li.dataset.p !== filter; });
    });
    if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => { visible = en.isIntersecting; run(); }).observe(box);
    document.addEventListener('visibilitychange', run);
    setPaused(reduceMotion);
  }
})();
