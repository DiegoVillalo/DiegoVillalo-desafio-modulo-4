function footerComponent(el) {
    const footerEl = document.createElement("div");
    footerEl.innerHTML = `<section class="footer-section">
    <img src="./img/logo.png" class="logo-footer" />
    <div class="footer__container">
      <div class="social__container">
        <a href="" class="social__link">Instagram</a>
        <img src="./img/instagram.png" class="social__img" />
      </div>
      <div class="social__container">
        <a href="" class="social__link">Linkedin</a>
        <img src="./img/linkedin.png" class="social__img" />
      </div>
      <div class="social__container">
        <a href="" class="social__link">GitHub</a>
        <img src="./img/github.png" class="social__img" />
      </div>
    </div>
  </section>`;
  
    el.appendChild(footerEl);
  }
  