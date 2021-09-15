const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const input = document.querySelector('input');
const div = document.querySelector('div');
const test = document.querySelector('.test');
let listeValider = document.querySelector('.pListe');
let listeChoisir = document.querySelector('.pChoisir');


if(localStorage.getItem('names') != null){
    var storedNames = JSON.parse(localStorage.getItem("names"));
    for (let i = 0; i < storedNames.length; i++) {
        let liste = document.createElement('p');
        liste.className = 'newP';
        let txtListe = document.createTextNode(`${storedNames[i]}`);
        liste.appendChild(txtListe);
        listeValider.appendChild(liste);
    }
}

if(localStorage.getItem('names2') != null){
    var storedNames2 = JSON.parse(localStorage.getItem("names2"));
    for (let j = 0; j < storedNames2.length; j++) {
        let liste = document.createElement('p');
        liste.className = 'newPchoisir';
        let txtListe = document.createTextNode(`${storedNames2[j]}`);
        liste.appendChild(txtListe);
        listeChoisir.appendChild(liste);
    }
}


let arrayValider = [];
let arrayChoisir = [];

btn1.addEventListener('click', function(){

    while (listeValider.firstChild) {
        listeValider.removeChild(listeValider.firstChild);
    }

    let val = input.value;
    arrayValider.push(val);
    console.log(arrayValider);

    for (let i = 0; i < arrayValider.length; i++) {

        let liste = document.createElement('p');
        liste.className = 'newP';
        let txtListe = document.createTextNode(`${arrayValider[i]}`);
        liste.appendChild(txtListe);
        listeValider.appendChild(liste);
    
        localStorage.setItem("names", JSON.stringify(arrayValider));

        console.log(storedNames);
    }

});

function random(array){
    let key = Math.floor(Math.random() * array.length);
    return key;
}

btn2.addEventListener('click', function(){

    localStorage.removeItem('names');

    while (listeChoisir.firstChild) {
        listeChoisir.removeChild(listeChoisir.firstChild);
    }

    while (listeValider.firstChild) {
        listeValider.removeChild(listeValider.firstChild);
    }

    let result = random(arrayValider);
    const index = arrayValider.indexOf(arrayValider[result]);
    
    arrayChoisir.push(arrayValider[result]);

    if (index > -1) {
        arrayValider.splice(index, 1);
    }
    
    for (let i = 0; i < arrayValider.length; i++) {

        let liste = document.createElement('p');
        liste.className = 'newP';
        let txtListe = document.createTextNode(`${arrayValider[i]}`);
        liste.appendChild(txtListe);
        listeValider.appendChild(liste);

        localStorage.setItem("names", JSON.stringify(arrayValider));

    }

    for (let i = 0; i < arrayChoisir.length; i++) {

        let liste = document.createElement('p');
        liste.className = 'newPchoisir';
        let txtListe = document.createTextNode(`${arrayChoisir[i]}`);
        liste.appendChild(txtListe);
        listeChoisir.appendChild(liste);

        localStorage.setItem("names2", JSON.stringify(arrayChoisir));

    }

});

