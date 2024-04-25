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

  listForms.forEach((form) => {
    const trBody = document.createElement("tr");

    if (form !== null) {
      for (const prop in form) {
        const td = document.createElement("td");
        td.textContent = form[prop];
        trBody.appendChild(td);
      }
    } else {
      const td = document.createElement("td");
      td.textContent = "Vaga disponível!";
      td.className = "avaible";
      trBody.appendChild(td);

      for (let i = 0; i < header.length - 2; i++) { 
        const emptyTd = document.createElement("td");
        trBody.appendChild(emptyTd);
      }
    }
    
    table.appendChild(trBody);
  });

  listFormsId.appendChild(table);
}

window.onload = function () {
  loadPage("list");
};

updateListForms();
