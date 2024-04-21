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

  listForms.forEach((form, index) => {
    const listItem = document.createElement("li");
    if (form !== null) {
      listItem.textContent = `Vaga ${index + 1}: ${form.proprietario} - ${form.placa}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "EXCLUIR";
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
