function addServiceCard(params = {}) {
  const template = document.querySelector("#services-card-template");
  const container = document.querySelector(".services-content");

  template.content.querySelector(".services-card-title").textContent =
    params.title;
  template.content.querySelector(".services-card-text").textContent =
    params.description;
  template.content.querySelector(".services-img").src = params.image;

  var clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getService() {
  return fetch(
    "https://cdn.contentful.com/spaces/nbwaf1zwlqne/environments/master/entries?access_token=0V5bgHpzhR-ufUPIxi0dPN8p3Oxbs9t6w4e434xVHeY&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        const image = buscarEnAsset(item.fields.image.sys.id, data);
        const imgUrl = image.fields.file.url;
        return {
          title: item.fields.title,
          description: item.fields.description,
          image: imgUrl,
        };
      });
      return fieldsCollections;
    });
}

function buscarEnAsset(id, data) {
  const arrayEncontrado = data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return arrayEncontrado;
}

function main() {
  getService().then(function (services) {
    for (const s of services) {
      addServiceCard(s);
    }
  });
  headerComponent(document.querySelector(".header"));
  contactComponent(document.querySelector(".contact-component"));
  footerComponent(document.querySelector(".footer-component"));
}

main();
