var btn = document.querySelector('.btn-mobile');
var nav = document.querySelector('.nav');
var action = false;

btn.addEventListener('click', btnMobile);

function btnMobile(){
    if(!action){
        nav.style.left = "0";
        action = true;
    }else{
        nav.style.left = "-100%";
        action = false;
    }
}