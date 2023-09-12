function TocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0;

while (true) {
ListaDeSons[5].onclick = TocaSomToim;
}
