function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < 9) 
lista[contador].onclick = tocar('#som_tecla_toim');
const classe= lista [1].classList[1];
console.log(classe);
contador = contador + 1;

console.log(contador);


