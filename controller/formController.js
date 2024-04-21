document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const placa = document.getElementById("placaInput").value;
    const proprietario = document.getElementById("proprietarioInput").value;
    const apartamento = document.getElementById("apartamentoInput").value;
    const bloco = document.getElementById("blocoInput").value;
    const modelo = document.getElementById("modeloInput").value;
    const cor = document.getElementById("corInput").value;
    const vaga = document.getElementById("vagaInput").value;

    const newForm = new Form(placa,proprietario,apartamento,bloco,modelo,cor,vaga);

    const formList = JSON.parse(sessionStorage.getItem("cadastros")) || Array(10).fill(null);

    formList[vaga - 1] = newForm;
    sessionStorage.setItem("cadastros", JSON.stringify(formList));
    document.getElementById("cadastroForm").reset();

    console.log(newForm);
    alert(`O veículo de placa ${newForm.placa} do ${newForm.proprietario} foi cadastrado com sucesso!`);

    console.table(JSON.parse(sessionStorage.getItem("cadastros")));
  });
