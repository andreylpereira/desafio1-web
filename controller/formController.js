document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const placa = document.getElementById("placaInput").value;
    const proprietario = document.getElementById("proprietarioInput").value;
    const apartamento = document.getElementById("apartamentoInput").value;
    const bloco = document.getElementById("blocoInput").value;
    const modelo = document.getElementById("modeloInput").value;
    const cor = document.getElementById("corInput").value;
    const vaga = document.getElementById("vagaInput").value;

    const novoCadastro = new Form(placa,proprietario,apartamento,bloco,modelo,cor,vaga);

    const cadastrosArray = JSON.parse(sessionStorage.getItem("cadastros")) || Array(10).fill(null);
    cadastrosArray[vaga - 1] = novoCadastro;

    sessionStorage.setItem("cadastros", JSON.stringify(cadastrosArray));

    document.getElementById("cadastroForm").reset();

    console.log(novoCadastro);
    alert(`O veículo de placa ${novoCadastro.placa} do ${novoCadastro.proprietario} foi cadastrado com sucesso!`);

    console.table(JSON.parse(sessionStorage.getItem("cadastros")));
  });
