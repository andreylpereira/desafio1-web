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

  const scriptModel = document.createElement("script");
  scriptModel.src = `./model/${pageName}Model.js`;
  document.head.appendChild(scriptModel);


  const scriptController = document.createElement("script");
  scriptController.src = `./controller/${pageName}Controller.js`;
  document.head.appendChild(scriptController);
}

window.onload = function () {
  loadPage("form");
};
