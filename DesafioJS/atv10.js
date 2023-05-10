document.getElementById("cpf").style.display = "none";
document.getElementById("cnpj").style.display = "none";
document.getElementById("data").style.display = "none";

function pessoa1(){
    document.getElementById("cpf").style.display = "block";
    document.getElementById("cnpj").style.display = "none";
    document.getElementById("data").style.display = "block";
}

function pessoa2(){
    document.getElementById("cnpj").style.display = "block";
    document.getElementById("cpf").style.display = "none";
    document.getElementById("data").style.display = "none";
}

