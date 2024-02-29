document.addEventListener('DOMContentLoaded', function() {
  
  (() => {
    const burgerOpen = document.querySelector('.header__burger')
    const burgerClose = document.querySelector('.header__nav__close')
    const navigation = document.querySelector('.header__nav')
  
    burgerOpen.addEventListener('click', () => {
      navigation.classList.add('active')
    })
  
    burgerClose.addEventListener('click', () => {
      navigation.classList.remove('active')
    })
  })();
});
