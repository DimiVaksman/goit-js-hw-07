

import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);


const galleryContainerItem = document.querySelector('.gallery');
console.log(galleryContainerItem);



function galleryMarkup (items){
return items
.map((item) => `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`).join("");
}


const addGalleryMarkup = galleryMarkup(galleryItems);
galleryContainerItem.innerHTML = addGalleryMarkup;



galleryContainerItem.addEventListener('click' , openModalgalleryItems );


function openModalgalleryItems (e){
    e.preventDefault()
    if(e.target.nodeName !== 'IMG'){
    return    
}

const instance = basicLightbox.create(` <div class="modal">
<img src="${e.target.dataset.source}" width="800" height="600"
</div>
>`)
instance.show();


galleryContainerItem.addEventListener("keydown" , closeModalGalleryItems)

function closeModalGalleryItems (e) {
    if(e.code === "Escape"){
        instance.close()
    }
}
}

