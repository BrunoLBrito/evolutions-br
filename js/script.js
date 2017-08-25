var btn = document.querySelector('.btn-mobile');
var nav = document.querySelector('.nav');

btn.onclick = function(){
    btn.classList.toggle("change");
    if(btn.classList.contains("change")){
        nav.style.left = 0;
    }else{
       nav.style.left = "-100%";
    }
}

// MODAL --------------//
var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal-content');
var close = document.querySelector('.close');
var login = document.querySelector('#login');

var modalAction = 'desativo';

close.onclick = function(){
    if(modalAction == 'ativo'){
        modalContent.style.animation = "animatedback 1s";
        setTimeout(function(){
            modal.style.display = 'none';
        }, 700);
        modalAction = 'desativo';
    }
}

login.onclick = function(){
    if(modalAction == 'desativo')
        modal.style.display = 'block';
        modalContent.style.animation = "animatedtop .7s";
        modalAction = 'ativo';
}

// window.onclick = function(e){
//     if(e.target == modal)
//         modal.style.display = "none";
// }

