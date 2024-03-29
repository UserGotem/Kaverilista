var nimilista = []
var lomake = document.forms['input']
var textinput = document.querySelector('#textinput').value
var lista = document.getElementById('kaverilista');
var poista = document.getElementById('poista');
var järjestä = document.getElementById('järjestä');
lomake.addEventListener('submit', lisääListaan);
poista.addEventListener('click', containerRemove);
järjestä.addEventListener('click', containerSort);

function lisääListaan(event) {
    textinput = document.querySelector('#textinput').value
    event.preventDefault();
    nimilista.push(textinput)
    containerAdd()
}

function containerAdd() {
    textinput = document.querySelector('#textinput').value
    let uusiItem = document.createElement('LI')
    let itemContent = document.createTextNode(textinput)
    uusiItem.appendChild(itemContent)
    lista.appendChild(uusiItem)
}

function containerRemove() {
    textinput = document.querySelector('#textinput').value
    if (nimilista.length < 1) {
        alert('Lista tyhjä! ei voi poistaa')
    }
    if (nimilista.length < lista.childNodes.length) {
        lista.removeChild(lista.childNodes[0])
    }
    for (var i = 0; i < nimilista.length; i++) {
        if (textinput == nimilista[i]) {
            lista.removeChild(lista.childNodes[i])
            nimilista.splice(i, 1)
            return
        }
    }
}

function containerSort() {
    if (nimilista.length < 1) {
        alert('Lista tyhjä!')
        return;
    }
    nimilista.sort(function(a, b) {
        return a.localeCompare(b, { locale: 'en' });
    });


    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    nimilista.forEach(function(item) {
        let uusiItem = document.createElement('LI');
        let itemContent = document.createTextNode(item);
        uusiItem.appendChild(itemContent);
        lista.appendChild(uusiItem);
    });
}
