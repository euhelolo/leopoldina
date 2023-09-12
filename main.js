function TocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < 9) {
ListaDeSons[5].onclick = TocaSomToim;
}
