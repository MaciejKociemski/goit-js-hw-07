import { galleryItems } from './gallery-items.js';
// Change code below this line




const gallery = galleryItems;
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend',cardsMarkup);

galleryContainer.addEventListener('click', onGaleryContainerClick);

function createCardsMarkup(galleryItems) {
  return galleryItems
    .map(({preview, original, description }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }
  )
      .join('');
}

function onGaleryContainerClick(event) {
    
    //zablokowanie pobierania obrazka

    event.preventDefault();

    const isColorSwatchEl = event.target.classList.contains;
    
    ('gallery__image');
    if (!isColorSwatchEl) {
      return;
    }
    const swatchEl = event.target.dataset.source;
    
  //basicLightbox, Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem. Użyj gotowego znacznika okna modalnego z obrazem z przykładów biblioteki basicLightbox.
    
    const instance = basicLightbox.create(`  
     <div class="modal">
           <img src="${swatchEl}" width="800" height="600"> 
    </div>`)

instance.show()

// escape ma działać tylko gdy jest otwarte okno modalne

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
      instance.close();
  };
})

  }
  
  console.log(galleryItems);