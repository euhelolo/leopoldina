function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const lista = document.querySelectorAll('.tecla');

let contador = 0;

for(let contador = 0;contador < lista.length;contador = contador + 1) {
    const tecla = lista[contador];
    const classe = tecla.classList[1];
    console.log(classe);
    const idsom = `#som_${classe}`;
    console.log(idsom);
    tecla.onclick = function () {
        tocar(idsom);
    }

    contador = contador + 1;

    //console.log(contador);

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
            //console.log(evento.code === 'Space' || evento.code === 'Enter');
        }
        //  && ||


    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
function texto(){
    //elemento pego do id//
    var num = document.getElementById("num");
    var num2 = document.getElementById("num2");
    //convertendo para " int "//
    var conversao = num.value;
    var conv2 = num2.value
    //onde é feito a conta//
    var juncao = parseFloat(conversao * conv2 );
    var juncao2=parseFloat(conv2 * conversao);
    //mostrar na pagina//
    var body = document.getElementById("show");
    var mostrar = " o resultado da multiplicação é " + juncao2;body.innerHTML = mostrar  
  
  }
  
  function numero(){
    var number = document.getElementById("div");
    var num2 = document.getElementById("div2");
    var conv = number.value;
    var conv2 = num2.value;
    var resultado = parseFloat(conv / conv2);
    var resul2 = parseFloat(conv2 / conv);
    var mostrar = document.getElementById("show2");
    var ver = "o resultado da divisao é " + resultado;mostrar.innerHTML = ver
  
  }
  
  function number(){
    var num = document.getElementById("num2");
    var num2 = document.getElementById("num3");
    var rev1 = num.value;
    var rev2 = num2.value;
    var float1 = parseFloat(rev1-rev2);
    var float2 = parseFloat(rev1 - rev2);
    var mostrar = document.getElementById("show3");
    var show = "o resultado da subtração é " + float1;mostrar.innerHTML = show
    
  }
  
  function nome(){
   var nome = document.getElementById("name").value;
    var h2 = document.getElementById("show4");
   var mostr = "seja bem vindo(a)," + nome;h2.innerHTML = mostr
    
  }
  
  function result(){
    var numero = document.getElementById("pote");
    var conversao = numero.value;
    var resultado = parseFloat(conversao);
    var final = resultado * resultado;
    var log = document.getElementById("show5");
    var end = "o resultado da potência é " + final;log.innerHTML = end
  
  }

  

