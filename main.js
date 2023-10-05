function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < lista.length) {
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

