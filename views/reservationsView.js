function deleteForm(index) {
  const forms = sessionStorage.getItem("forms");
  const listForms = JSON.parse(forms);
  listForms[index - 1] = null;
  sessionStorage.setItem("forms", JSON.stringify(listForms));
  updateListForms(); 
}

function updateListForms() {
  const listFormsId = document.getElementById("list-forms");
  listFormsId.innerHTML = "";

  const forms = sessionStorage.getItem("forms");
  const listForms = JSON.parse(forms);

  const table = document.createElement("table");

  const header = ["PLACA", "PROPRIETÁRIO", "Nº APTO", "BLOCO", "MODELO VEÍCULO", "COR", "Nº VAGA", "     "];
  const trHeader = document.createElement("tr");

  header.forEach(item => {
    const th = document.createElement("th");
    th.textContent = item;
    trHeader.appendChild(th);
  });

  table.appendChild(trHeader);

  listForms.forEach((form, index) => {
    if (form !== null) {
      const trBody = document.createElement("tr");

      for (const prop in form) {
        const td = document.createElement("td");
        td.textContent = form[prop];
        trBody.appendChild(td);
      }

      const tdDelete = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "EXCLUIR";
      deleteButton.className = "btn-delete";
      deleteButton.addEventListener("click", function () {
        deleteForm(index + 1);
      });
      tdDelete.appendChild(deleteButton);
      trBody.appendChild(tdDelete);

      table.appendChild(trBody);
    }
  });

  listFormsId.appendChild(table);
}

window.onload = function () {
  loadPage("reservations");
};

updateListForms();
