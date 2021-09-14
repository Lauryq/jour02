const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const random = document.querySelector('.random');
const main = document.querySelector('main');

/*ex1*/
btn1.addEventListener('click', function(){
    
    let nb = Math.floor(Math.random() * 1000);
    random.innerHTML = `${nb}`;
    
});

/*ex2*/