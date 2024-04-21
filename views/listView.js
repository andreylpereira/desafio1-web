function updateListForms() {
  const listFormsId = document.getElementById("list-forms");
  listFormsId.innerHTML = "";

  const forms = sessionStorage.getItem("cadastros");
  const listForms = JSON.parse(forms);

  listForms.forEach((form, index) => {
    const listItem = document.createElement("li");
    if (form !== null) {
      listItem.textContent = `Vaga ${index + 1}: ${form.proprietario} - ${
        form.placa}`;
    } else {
      listItem.textContent = `Vaga ${index + 1}: Disponível.`;
    }
    listFormsId.appendChild(listItem);
  });
}

window.onload = function () {
  loadPage("list");
};

updateListForms();
