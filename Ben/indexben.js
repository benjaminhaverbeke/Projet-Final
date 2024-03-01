function createWave (container){
  const wave = document.createElement('div');

wave.className = 'wave';
wave.style.top = (Math.random() * 100) + '%';
wave.style.left = (Math.random() * 100) + '%';
 wave.style.opacity = (Math.random()*100) + '%';
container.appendChild(wave);
 
};



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
  

let mer = document.querySelector('.mer');
for(let i = 0; i < 50; i++){
  createWave(mer);
  
  
}



});
