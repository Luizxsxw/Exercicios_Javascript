//Chamar entradas do HTML para a variável//
function obterMedia() {
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var nota4 = parseInt(document.getElementById("nota4").value);


    //Calcular//
    var media = (nota1 + nota2 + nota3 + nota4) / 4;


    //Obter a id 'Resultado' e colocar nela o resultado do valor//
    document.getElementById("media").innerHTML = "Média: " + media;


    //Condicional//
    if (media < 6) {
        document.getElementById("resultado").innerHTML = "Reprovado";
    }
    else if (media >= 6) {
        document.getElementById("resultado").innerHTML = "Aprovado";
    }
    else {
        document.getElementById("resultado").innerHTML = "Houve um erro";
    }
}
