document.addEventListener('DOMContentLoaded', () => {

   const accordions = document.querySelectorAll('.sidebar__item');

   for(let item of accordions){
      item.addEventListener('click', function() {
        if(this.classList.contains('active')){
         this.classList.remove('active');
        } else{
           for(let el of accordions){
              el.classList.remove('active');
           }
           this.classList.add('active');
        }
      })
   }

})
