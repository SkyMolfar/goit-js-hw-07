import { galleryItems } from "./gallery-items.js";
function generateGalleryItem(item) {
  let template = `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;
  return template;
}
const gallery = document.querySelector(".gallery");
console.log(gallery);
gallery.innerHTML = galleryItems.map(generateGalleryItem).join("");

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const isGalleryImage = event.target.classList.contains("gallery__image");

  if (!isGalleryImage) {
    return;
  }

  const imageUrl = event.target.dataset.source;
  console.log(imageUrl);
  const instance = basicLightbox.create(
    `<img src="${imageUrl}" width="800" height="600">`
  );

  instance.show();
}

// const instance = basicLightbox.create(`
//   <img src="./js/gallery-items.js" width="800" height="600">
// `);

// instance.show();
