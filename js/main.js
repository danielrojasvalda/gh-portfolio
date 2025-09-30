(function ($) {
  "use strict";

  const $w = $(window);

  /* ---------------- Nav + Scroll UI (single handler) ---------------- */
  function onScroll() {
    const y = $w.scrollTop();
    // Navbar
    if (y > 200) $('.navbar').fadeIn('slow').css('display', 'flex');
    else $('.navbar').fadeOut('slow').css('display', 'none');
    // Scroll helpers
    if (y > 100) $('.scroll-to-bottom').fadeOut('slow');
    else $('.scroll-to-bottom').fadeIn('slow');
    if (y > 200) $('.back-to-top').fadeIn('slow');
    else $('.back-to-top').fadeOut('slow');
  }
  $w.on('scroll', onScroll);
  onScroll(); // run once

  /* ---------------- Smooth anchor scroll ---------------- */
  $('.navbar-nav a').on('click', function (e) {
    if (this.hash) {
      e.preventDefault();
      const $target = $(this.hash);
      if ($target.length) {
        $('html, body').animate({ scrollTop: $target.offset().top - 45 }, 1500, 'easeInOutExpo');
        $('.navbar-nav .active').removeClass('active');
        $(this).closest('a').addClass('active');
      }
    }
  });

  /* ---------------- Typed.js ---------------- */
  if ($('.typed-text-output').length && window.Typed) {
    const typedStrings = $('.typed-text').text();
    new Typed('.typed-text-output', {
      strings: typedStrings.split(', '),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
    });
  }

  /* ---------------- Modal Video ---------------- */
  $(function () {
    let videoSrc = '';
    $('.btn-play').on('click', function () { videoSrc = $(this).data('src') || ''; });
    const $modal = $('#videoModal');
    if ($modal.length) {
      $modal.on('shown.bs.modal', function () {
        $('#video').attr('src', videoSrc ? `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0` : '');
      });
      $modal.on('hide.bs.modal', function () { $('#video').attr('src', ''); });
    }
  });

  /* ---------------- Skills progress ---------------- */
  if ($('.skill').length && $.fn.waypoint) {
    $('.skill').waypoint(function () {
      $('.progress .progress-bar').each(function () {
        $(this).css('width', ($(this).attr('aria-valuenow') || 0) + '%');
      });
    }, { offset: '80%' });
  }

  /* ---------------- Portfolio Isotope + Filters ---------------- */
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

  /* ---------------- Back to top ---------------- */
  $('.back-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  /* ---------------- Testimonials carousel ---------------- */
  if ($('.testimonial-carousel').length && $.fn.owlCarousel) {
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      dots: true,
      loop: true,
      items: 1
    });
  }

  /* ---------------- Theme toggle (auto + manual) ---------------- */
  (function () {
    const root = document.documentElement;
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      root.setAttribute('data-theme', saved);
      btn.setAttribute('aria-pressed', saved === 'dark' ? 'true' : 'false');
      btn.innerHTML = saved === 'dark' ? '<i class="far fa-sun"></i>' : '<i class="far fa-moon"></i>';
    }

    btn.addEventListener('click', () => {
      const next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      btn.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
      btn.innerHTML = next === 'dark' ? '<i class="far fa-sun"></i>' : '<i class="far fa-moon"></i>';
    });
  })();

  /* ---------------- Revenue & Cost chart (if present) ---------------- */
  (function () {
    if (!window.Chart) return;
    const $id = (id) => document.getElementById(id);
    const ctx = $id('rcChart');
    if (!ctx) return;

    const f = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
    const fmt = (n) => '$' + n.toLocaleString('en-US');

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
        scales: { y: { ticks: { callback: (v) => '$' + f.format(v) } } }
      }
    });

    function recompute(){
      const qty = +inQty.value, allowed = +inAllowed.value, labor = +inLabor.value, sup = +inSup.value, real = (+inReal.value)/100;
      const rev = qty * allowed * real;
      const cost = qty * (labor + sup);
      const prof = rev - cost;
      chart.data.datasets[0].data = [rev, cost, prof];
      chart.update('none');

      outQty.textContent = qty;
      outAllowed.textContent = allowed.toLocaleString('en-US');
      outLabor.textContent = labor.toLocaleString('en-US');
      outSup.textContent = sup.toLocaleString('en-US');
      outReal.textContent = Math.round(real * 100);

      outRev.textContent = fmt(rev);
      outCost.textContent = fmt(cost);
      outProfit.textContent = fmt(prof);
    }

    [inQty,inAllowed,inLabor,inSup,inReal].forEach(el => el && el.addEventListener('input', recompute));
    recompute();
  })();

})(jQuery);
