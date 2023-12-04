export function openModal(element, popupElement, closeModalHandler) {
  function openModalHandler() {
    popupElement.classList.add("popup_is-opened");
  }

  function closeModalHandler() {
    popupElement.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", pressEscKey);
    popupElement.removeEventListener("click", closeModalHandler);
  }

  function pressOverlayClick(event) {
    if (event.target === popupElement) {
      closeModalHandler();
    }
  }

  function pressEscKey(event) {
    if (event.key === "Escape") {
      closeModalHandler();
    }
  }

  element.addEventListener("click", openModalHandler);

  const closeModalButton = popupElement.querySelector(".popup__close");
  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeModalHandler);
  }

  popupElement.addEventListener("click", pressOverlayClick);
  document.addEventListener("keydown", pressEscKey);

  if (element.classList.contains("card__image")) {
    const { src: imageLink, alt: imageName } = element;
    const imageElement = popupElement.querySelector(".popup__image");
    const imageCaption = popupElement.querySelector(".popup__caption");

    imageElement.src = imageLink;
    imageCaption.textContent = imageName;
    popupElement.classList.add("popup__image");
  }

  popupElement.classList.add("popup_is-animated");
}

export function closeModal(popupElement) {
  popupElement.classList.remove("popup_is-opened");
}
