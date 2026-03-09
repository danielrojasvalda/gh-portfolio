(function () {
  const root = document.documentElement;
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('main section[id]');
  const backToTop = document.querySelector('.back-to-top');
  const themeToggle = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function onScroll() {
    const y = window.scrollY;
    if (backToTop) {
      backToTop.classList.toggle('show', y > 260);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (window.IntersectionObserver && navLinks.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        });
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0.05 }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  if (window.Typed) {
    const typedOutput = document.querySelector('.typed-text-output');
    const typedSource = document.querySelector('.typed-text');
    const typedWrap = document.querySelector('.typed-text-wrap');
    const typedReserve = document.querySelector('.typed-text-reserve');
    if (typedOutput && typedSource) {
      const strings = typedSource.textContent.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      if (strings.length) {
        if (typedWrap) {
          const probe = document.createElement('span');
          const typedStyles = window.getComputedStyle(typedOutput);
          probe.style.position = 'absolute';
          probe.style.visibility = 'hidden';
          probe.style.whiteSpace = 'nowrap';
          probe.style.fontFamily = typedStyles.fontFamily;
          probe.style.fontSize = typedStyles.fontSize;
          probe.style.fontWeight = typedStyles.fontWeight;
          probe.style.letterSpacing = typedStyles.letterSpacing;
          probe.style.lineHeight = typedStyles.lineHeight;
          document.body.appendChild(probe);

          let maxWidth = 0;
          let longestPhrase = strings[0];
          strings.forEach(function (phrase) {
            probe.textContent = phrase;
            const w = Math.ceil(probe.getBoundingClientRect().width);
            if (w > maxWidth) {
              maxWidth = w;
              longestPhrase = phrase;
            }
          });
          probe.remove();
          if (maxWidth > 0) {
            typedWrap.style.setProperty('--typed-width', maxWidth + 'px');
          }
          if (typedReserve) {
            typedReserve.textContent = longestPhrase;
          }
        }

        new Typed('.typed-text-output', {
          strings: strings,
          typeSpeed: 70,
          backSpeed: 38,
          backDelay: 1800,
          smartBackspace: false,
          loop: true
        });
      }
    }
  }

  if (themeToggle) {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      root.setAttribute('data-theme', saved);
      themeToggle.setAttribute('aria-pressed', saved === 'dark' ? 'true' : 'false');
      themeToggle.innerHTML = saved === 'dark' ? '<i class="far fa-sun"></i>' : '<i class="far fa-moon"></i>';
    }

    themeToggle.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeToggle.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
      themeToggle.innerHTML = next === 'dark' ? '<i class="far fa-sun"></i>' : '<i class="far fa-moon"></i>';
    });
  }

  function initPortfolioFilters() {
    const filters = document.getElementById('portfolio-flters');
    const items = Array.from(document.querySelectorAll('.portfolio-item'));
    if (!filters || !items.length) return;

    filters.addEventListener('click', function (e) {
      const btn = e.target.closest('li[data-filter]');
      if (!btn) return;

      Array.from(filters.querySelectorAll('li')).forEach(function (li) {
        li.classList.remove('active');
      });
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      items.forEach(function (item) {
        const show = filter === '*' || item.matches(filter);
        item.style.display = show ? '' : 'none';
      });
    });
  }
  initPortfolioFilters();

  function initExperienceDetails() {
    const detailBlocks = document.querySelectorAll('.exp-details');
    detailBlocks.forEach(function (detailsEl) {
      const label = detailsEl.querySelector('.toggle-label');
      if (!label) return;
      const syncLabel = function () {
        label.textContent = detailsEl.open ? 'Hide details' : 'Show details';
      };
      syncLabel();
      detailsEl.addEventListener('toggle', syncLabel);
    });
  }
  initExperienceDetails();

  const $id = function (id) { return document.getElementById(id); };
  const f = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
  const fmt = function (n) { return '$' + n.toLocaleString('en-US'); };

  const inQty = $id('inQty');
  const outQty = $id('outQty');
  const inAllowed = $id('inAllowed');
  const outAllowed = $id('outAllowed');
  const inLabor = $id('inLabor');
  const outLabor = $id('outLabor');
  const inSup = $id('inSup');
  const outSup = $id('outSup');
  const inReal = $id('inReal');
  const outReal = $id('outReal');
  const outRev = $id('outRev');
  const outProfit = $id('outProfit');
  const outLaborTotal = $id('outLaborTotal');
  const outSupTotal = $id('outSupTotal');
  const metricRevenue = $id('metricRevenue');
  const metricLabor = $id('metricLabor');
  const metricSupplies = $id('metricSupplies');
  const metricProfit = $id('metricProfit');
  const barRevenue = $id('barRevenue');
  const barLabor = $id('barLabor');
  const barSupplies = $id('barSupplies');
  const barProfit = $id('barProfit');
  const snapshotFallback = $id('snapshotFallback');
  const snapshotContent = $id('snapshotContent');

  if (!inQty || !inAllowed || !inLabor || !inSup || !inReal) return;

  function safeNumber(v) {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }

  function setFallback(isVisible) {
    if (snapshotFallback) snapshotFallback.hidden = !isVisible;
    if (snapshotContent) snapshotContent.hidden = isVisible;
  }

  function setText(el, value) {
    if (el) el.textContent = value;
  }

  function setWidth(el, value) {
    if (!el) return;
    const clamped = Math.max(0, Math.min(100, value));
    el.style.width = clamped + '%';
  }

  function recompute() {
    const qty = safeNumber(inQty.value);
    const allowed = safeNumber(inAllowed.value);
    const labor = safeNumber(inLabor.value);
    const sup = safeNumber(inSup.value);
    const realPct = safeNumber(inReal.value);

    if ([qty, allowed, labor, sup, realPct].some(function (n) { return n === null; })) {
      setFallback(true);
      setText(outRev, '—');
      setText(outProfit, '—');
      setText(outLaborTotal, '—');
      setText(outSupTotal, '—');
      return;
    }

    const real = realPct / 100;
    const rev = qty * allowed * real;
    const laborTotal = qty * labor;
    const suppliesTotal = qty * sup;
    const cost = laborTotal + suppliesTotal;
    const prof = rev - cost;
    const maxValue = Math.max(rev, laborTotal, suppliesTotal, Math.abs(prof), 1);

    setFallback(false);
    setText(outQty, String(Math.round(qty)));
    setText(outAllowed, f.format(allowed));
    setText(outLabor, f.format(labor));
    setText(outSup, f.format(sup));
    setText(outReal, String(Math.round(realPct)));

    setText(outRev, fmt(Math.round(rev)));
    setText(outLaborTotal, fmt(Math.round(laborTotal)));
    setText(outSupTotal, fmt(Math.round(suppliesTotal)));
    setText(outProfit, fmt(Math.round(prof)));

    setText(metricRevenue, fmt(Math.round(rev)));
    setText(metricLabor, fmt(Math.round(laborTotal)));
    setText(metricSupplies, fmt(Math.round(suppliesTotal)));
    setText(metricProfit, fmt(Math.round(prof)));

    setWidth(barRevenue, (rev / maxValue) * 100);
    setWidth(barLabor, (laborTotal / maxValue) * 100);
    setWidth(barSupplies, (suppliesTotal / maxValue) * 100);
    setWidth(barProfit, (Math.abs(prof) / maxValue) * 100);
  }

  [inQty, inAllowed, inLabor, inSup, inReal].forEach(function (el) {
    if (el) el.addEventListener('input', recompute);
  });
  recompute();
})();
