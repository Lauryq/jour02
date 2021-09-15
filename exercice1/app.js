const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const random = document.querySelector('.random');
const p2 = document.querySelector('.bjr');
const p3 = document.querySelector('.tva');
const main = document.querySelector('main');
const p4 = document.querySelector('.cm');

/*ex1*/
function nbRandom(){
    let nb = Math.floor(Math.random() * 1000);
    return nb;
}

btn1.addEventListener('click', function(){
    let nb = nbRandom()
    random.innerHTML = `${nb}`;
});

/*ex2*/
function bonjour(nom){
    // manque espace
    let regex = new RegExp("^[a-zA-Z/ä-ÿÄ-Ÿ/-/\t]+$");

    if (nom ==""){
        return 'Veuillez entrer un nom';
    } else if ( !regex.test(nom)){
        return 'mauvais caractères';
    } else {
        return 'bonjour ' + nom;
    }

}

btn2.addEventListener('click', function(){

    let val = input1.value;
    let reponse = bonjour(val);
    p2.innerHTML = `${reponse}`;  
})

/*ex3*/
function tva(nbTva){
    let tva = 1.2;
    let calc = nbTva * tva;
    let regex = new RegExp("^[0-9/./,]+$");

    if (nbTva == ""){
        return 'Veuillez entrer une valeur';
    } else if (!regex.test(nbTva)){
        return 'Entrer des chiffres uniquement';
    } else{
        return calc;   
    }
}

btn3.addEventListener('click', function(){
    
    let val = input2.value;
    let reponse = tva(val);
    p3.innerHTML = `${reponse}`;   
    
})

/*ex4*/
function manege(taille){
    let regex = new RegExp("^[0-9/./,]+$");
    if(taille > 1.90){
        return 'trop grand pour le manège';
    } else if (taille < 1.54){
        return 'trop petit pour le manège';
    } else if (!regex.test(taille)){
        return 'Entrer des chiffres uniquement';
    } else {
        return 'super! tu peux y aller';
    }
}

btn4.addEventListener('click', function(){

    let val = input3.value;
    let reponse = manege(val);
    p4.innerHTML = `${reponse}`;
})
