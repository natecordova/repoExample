var acordesUsuario=[];
var contadorAplastos=0;
var n=3;
var i=0;
var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
document.getElementById("textosB").addEventListener("click", myFunction);

function doAdelay()
 {
 setTimeout(function(){return true;},20000);

 }

function ponerNotaVisible() {

ctx.strokeStyle="red";
ctx.fillStyle = '#F6F659';
ctx.rect(0+i, 0, 30, 150);
ctx.stroke();
ctx.fill();
  i=i+60;


}

function juegaElUsuario() {
  if (acordesUsuario[0]==1 && acordesUsuario[1]==5 && acordesUsuario[2]==8) {
    var l = document.getElementById("textos");
    l.innerHTML = "EXCELENTE";
  }
  else {
    var l = document.getElementById("textos");
    var butt=document.getElementById("textosB");
    butt.innerHTML = "VOLVER A INTENTAR";
    l.innerHTML = "Lo sentimos";
  }

}

function hazloTu() {

  var c2 = document.getElementById("c");
doAdelay();
ctx.clearRect(0,0,c.width,c.height);
  c.style.zIndex = "-1";
  c2.style.zIndex = "1";
  var l = document.getElementById("textos");
  l.innerHTML = "AHORA HAZLO TU";

}

function tocarDo() {

  var nota=1;
  var intervalo=4;
  var l = document.getElementById("textos");
  l.innerHTML = "ESTE ES EL ACORDE DE DO";
  var myVar2 = setInterval(contador2, 1000);
  function contador2(){

    ponerNotaVisible();

    playNotes([nota]);
    nota=nota+intervalo;
    intervalo=3;
    if (nota>=9) {
      setTimeout(function (){
        clearInterval(myVar2);
        hazloTu();
      }, 500);

      }
      }
}


function myFunction() {

  var c2 = document.getElementById("c");

  c.style.zIndex = "1";
  c2.style.zIndex = "-1";
  i=0;
  var myVar = setInterval(contador, 1000);
  function contador(){
    var l = document.getElementById("textos");
    l.innerHTML = "Vamos a empezar en: "+n;
    n=n-1;
    if (n==-1) {
      n=3;
      clearInterval(myVar);
      tocarDo();
      }
  }

}
