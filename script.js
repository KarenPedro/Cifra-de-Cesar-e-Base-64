var selecioneMetodo = document.querySelector('selecione');
var ocultarIncremento = document.querySelector('ocultarIncremento');
var code = document.querySelector('codificar');
var decode = document.querySelector('decodificar');
var textoUsuario = document.querySelector('escrever');  
var resultadoTexto = document.getElementById('resultado');
var botao = document.querySelector('botao');


selecioneMetodo.addEventListener('change', function (e) {        
    var metodoSelecionado = e.target.value;
  
    if (metodoSelecionado = 'base64') {
        ocultarIncremento.style.display = 'none';
        botao.setAttribute('onclick', 'base64()') 
    } else {
        ocultarIncremento.style.display = 'block';
        botao.setAttribute('onclick', 'cesar()')   
    }
  });


codificar.addEventListener('click', function () {
    botao.innerText = 'Codificar';               
  });
  
 decodificar.addEventListener('click', function () {
    botao.innerText = 'Decodificar';             
  });

function base64(){
  var input = textoUsuario.value
  var escolha = code.checked
  resultadoTexto.value = base64Logic(input, escolha);
}

function base64Logic(input, escolha){
  return (escolha)? botao(input) : botao(input);
}

function cesar()  {
  var input = textoUsuario.value.split('');
  var escolha = code.checked
  var numero =  parseInt(ocultarIncremento.value);
  if (escolha){
    resultadoTexto.value = cesarCodificando(input, numero);
  } 
  else {
    resultadoTexto.value = cesarDecodificando(input, numero);
  }
}

function cesarCodificando(arr, key){
  return arr.map((c)=>{
      let code = c.charCodeAt();
      if(code >= 65 && code <= 90){
          return String.fromCharCode(((code - 65 + key) % 26) + 65)
      } else if(code >= 97 && code <= 122){
          return String.fromCharCode(((code - 97 + key) % 26) + 97)
      } else return c
  }).join('')
}

function cesarDecodificando(arr, key){
  return arr.map((c)=>{
      let code = c.charCodeAt();
      if(code >= 65 && code <= 90){
          return (code-65-key < 0)?String.fromCharCode(((code - 65 - key + 26)%26)+65):String.fromCharCode(((code - 65 - key)%26)+65) 
      } else if(code >= 97 && code <= 122){
          return String.fromCharCode(((code - 97 - key + 26) % 26) + 97)
      } else return c
  }).join('')
}