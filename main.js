function TocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

document.querySelector('.tecla_toim').onclick = TocaSomToim; 