document.addEventListener('DOMContentLoaded', () => {
'use strict';

   const tabs = () => {

       const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
       const cardDetailTitleElem = document.querySelector('.card-details__title');
        const cardImageItemElem = document.querySelector('.card__image_item');
        const cardDetailsPriceElem = document.querySelector('.card-details__price');
        const descriptionMemoryElem = document.querySelector('.description__memory');

        const data = [
          {
              name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
              img: 'img/iPhone-graphite.png',
              price: 95900,
              memoryRom: 128
          },
          {
              name: 'Смартфон Apple iPhone 12 Pro 256GB Silver',
              img: 'img/iPhone-silver.png',
              price: 120900,
              memoryRom: 256
          },
          {
              name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
              img: 'img/iPhone-blue.png',
              price: 99900,
              memoryRom: 128
          },
        ];
        
        const deactive =() => {

          cardDetailChangeElems.forEach(btn => btn.classList.remove('active'))
        }

        cardDetailChangeElems.forEach((btn, i) =>{

          
            btn.addEventListener('click', () => {

              if (!btn.classList.contains('active')) {

                deactive();
                
                  btn.classList.add('active');
        cardDetailTitleElem.textContent = data[i].name ;
        cardImageItemElem.src = data[i].img;
        cardImageItemElem.alt = data[i].name;
        cardDetailsPriceElem.textContent = data[i].price +'₽'  ;
        descriptionMemoryElem.textContent = `Встроенная память (ROM) ${data[i].memoryRom} ГБ`;

              }
            });
        })

   };
 tabs();

});



//  const tabs = () => {

  //       const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
  //       const cardDetailTitleElems = document.querySelectorAll('.card-details__title');
  //       const cardImageElems = document.querySelectorAll('.card__image');

  //       const hideAll = () => {

  //        for (let i = 0; i < cardDetailChangeElems.length; i++) {
            
  //           cardDetailChangeElems[i].classList.remove('active')
  //           cardDetailTitleElems[i].classList.remove('active')
  //           cardImageElems[i].classList.remove('active')
  //         }   

  //       };


  //       for (let i = 0; i < cardDetailChangeElems.length; i++) {

  //           cardDetailChangeElems[i].addEventListener('click', () => {
  //           hideAll();
  //           cardDetailChangeElems[i].classList.add('active');
  //           cardDetailTitleElems[i].classList.add('active');
  //           cardImageElems[i].classList.add('active');

  //           });

  //       }
  //   };


  // tabs();