var botaoCriptografar = document.querySelector("#criptografar");
var botaoDescriptografar = document.querySelector("#descriptografar");
var botaoCopiar = document.querySelector('#copiarTexto');

var entrada = document.querySelector("#form1");
var saida = document.querySelector('#form2');


 botaoCriptografar.addEventListener("click", function(){
   event.preventDefault();

   texto = "";
   var te = entrada.cpt1.value; //valor no texto
   var cripto = te.toLowerCase();

for (i = 0; i < cripto.length; i++){
  texto += enc (cripto[i]);
}
saida.copi.value = texto; //valor do texto é passado criptografado

    function enc(x) {
      switch (x) {
        case "a":
        case "á":
        case "â":
        case "ã":
          return "ai";
          break;
        case "e":
        case "é":
        case "è":
        case "ê":
          return "enter";
          break;
        case "i":
        case "í":
        case "ì":
          return "imes";
          break;
        case "o":
        case "ó":
        case "ò":
        case "ô":
        case "õ":
          return "ober";
          break;
        case "u":
        case "ú":
        case "ù":
          return "ufat";
          break;
          default:
          return cripto[i];
      }
    }
   entrada.cpt1.value = "";
});

botaoDescriptografar.addEventListener("click", function(){
  event.preventDefault();

  var cripto = entrada.cpt1.value; //valor no texto
  var texto = cripto.toLowerCase()
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

saida.copi.value = texto; //valor do texto é passado criptografado
entrada.cpt1.value = "";
});

botaoCopiar.addEventListener("click", function(){
  const copiou = saida.copi;

  copiou.select();
  copiou.setSelectionRange(0, 99999);

 document.execCommand("copy");

 entrada.cpt1.value = copiou.value;
 copiou.value = "";
});
