<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Freddy Rojas Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Experienced software developer showcasing projects and expertise in web and application development.">
  <meta name="keywords" content="Software developer, web development, application development, programming, coding, portfolio, projects">
  <meta name="author" content="Freddy Rojas">

  <meta property="og:title" content="Freddy Rojas - Software Developer Portfolio">
  <meta property="og:description" content="Experienced software developer showcasing projects and expertise in web and application development.">
  <meta property="og:image" content="img/profile.jpg">

  <!-- JSON-LD for rich results -->
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"Person",
    "name":"Freddy Daniel Rojas",
    "jobTitle":"Software Engineer",
    "url":"https://danielrojasvalda.github.io/gh-portfolio",
    "image":"https://danielrojasvalda.github.io/gh-portfolio/img/profile.jpg",
    "sameAs":[
      "https://www.linkedin.com/in/freddyrojasv/",
      "https://github.com/danielrojasvalda/",
      "https://gitlab.com/danielrojasvalda"
    ],
    "knowsLanguage":["es","en"],
    "workLocation":{
      "@type":"Place",
      "address":{
        "@type":"PostalAddress",
        "addressLocality":"Tampa",
        "addressRegion":"FL",
        "addressCountry":"US"
      }
    }
  }
  </script>

  <!-- Favicon -->
  <link href="img/favicon.ico" rel="icon">

  <!-- Google Web Fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">

  <!-- Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">

  <!-- Libraries Stylesheet -->
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

  <!-- Site Styles -->
  <link href="css/style.css" rel="stylesheet">
</head>

