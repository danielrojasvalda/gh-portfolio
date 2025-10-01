/* global $, Isotope, imagesLoaded, Typed, Chart */
(function ($) {
  "use strict";

  const $w = $(window);

  // ---- Nav + scroll helpers
  function onScroll() {
    const y = $w.scrollTop();
    if (y > 200) $('.navbar').fadeIn('slow').css('display', 'flex');
    else $('.navbar').fadeOut('slow').css('display', 'none');

    if (y > 100) $('.scroll-to-bottom').fadeOut('slow');
    else $('.scroll-to-bottom').fadeIn('slow');

    if (y > 200) $('.back-to-top').fadeIn('slow');
    else $('.back-to-top').fadeOut('slow');
  }
  $w.on('scroll', onScroll);
  onScroll();

  // ---- Smooth anchor scroll
  $('.navbar-nav').on('click', 'a', function (e) {
    if (this.hash) {
      e.preventDefault();
      const $t = $(this.hash);
      if ($t.length) {
        $('html, body').animate({ scrollTop: $t.offset().top - 45 }, 900, 'easeInOutExpo');
        $('.navbar-nav .active').removeClass('active');
        $(this).addClass('active');
      }
    }
  });

  // ---- Typed.js (guard + slower)
  if (!window.__typedInitDone && $('.typed-text-output').length && window.Typed) {
    window.__typedInitDone = true;
    const typedStrings = $('.typed-text').text();
    new Typed('.typed-text-output', {
      strings: typedStrings.split(', '),
      typeSpeed: 70,
      backSpeed: 35,
      backDelay: 1000,
      startDelay: 250,
      smartBackspace: false,
      loop: true,
      cursorChar: '|'
    });
  }

  // ---- Modal video
  let videoSrc = '';
  $('.btn-play').on('click', function () { videoSrc = $(this).data('src') || ''; });
  const $modal = $('#videoModal');
  if ($modal.length) {
    $modal.on('shown.bs.modal', function () {
      $('#video').attr('src', videoSrc ? `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0` : '');
    });
    $modal.on('hide.bs.modal', function () { $('#video').attr('src', ''); });
  }

  // ---- Skills progress
  if ($('.skill').length && $.fn.waypoint) {
    $('.skill').waypoint(function () {
      $('.progress .progress-bar').each(function () {
        $(this).css('width', (Number($(this).attr('aria-valuenow')) || 0) + '%');
      });
    }, { offset: '80%' });
  }

  // ---- Portfolio Isotope
  (function initIsotope() {
    const $grid = $('.portfolio-container');
    if (!$grid.length || !$.fn.isotope) return;
    const start = () => {
      const iso = $grid.isotope({ itemSelector: '.portfolio-item', layoutMode: 'fitRows' });
      $('#portfolio-flters').on('click', 'li', function () {
        $('#portfolio-flters li').removeClass('active');
        $(this).addClass('active');
        iso.isotope({ filter: $(this).data('filter') });
      });
    };
    if (window.imagesLoaded) { $grid.imagesLoaded(start); } else { start(); }
  })();

  // ---- Back to top
  $('.back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 900, 'easeInOutExpo');
  });

  // ---- Testimonials
  if ($('.testimonial-carousel').length && $.fn.owlCarousel) {
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      dots: true,
      loop: true,
      items: 1
    });
  }

  // ---- Theme toggle (no Bootstrap class overrides)
  (function () {
    const root = document.documentElement;
    const btn  = document.getElementById('themeToggle');
    if (!btn) return;

    const saved = localStorage.getItem('theme');
    const initial = (saved === 'light' || saved === 'dark')
      ? saved
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    root.setAttribute('data-theme', initial);
    btn.setAttribute('aria-pressed', initial === 'dark' ? 'true' : 'false');
    btn.innerHTML = initial === 'dark' ? '<i class="far fa-sun"></i>' : '<i class="far fa-moon"></i>';

    btn.addEventListener('click', () => {
      const next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      btn.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
      btn.innerHTML = next === 'dark' ? '<i class="far fa-sun"></i>' : '<i class="far fa-moon"></i>';
      document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }));
    });
  })();

  // ---- Revenue & Cost chart
  (function () {
    if (!window.Chart) return;
    const $id = (id) => document.getElementById(id);
    const ctx = $id('rcChart');
    if (!ctx) return;

    const nf = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
    const money = (n) => '$' + (n || 0).toLocaleString('en-US');

    const inQty = $id('inQty'), outQty = $id('outQty');
    const inAllowed = $id('inAllowed'), outAllowed = $id('outAllowed');
    const inLabor = $id('inLabor'), outLabor = $id('outLabor');
    const inSup = $id('inSup'), outSup = $id('outSup');
    const inReal = $id('inReal'), outReal = $id('outReal');
    const outRev = $id('outRev'), outCost = $id('outCost'), outProfit = $id('outProfit');

    const chart = new Chart(ctx, {
      type: 'bar',
      data: { labels: ['Revenue','Cost','Profit'], datasets: [{ label: 'USD', data: [0,0,0] }] },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { ticks: { callback: (v)=>'$'+nf.format(v) } } }
      }
    });

    function recompute(){
      const qty = +inQty.value, allowed = +inAllowed.value, labor = +inLabor.value, sup = +inSup.value, real = (+inReal.value)/100;
      const revenue = qty * allowed * real;
      const cost = qty * (labor + sup);
      const profit = revenue - cost;

      chart.data.datasets[0].data = [revenue, cost, profit];
      chart.update('none');

      outQty.textContent = qty;
      outAllowed.textContent = allowed.toLocaleString('en-US');
      outLabor.textContent = labor.toLocaleString('en-US');
      outSup.textContent = sup.toLocaleString('en-US');
      outReal.textContent = Math.round(real * 100);
      outRev.textContent = money(revenue);
      outCost.textContent = money(cost);
      outProfit.textContent = money(profit);
    }
    [inQty,inAllowed,inLabor,inSup,inReal].forEach(el => el && el.addEventListener('input', recompute));
    recompute();
  })();

})(jQuery);
