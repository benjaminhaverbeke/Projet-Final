function createWave(container) {
  const wave = document.createElement('div');

  wave.className = 'wave';
  wave.style.top = (Math.random() * 100) + '%';
  wave.style.left = (Math.random() * 100) + '%';
  wave.style.opacity = (Math.random() * 100) + '%';
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

  // let button = document.querySelector('.button');

  // console.log(button);
  // button.addEventListener("click", function() {
  //   console.log(event);

  //   window.scroll(0, 0);


  // });


  let mer = document.querySelector('.mer');
  for (let i = 0; i < 50; i++) {
    createWave(mer);


  }
  let input = document.querySelector('.slider');
  let valuelist = document.querySelectorAll('datalist option');
  let article = document.querySelectorAll('section article');







  console.log(article);
  // let valeur = valuelist.option;
  // console.log(valeur);
  // console.log(valuelist);

  article[0].style.opacity = "1";
  article[0].style.zIndex = "1";


  input.addEventListener('change', function() {

    let stock = input.value;

    for (let i = 0; i < valuelist.length; i++) {


      article[i].value = valuelist[i].value;
      if (article[i].value === stock) {

        article[i].style.opacity = "1";
        article[i].style.zIndex = "2";

      }
      else {
        article[i].style.opacity = "0";
        article[i].style.zIndex = "0";
      }




    }



    console.log(stock);



  });


  // console.log(article)
  // article.valeurinnerText = valeur;


  // input.addEventListener('change', function(){
  //     paragraphe.textContent = input.value;

  // });



});
