import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryOfImages = document.querySelector("ul.gallery");
const imagesMarkup = createImageGallery(galleryItems);

galleryOfImages.insertAdjacentHTML("beforeend", imagesMarkup);

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
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});

// ----------------- 2nd variant -----------------------
// const imagesMarkup = galleryItems.reduce(
//   (acc, { original, preview, description }) =>
//     (acc += `<li>
//   <a class="gallery__item" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       alt="${description}"
//     />
//   </a>
// </li>`),
//   "",
// );

// galleryOfImages.insertAdjacentHTML("beforeend", imagesMarkup);

// const lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
// });
