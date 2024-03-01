document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
  
    const burgerOpen = document.querySelector('.header__burger')
    const burgerClose = document.querySelector('.header__nav__close')
    const navigation = document.querySelector('.header__nav')
  
    burgerOpen.addEventListener('click', function() {
      navigation.classList.add('active')
    })
  
    burgerClose.addEventListener('click', function() {
      navigation.classList.remove('active')
    })

//*****************************************   Main  *****************************************
/*const arrowTop = document.querySelector('.arrow-top');
const arrowBottom = document.querySelector('.arrow-bottom');
const articles = document.querySelectorAll('.article');
let position = 1400;

arrowBottom.addEventListener('click', function(){
  window.scroll(0, position, 'smooth');
  position += 1500;
  
})
arrowTop.addEventListener('click', function(){
  window.scroll(0, -200);
})*/
=======

  const burgerOpen = document.querySelector('.header__burger')
  const burgerClose = document.querySelector('.header__nav__close')
  const navigation = document.querySelector('.header__nav')

  burgerOpen.addEventListener('click', function() {
    navigation.classList.add('active')
  })

  burgerClose.addEventListener('click', function() {
    navigation.classList.remove('active')
  })

  let button = document.querySelector('.button');

  console.log(button);
  button.addEventListener("click", function() {
    console.log(event);

    window.scroll(0, 0);


  });



>>>>>>> 51042fa85cf5657473b8f6dae0d29c79c2e85a90
});
