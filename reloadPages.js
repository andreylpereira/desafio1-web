//Função para carregar os html
function loadPage(pageName) {
  fetch(`htmls/${pageName}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("main-content").innerHTML = html;
      loadScripts(pageName);
    })
    .catch((error) => {
      console.error("Erro ao carregar a página:", error);
    });
}

//Função para carregar os scripts
function loadScripts(pageName) {
  switch (pageName) {
    case "form":
      const scriptModel = document.createElement("script");
      scriptModel.src = `./model/${pageName}Model.js`;
      document.head.appendChild(scriptModel);

      const scriptController = document.createElement("script");
      scriptController.src = `./controller/${pageName}Controller.js`;
      document.head.appendChild(scriptController);
      break;

    case "list":
      const scriptList = document.createElement("script");
      scriptList.src = `./views/${pageName}View.js`;
      document.head.appendChild(scriptList);
      break;

    case "reservations":
      const scriptReservations = document.createElement("script");
      scriptReservations.src = `./views/${pageName}View.js`;
      document.head.appendChild(scriptReservations);
      break;

    default:
      break;
  }
}

window.onload = function () {
  loadPage("form");
};
