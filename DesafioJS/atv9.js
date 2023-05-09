var senha = document.getElementById("senha")
var confirmasenha= document.getElementById("confirmasenha");
function validaSenha(){
    if(senha.value.length < 6 || senha.value.length > 10 || confirmasenha.value.length  < 6 || confirmasenha.value.length > 10 ){
        confirmasenha.setCustomValidity("Senha inválida! Digite uma senha entre 6 a 10 caracteres!");
    }else{
        if(senha.value != confirmasenha.value) {
            confirmasenha.setCustomValidity("Senhas não coincidem! Tente novamente!");
          } else {
            confirmasenha.setCustomValidity('');
          }
    }
}
senha.onchange = validaSenha;
confirmasenha.onkeyup = validaSenha;