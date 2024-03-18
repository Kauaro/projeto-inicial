var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados")
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

function alertar(){
    // alert("O nome inserido foi: " + nome.value);


    saida.innerText = "Nome:" + nome.value +
            "\n E-mail:" + email.value +
            "\n telefone:" + telefone.value +
            "\n cep:" + cep.value +
            "\n logradouro:" + logradouro.value +
            "\n numero:" + numero.value +
            "\n complemento:" + complemento.value +
            "\n bairro:" + bairro.value +
            "\n cidade:" + cidade.value +
            "\n estado:" + estado.value 

}

