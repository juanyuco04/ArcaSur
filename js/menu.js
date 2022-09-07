/* document.querySelector('.bars__menu').addEventListener('click', animateBars);

var line1__bars= document.querySelector('.line1__bars-menu');
var line2__bars= document.querySelector('.line2__bars-menu');
var line3__bars= document.querySelector('.line3__bars-menu');

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu")
    line2__bars.classList.toggle('activeline2__bars-menu')
    line3__bars.classList.toggle('activeline3__bars-menu')
} */



window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }

}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu(){
    
    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}


window.addEventListener("resize", function(){

    if(window.innerWidth > 760){
        menu.classList.remove('move_content');
    body.classList.remove('move_content');
    nav.classList.remove('move_nav');
    }

})