//Função para carregar os html
function loadPage(pageName) {

  fetch(`htmls/${pageName}.html`)
  
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("main-content").innerHTML = html;
      document.querySelectorAll("nav ul li a").forEach((link) => {
        link.classList.remove("active");
      });

    })
    .catch((error) => {
      console.error("Erro ao carregar a página:", error);
    });
}

window.onload = function () {
  loadPage("form");
};
