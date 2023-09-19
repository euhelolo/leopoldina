function tocar(idElemento) {
    document.querySelector('#som_tecla_toim').play();
}

const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < 9) 
lista[contador].onclick = tocar;
const classe= lista [1].classList[1];
console.log(classe);
contador = contador + 1;

console.log(contador);

}
