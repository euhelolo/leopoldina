function TocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < 9) {
ListaDeSons[5].onclick = TocaSomToim;
contador = contador + 1;
console.log(contador);

}
