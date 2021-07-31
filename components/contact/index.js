function contactComponent(el) {
    const contactEl = document.createElement("div");
    contactEl.innerHTML = `
    <section class="contact-section">
      <h3 class="contact__title">Escribime</h3>
      <form class="contact__form">
        <div class="fieldset">
          <label for="name" class="label">NOMBRE</label>
          <input name="name" type="text" class="input" id="name" />
        </div>
        <div class="fieldset">
          <label for="email" class="label">EMAIL</label>
          <input name="email" type="text" class="input" id="email" />
        </div>
        <div class="fieldset">
          <label for="message" class="label">MENSAJE</label>
          <textarea name="message" class="textarea" id="message" ></textarea>
        </div>
        <button class="contact__button">Enviar</button>
      </form>
    </section>
    `;
  
    el.appendChild(contactEl);
  
    const form = contactEl.querySelector(".contact__form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const dataObject = Object.fromEntries(formData.entries());
  
      let emailMessage = dataObject.name + " Email ";
      emailMessage += " > Hola" + dataObject.message;
      emailMessage += " > Me podes contactar aqui" + dataObject.email;
  
      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          to: "diegovr1688@gmail.com",
          message: emailMessage,
        }),
      })
        .then(() => {
          alert("El mensaje fue enviado");
          document.querySelectorAll(".input").forEach((input) => {
            input.value = "";
          });
          document.querySelector(".textarea").value = "";
        })
        .catch(() => {
          alert("Error");
        });
    });
  }