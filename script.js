var x=1
function ClickAdd(){
    console.log(x);
    if(x<10){
        x=x+1;
    }
}

function ClickMinus(){
    console.log(x);
    if(x>0){
        x=x-1;
    }
}
const button = document.querySelector('#Add');
button.addEventListener('click', ClickAdd);

const button1 = document.querySelector('#Minus');
button1.addEventListener('click', ClickMinus);