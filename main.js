function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < lista.length) {
    const classe = lista[contador].classList[1];
    console.log(classe);    
    const idsom = `#som_${classe}`;
    console.log(idsom);
    lista[contador].onclick = function () {
        tocar(idsom);
    }

    contador = contador + 1;

    //console.log(contador);

    tecla.onkeydown = function (evento) {
        tecla.classList.add('ativa');
        console.log(evento.key);
    }

}