<body data-spy="scroll" data-target=".navbar" data-offset="51">
  <!-- Navbar (hidden initially; revealed on scroll) -->
  <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5" style="display:none">
    <a href="index.html" class="navbar-brand ml-lg-3" aria-label="Home">
      <h1 class="m-0 display-5"><span class="text-primary">Freddy</span>Rojas</h1>
    </a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
      <div class="navbar-nav m-auto py-0">
        <a href="#home" class="nav-item nav-link active">Home</a>
        <a href="#about" class="nav-item nav-link">About</a>
        <a href="#qualification" class="nav-item nav-link">Qualifications</a>
        <a href="#skill" class="nav-item nav-link">Skills</a>
        <a href="#service" class="nav-item nav-link">Service</a>
        <a href="#portfolio" class="nav-item nav-link">Portfolio</a>
        <a href="#contact" class="nav-item nav-link">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Header -->
  <div class="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style="min-height: 100vh;">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
          <img class="img-fluid w-100 rounded-circle shadow-sm" src="img/profile.jpg" alt="Profile photo">
        </div>
        <div class="col-lg-7 text-center text-lg-left">
          <h3 class="text-white font-weight-normal mb-3">I'm</h3>
          <h1 class="display-3 text-uppercase text-primary mb-2" style="-webkit-text-stroke: 2px #ffffff;">Freddy Rojas</h1>
          <h1 class="typed-text-output d-inline font-weight-lighter text-white"></h1>
          <div class="typed-text d-none">Web Designer, Web Developer, FrontEnd Developer, BackEnd Developer, Apps Developer</div>

          <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
            <a href="files/Resume-Freddy-Rojas.pdf" download class="btn btn-outline-light mr-4" aria-label="Download resume">Resume</a>

            <a class="btn btn-light btn-social mr-2" href="https://www.linkedin.com/in/freddyrojasv/" target="_blank" rel="noopener" aria-label="LinkedIn profile"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
            <a class="btn btn-light btn-social mr-2" href="https://github.com/danielrojasvalda/" target="_blank" rel="noopener" aria-label="GitHub profile"><i class="fab fa-github" aria-hidden="true"></i></a>
            <a class="btn btn-light btn-social mr-3" href="https://gitlab.com/danielrojasvalda" target="_blank" rel="noopener" aria-label="GitLab profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 512 512" role="img" aria-hidden="true">
                <path d="M494.9 229.5L448 97.1c-2.6-7.3-12.8-7.3-15.4 0L384 229.5H128l-48.6-132.4c-2.6-7.3-12.8-7.3-15.4 0L17.1 229.5c-2.4 6.5.2 13.8 6.1 17.6L256 417.7l232.8-170.6c5.9-3.8 8.5-11.1 6.1-17.6z"/>
              </svg>
            </a>

            <button id="themeToggle" class="btn btn-sm btn-outline-light" aria-pressed="false" aria-label="Toggle dark mode">
              <i class="far fa-moon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- About -->
  <div class="container-fluid py-5" id="about">
    <div class="container">
      <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white section-watermark">About</h1>
        <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-5 pb-4 pb-lg-0">
          <img class="img-fluid rounded w-100" src="img/about.jpg" alt="About photo" loading="lazy">
        </div>
        <div class="col-lg-7">
          <h3 class="mb-4">Software Developer</h3>
          <p>I’m a systems engineer originally from Bolivia with hands-on experience building specialized applications. After relocating to the U.S., I continued expanding my skill set while staying focused on software development.</p>
          <p>I completed a comprehensive Software Engineering Bootcamp at the University of South Florida (USF), where I gained hands-on experience with modern front-end and back-end technologies. This journey sharpened my skills in building scalable web applications and deepened my understanding of full-stack development best practices.</p>
          <p>As a developer, I deliver quality results across the stack using JavaScript, CSS, PHP, Python/Flask, and more to create dynamic and engaging web applications. I solve bugs, drive innovation, and work with DevOps tools and practices, including AWS, to streamline deployment and infrastructure management.</p>
          <div class="row mb-3">
            <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">Freddy Daniel Rojas</span></h6></div>
            <div class="col-sm-6 py-2"><h6>Birthday: <span class="text-secondary">12 September</span></h6></div>
            <div class="col-sm-6 py-2"><h6>Phone: <span class="text-secondary">+1 321 945 7729</span></h6></div>
            <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">danielrojasvalda@gmail.com</span></h6></div>
          </div>
          <a href="#contact" class="btn btn-outline-primary mr-4">Contact Me</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Qualification -->
  <div class="container-fluid py-5" id="qualification">
    <div class="container">
      <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white section-watermark">Qualifications</h1>
        <h1 class="position-absolute text-uppercase text-primary">Education &amp; Experience</h1>
      </div>
      <!-- … your education & experience blocks (unchanged) … -->
    </div>
  </div>

  <!-- Skills -->
  <div class="container-fluid py-5" id="skill">
    <div class="container">
      <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white section-watermark">Skills</h1>
        <h1 class="position-absolute text-uppercase text-primary">My Skills</h1>
      </div>
      <!-- … your list (unchanged) … -->
    </div>
  </div>

  <!-- Services -->
  <div class="container-fluid pt-5" id="service">
    <div class="container">
      <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white section-watermark">Service</h1>
        <h1 class="position-absolute text-uppercase text-primary">My Services</h1>
      </div>
      <!-- … your six service cards (unchanged) … -->
    </div>
  </div>

  <!-- Portfolio -->
  <div class="container-fluid pt-5 pb-3" id="portfolio">
    <div class="container">
      <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white section-watermark">Gallery</h1>
        <h1 class="position-absolute text-uppercase text-primary">My Portfolio</h1>
      </div>
      <!-- … your portfolio grid (unchanged) … -->
    </div>
  </div>

  <!-- Contact -->
  <div class="container-fluid py-5 bg-light" id="contact">
    <div class="container">
      <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white section-watermark">Contact</h1>
        <h1 class="position-absolute text-uppercase text-primary">Get in touch</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <p class="mb-4">No form here—use email or LinkedIn to reach me quickly.</p>
          <a href="mailto:danielrojasvalda@gmail.com?subject=Portfolio%20inquiry&body=Hi%20Freddy%2C%0A"
             class="btn btn-outline-primary mr-2" aria-label="Email Freddy">
            <i class="far fa-envelope mr-1"></i> Email me
          </a>
          <a class="btn btn-outline-primary mr-2"
             href="https://www.linkedin.com/in/freddyrojasv/" target="_blank" rel="noopener" aria-label="Open LinkedIn">
            <i class="fab fa-linkedin-in mr-1"></i> LinkedIn
          </a>
          <a class="btn btn-outline-primary"
             href="https://wa.me/13219457729?text=Hi%20Freddy%2C%20I%20saw%20your%20portfolio..."
             target="_blank" rel="noopener" aria-label="Open WhatsApp chat">
            <i class="fab fa-whatsapp mr-1"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Playground -->
  <div class="container-fluid py-5 bg-light" id="playground">
    <div class="container">
      <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white section-watermark">Play</h1>
        <h1 class="position-absolute text-uppercase text-primary">Revenue & Cost Playground</h1>
      </div>

      <div class="row">
        <!-- Left controls -->
        <div class="col-lg-6 mb-4">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <h5 class="card-title mb-3">Adjust assumptions</h5>

              <label class="d-block">Procedures per month
                <input id="inQty" type="range" min="10" max="200" value="80" class="custom-range">
              </label>
              <div class="small mb-3"><span id="outQty">80</span></div>

              <label class="d-block">Allowed amount per procedure ($)
                <input id="inAllowed" type="range" min="200" max="8000" value="1800" step="50" class="custom-range">
              </label>
              <div class="small mb-3">$<span id="outAllowed">1,800</span></div>

              <label class="d-block">Average labor cost per case ($)
                <input id="inLabor" type="range" min="50" max="2000" value="450" step="10" class="custom-range">
              </label>
              <div class="small mb-3">$<span id="outLabor">450</span></div>

              <label class="d-block">Supplies / implants / meds per case ($)
                <input id="inSup" type="range" min="0" max="4000" value="300" step="10" class="custom-range">
              </label>
              <div class="small mb-3">$<span id="outSup">300</span></div>

              <label class="d-block">Collections realization (% of allowed)
                <input id="inReal" type="range" min="50" max="100" value="92" step="1" class="custom-range">
              </label>
              <div class="small mb-2"><span id="outReal">92</span>%</div>

              <p class="text-muted mb-0">
                *Demo model. In production I calculate by submodule (Professional, Surgery Center, Anesthesia, Ancillary) and auto-reconcile totals.
              </p>
            </div>
          </div>
        </div>

        <!-- Right chart -->
        <div class="col-lg-6 mb-4">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <h5 class="card-title mb-3">Monthly snapshot</h5>
              <canvas id="rcChart" height="240" aria-label="Revenue vs Cost chart"></canvas>
              <div class="mt-3">
                <div class="d-flex justify-content-between"><span>Corrected Revenue</span><strong id="outRev">$0</strong></div>
                <div class="d-flex justify-content-between"><span>Total Cost</span><strong id="outCost">$0</strong></div>
                <div class="d-flex justify-content-between"><span>Profit</span><strong id="outProfit">$0</strong></div>
              </div>
              <p class="small text-muted mt-3 mb-0">
                Formulas mirror my ASC Profit backend patterns (corrected revenue = qty × allowed × realization; cost = qty × (labor + supplies)).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-2">
        <a href="#contact" class="btn btn-outline-primary">Want a custom calculator for your practice?</a>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="container-fluid site-footer text-white mt-5 py-4 px-sm-3 px-md-5">
    <div class="container text-center">
      <div class="d-flex footer-row justify-content-center align-items-center">
        <div class="footer-social">
          <a class="btn btn-social" href="https://www.linkedin.com/in/freddyrojasv/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a class="btn btn-social" href="https://github.com/danielrojasvalda/" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a class="btn btn-social" href="https://gitlab.com/danielrojasvalda" target="_blank" rel="noopener" aria-label="GitLab">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 512 512" role="img" aria-hidden="true">
              <path d="M494.9 229.5L448 97.1c-2.6-7.3-12.8-7.3-15.4 0L384 229.5H128l-48.6-132.4c-2.6-7.3-12.8-7.3-15.4 0L17.1 229.5c-2.4 6.5.2 13.8 6.1 17.6L256 417.7l232.8-170.6c5.9-3.8 8.5-11.1 6.1-17.6z"/>
            </svg>
          </a>
        </div>

        <iframe
          id="spotifyFooter"
          src="https://open.spotify.com/embed/playlist/7JRtgEBVVP4fOhZlTSCNPD?utm_source=generator&theme=0"
          width="100%" height="80" frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy" title="Spotify playlist">
        </iframe>
      </div>

      <p class="m-0 mt-3 small">&copy; <span class="font-weight-bold">danielrojas</span>. All Rights Reserved.</p>
    </div>
  </footer>

  <!-- Scroll to Bottom Arrow -->
  <i class="fa fa-2x fa-angle-down text-white scroll-to-bottom" aria-hidden="true"></i>

  <!-- Back to Top -->
  <a href="#" class="btn btn-outline-dark px-0 back-to-top" aria-label="Back to top">
    <i class="fa fa-angle-double-up" aria-hidden="true"></i>
  </a>

  <!-- JS libs (deferred) -->
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" defer></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" defer></script>
  <script src="lib/typed/typed.min.js" defer></script>
  <script src="lib/easing/easing.min.js" defer></script>
  <script src="lib/waypoints/waypoints.min.js" defer></script>
  <script src="lib/owlcarousel/owl.carousel.min.js" defer></script>
  <script src="lib/isotope/isotope.pkgd.min.js" defer></script>
  <script src="lib/lightbox/js/lightbox.min.js" defer></script>
  <script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js" defer></script>

  <!-- Spotify auto-theme: listens to themechange from main.js -->
  <script defer>
    window.addEventListener('DOMContentLoaded', function(){
      const frame = document.getElementById('spotifyFooter');
      if(!frame) return;

      function setSpotifyTheme(theme){
        try{
          const url = new URL(frame.src);
          url.searchParams.set('theme', theme === 'dark' ? '0' : '1'); // 0=dark, 1=light
          frame.src = url.toString();
        }catch(e){}
      }
      const root = document.documentElement;
      const initial = root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setSpotifyTheme(initial);

      document.addEventListener('themechange', (ev) => setSpotifyTheme(ev.detail.theme));
    });
  </script>

  <!-- Your unified site script LAST -->
  <script src="js/main.js" defer></script>
</body>
</html>
