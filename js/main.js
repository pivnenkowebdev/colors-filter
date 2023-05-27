const colorsBtn = document.querySelectorAll('.color-btn');

colorsBtn.forEach((item)=>{

   item.addEventListener('click',(e)=>{

      colorsBtn.forEach((item)=>{

         item.classList.remove('active');

      })

      e.target.classList.add('active');

      const imgSrc = document.querySelector('.img-holder img');

      imgSrc.src = `./img/${e.target.getAttribute('data-color')}.png`;
      
   })

})