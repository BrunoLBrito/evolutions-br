var btn = document.querySelector('.btn-mobile');
var nav = document.querySelector('.nav');
var action = false;

function span(num){
    return document.querySelector('.btn-mobile span:nth-child('+ num +')');
}

btn.addEventListener('click', btnMobile);

function btnMobile(){
    if(!action){
        nav.style.left = 0;
        span(1).style.transform = "translate(0px, 8px) rotate(225deg)";
        span(2).style.opacity = 0;
        span(3).style.transform = "translate(0px, -10px) rotate(-225deg)";
        btn.style.borderRadius = "50%";
        action = true;
    }else{
        nav.style.left = "-100%";
        span(1).style.transform = "translate(0px, 0px) rotate(0deg)";
        span(2).style.opacity = 1;
        span(3).style.transform = "translate(0px, 0px) rotate(0deg)";
        btn.style.borderRadius = "0";
        action = false;
    }
}

// MODAL --------------//
var modal = document.querySelector('.modal');
var close = document.querySelector('.close');
var login = document.querySelector('#login');

close.onclick = function(){
    modal.style.display = 'none';
}

login.onclick = function(){
    modal.style.display = 'block';
}

