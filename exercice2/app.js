const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const input = document.querySelector('input');
const div = document.querySelector('div');
const test = document.querySelector('.test');
let listeValider = document.querySelector('.pListe');
let listeChoisir = document.querySelector('.pChoisir');


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
    }

});

function random(array){
    let key = Math.floor(Math.random() * array.length);
    return key;
}

btn2.addEventListener('click', function(){

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
    }

    for (let i = 0; i < arrayChoisir.length; i++) {

        let liste = document.createElement('p');
        liste.className = 'newPchoisir';
        let txtListe = document.createTextNode(`${arrayChoisir[i]}`);
        liste.appendChild(txtListe);
        listeChoisir.appendChild(liste);

    }

});