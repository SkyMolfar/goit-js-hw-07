import { galleryItems } from "./gallery-items.js";
// Change code below this lin
function generateGalleryItem(item) {
  let template = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
     <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
</li>`;
  return template;
}
const gallery = document.querySelector(".gallery");
console.log(gallery);
gallery.innerHTML = galleryItems.map(generateGalleryItem).join("");

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
