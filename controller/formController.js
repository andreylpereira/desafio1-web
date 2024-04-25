document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const placa = document.getElementById("placaInput").value;
    const proprietario = document.getElementById("proprietarioInput").value;
    const apartamento = document.getElementById("apartamentoInput").value;
    const bloco = document.getElementById("blocoInput").value;
    const modelo = document.getElementById("modeloInput").value;
    const cor = document.getElementById("corInput").value;
    const vaga = document.getElementById("vagaInput").value;

    if (!placa || !proprietario || !apartamento || !bloco || !modelo || !cor || !vaga) {
      alert("Por favor, preencha todos os campos.");
      return;
  }

    if (vaga >= 10) {
      alert("Este estacionamento no momento só comporta 10 vagas. Tente uma vaga com numero menor igual a 10.");
      return;

    }
    const newForm = new Form(placa,proprietario,apartamento,bloco,modelo,cor,vaga);

    const formList = JSON.parse(sessionStorage.getItem("forms")) || Array(10).fill(null);

    formList[vaga - 1] = newForm;
    sessionStorage.setItem("forms", JSON.stringify(formList));
    document.getElementById("cadastroForm").reset();

    console.log(newForm);
    alert(`O veículo de placa ${newForm.placa} do ${newForm.proprietario} foi cadastrado com sucesso!`);

    console.table(JSON.parse(sessionStorage.getItem("forms")));
  });
