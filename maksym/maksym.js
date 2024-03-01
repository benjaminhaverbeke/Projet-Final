document.addEventListener('DOMContentLoaded', function(){
  
  const openForm = document.querySelector('.pop-up-button');
  const popUp = document.querySelector('.pop-up');

  openForm.addEventListener('click', function(){
popUp.classList.add('open');
  });

  document.addEventListener('click', function(event){
    let click = event.target;
    if (click !== popUp && click !== openForm){
      popUp.classList.remove('.open');
    }
  });
});