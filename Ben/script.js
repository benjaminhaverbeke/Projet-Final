document.addEventListener('DOMContentLoaded', function(){
    
    let button = document.querySelector('.button');
    let header = document.querySelector('header');
    console.log(button);
    button.addEventListener("click", function(){
        header.scrolltop = 20;
    })
    
});