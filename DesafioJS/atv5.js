document.getElementById("botao").disabled = true;
function checkbox() {
    var checkboxList = document.querySelectorAll('input:checked');
    if(checkboxList.length >= 2){
        document.getElementById("botao").disabled = false;

    }else {
        document.getElementById("botao").disabled = true;
    }
    
  }