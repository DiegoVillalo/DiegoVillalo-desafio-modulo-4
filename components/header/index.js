function headerComponent(el) {
    const headerEl = document.createElement("div");
    headerEl.innerHTML = `<div class="header2">
    <a href="./index.html"
      ><img src="./img/logo.png" class="logo"
    /></a>
    <img src="./img/menu.png" class="menu__open" />
    <div class="menu__window">
      <img src="./img/cerrar.png" class="menu__close" />
      <div class="menu__content">
        <a class="menu__a" href="./portfolio.html">Portfolio</a>
        <a class="menu__a" href="./services.html">Servicios</a>
        <a class="menu__a" href="./contact.html">Contacto</a>
      </div>
    </div>
    <div class="header__a-container">
      <a href="./portfolio.html" class="header__a">Portfolio</a>
      <a href="./services.html" class="header__a">Servicios</a>
      <a href="./contact.html" class="header__a">Contacto</a>
    </div>
  </div>`;
  
    el.appendChild(headerEl);
  
    const openBurguer = document.querySelector(".menu__open");
    const closeBurguer = document.querySelector(".menu__close");
    const windowBurguer = document.querySelector(".menu__window");
  
    openBurguer.addEventListener("click", () => {
      windowBurguer.style.display = "inherit";
    });
  
    closeBurguer.addEventListener("click", () => {
      windowBurguer.style.display = "";
    });
  }