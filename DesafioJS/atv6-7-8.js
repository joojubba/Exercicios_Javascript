
function botao1() {
    document.getElementById("texto").style.color = "black";
  }
function botao2() {
    document.getElementById("texto").style.color = "white";
}
function botao3() {
  var x = document.createElement("STYLE");
  var t = document.createTextNode("body {background: black}");
  x.appendChild(t);
  document.body.appendChild(x);
}
function botao4() {
  var x = document.createElement("STYLE");
  var t = document.createTextNode("body {background: white}");
  x.appendChild(t);
  document.body.appendChild(x);
}
function botao5(){
  document.getElementById("texto").style.fontSize = "x-large";
  }
function botao6(){
  document.getElementById("texto").style.fontSize = "x-small";
}
function botao7(){
  document.getElementById("texto").style.textTransform = "uppercase";
}
function botao8(){
  document.getElementById("texto").style.textTransform = "lowercase";
}
  