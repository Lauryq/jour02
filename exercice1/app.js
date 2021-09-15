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

/*ex1*/
btn1.addEventListener('click', function(){
    
    let nb = Math.floor(Math.random() * 1000);
    random.innerHTML = `${nb}`;
    
});

/*ex2*/
btn2.addEventListener('click', function(){
    let val = input1.value;
    let regex = new RegExp("^[a-zA-Z/ä-ÿÄ-Ÿ/-/\w]+$");
    
    if (val ==""){
        alert('Veuillez entrer un nom');
    } else if ( !regex.test(val)){
        alert('mauvais caractères');
    }
    else{
        p2.innerHTML = `bonjour ${val}`;    
    }
})

/*ex3*/
btn3.addEventListener('click', function(){
    let tva = 1.2;
    let val = input2.value;
    let calc = val * tva;
    let regex = new RegExp("^[0-9/./,]+$");

    if (val == ""){
        alert('Veuillez entrer une valeur');
    } else if (!regex.test(val)){
        alert('Entrer des chiffres uniquement');
    } else{
        p3.innerHTML = `${calc}`;   
    }
    
})

/*ex4*/
btn4.addEventListener('click', function(){
    
    let val = input3.value;
    let regex = new RegExp("^[0-9/./,]+$");
    if(val > 1.90){
        alert('trop grand pour le manège');
    } else if (val < 1.54){
        alert('trop petit pour le manège');
    } else if (!regex.test(val)){
        alert('Entrer des chiffres uniquement');
    } else {
        alert('super! tu peux y aller');
    }
})
