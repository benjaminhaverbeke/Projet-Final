document.addEventListener('DOMContentLoaded', function() {

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



});
