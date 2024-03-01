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

//*****************************************   Main  *****************************************
const arrowTop = document.querySelector('.btn-slide-top');
const arrowBottom = document.querySelector('.btn-slide-bottom');
/*const articles = document.querySelectorAll('.article');
let position = 1400;

arrowBottom.addEventListener('click', function(){
  window.scroll(0, position, 'smooth');
  position += 1500;
  
})
arrowTop.addEventListener('click', function(){
  window.scroll(0, -200);
})*/
const articles = document.querySelectorAll('article');
const colors = ['#BAC393', '#C5D7D8', '#BACFD0', '#A2906F', '#AAC699',
'#BAC393', '#C5D7D8', '#BACFD0', '#A2906F', '#AAC699' ];

const articlesIndex = [];
for (let i = 0; i < articles.length; i++){
  articles[i].style.backgroundColor = colors[i];
  articlesIndex.push(articles[i].getAttribute('id'))
}
let currentArticle = 1;
arrowBottom.addEventListener('click', function(){
  arrowBottom.setAttribute('href', `#${currentArticle + 1}`);
  if(currentArticle < articlesIndex.length){
    currentArticle++;
  }
})
arrowTop.addEventListener('click', function(){
  arrowTop.setAttribute('href', `#${currentArticle -1}`);
  if(currentArticle > 1){
    currentArticle--;
  }
})
/********************footer***************/
let button = document.querySelector('.button');
    
    console.log(button);
    button.addEventListener("click", function(){
        console.log(event);
     
           window.scroll(0, 0);
           //Nafion
           currentArticle = 1;
     
        
    })
    
});  
