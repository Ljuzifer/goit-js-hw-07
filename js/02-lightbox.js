import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryOfImages = document.querySelector("ul.gallery");
const imagesMarkup = createImageGallery(galleryItems);

galleryOfImages.insertAdjacentHTML("beforeend", imagesMarkup);

// galleryOfImages.addEventListener("click", onGalleryItemClick);
var lightbox = new SimpleLightbox(".gallery__item a", {
  /* options */
  original,
});

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
            `;
    })
    .join("");
}

// function onGalleryItemClick(e) {
//   e.preventDefault();

//   var lightbox = new SimpleLightbox(".gallery__item a", {
//     /* options */
//     sourceAttr: original,
//   });
//   console.log(lightbox);
// }
