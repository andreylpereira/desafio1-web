function deleteForm(index) {
  const forms = sessionStorage.getItem("cadastros");
  const listForms = JSON.parse(forms);
  listForms[index - 1] = null;
  sessionStorage.setItem("cadastros", JSON.stringify(listForms));
}

function updateListForms() {
  const listFormsId = document.getElementById("list-forms");
  listFormsId.innerHTML = "";

  const forms = sessionStorage.getItem("cadastros");
  const listForms = JSON.parse(forms);

  //Criação tabela;
  const table = document.createElement("table");
  const tr1 = document.createElement("tr");
  const th1 = document.createElement("th");
  const tr2 = document.createElement("tr");
  const th2 = document.createElement("th");

  listForms.forEach((form, index) => {
    const listItem = document.createElement("div");


   
    if (form !== null) {
      listItem.textContent = `Vaga ${index + 1}: ${form.proprietario} - ${form.placa}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "EXCLUIR";
      deleteButton.className = "btn-delete"
      deleteButton.addEventListener("click", function () {
        deleteForm(index + 1);
        updateListForms();
      });

      listItem.appendChild(deleteButton);
      listFormsId.appendChild(listItem);
    }
  });
}

window.onload = function () {
  loadPage("reservations");
};

updateListForms();
