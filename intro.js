const slider = document.querySelector('.slider');
const speech = document.querySelector('.speech');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

var direction;

prev.addEventListener('click', function() {
       if(direction == -1){
              slider.appendChild(slider.firstElementChild)
       direction = 1
       }
       speech.style.justifyContent = 'flex-end'
       slider.style.transform = 'translate(20%)';
       
});


next.addEventListener('click', function() {
       direction = -1
       speech.style.justifyContent = 'flex-start'
       slider.style.transform = 'translate(-20%)';
});

slider.addEventListener('transitionend', function(){
       if(direction == -1){
     slider.appendChild(slider.firstElementChild);
       }else if (direction == 1) {
              slider.prepend(slider.lastElementChild);
       }

      slider.style.transition = 'none';
     slider.style.transform = 'translate(0)';
     setTimeout(function(){
     slider.style.transition = 'all 0.5s';
})
})



const slider2 = document.querySelector('.slider2');
const like_inner = document.querySelector('.like_inner');

const left = document.querySelector('.left');
const right = document.querySelector('.right');

var direction = -1; 

left.addEventListener('click', function(){
       if (direction == 1) {
              slider2.appendChild(slider2.firstElementChild);
             direction = -1;
            }
            like_inner.style.justifyContent = 'flex-end';
            slider2.style.transform = 'translateX(20%)';
          });


right.addEventListener('click', function(){
       if (direction == 1) {
              slider2.prepend(slider2.lastElementChild);
              direction = -1;
              }
              like_inner.style.justifyContent = 'flex-start';
              slider2.style.transform = 'translate(-20%)';
          });
slider2.addEventListener('transitionend', function(){
       if (direction == -1){
       slider2.appendChild(slider2.firstElementChild);
       } else if (direction == 1){
              slider2.prepend(slider2.lastElementChild)
       }

       slider2.style.transition = 'none';
       slider2.style.transform = 'translate(0)';
       setTimeout(function(){
              slider2.style.transition = 'all 0.5s';
       }
)
})


document.addEventListener('DOMContentLoaded', () => {
       const links = document.querySelectorAll('.nav-bar ul li a');
       const textElement = document.getElementById('content-text');
   
       links.forEach(link => {
           link.addEventListener('click', (event) => {
               event.preventDefault();
               const text = link.getAttribute('data-text');
   
               titleElement.textContent = title;
               textElement.textContent = text;
   
           });
       });
   });
   

   
