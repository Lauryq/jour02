const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const input1 = document.querySelector('.input1');
const random = document.querySelector('.random');
const p2 = document.querySelector('.bjr');
const main = document.querySelector('main');

/*ex1*/
btn1.addEventListener('click', function(){
    
    let nb = Math.floor(Math.random() * 1000);
    random.innerHTML = `${nb}`;
    
});

/*ex2*/
btn2.addEventListener('click', function(){
    let val = input1.value;
    let regex = new RegExp("[a-zA-Z^[0-9]]");
    
    if ( !regex.test(val)){
        alert('mauvais caractères');
    }
    else{
        p2.innerHTML = `bonjour ${val}`;    
    }
})

