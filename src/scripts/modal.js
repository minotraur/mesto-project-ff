export function openModal(element, popupType, closeModalHandler) {
  element.addEventListener("click", function () {
    popupType.classList.add("popup_is-opened");
  });

  // Закрытие по нажатию на кнопку с крестиком
  const closePopupButton = popupType.querySelector(".popup__close");
  if (closePopupButton) {
    closePopupButton.addEventListener("click", function () {
      closeModalHandler(popupType);
    });
  }

  // Закрытие по нажатию вне области попапа
  const pressOverlayClick = function (event) {
    if (event.target === popupType) {
      closeModalHandler(popupType);
    }
  };
  popupType.addEventListener("click", pressOverlayClick);

  // Закрытие по нажатию на Escape
  const pressEscKey = function (event) {
    if (event.key === "Escape") {
      closeModalHandler(popupType);
    }
  };
  document.addEventListener("keydown", pressEscKey);

  // Закрытие по нажатию на кнопку сохранения
  const saveEditProfileButton = popupType.querySelector(".popup__button");
  if (saveEditProfileButton) {
    saveEditProfileButton.addEventListener("click", function () {
      closeModalHandler(popupType);
    });
  }

  if (element.classList.contains("card__image")) {
    const imageLink = element.src;
    const imageName = element.alt;
    const imageElement = popupType.querySelector(".popup__image");
    const imageCaption = popupType.querySelector(".popup__caption");
    imageElement.src = imageLink;
    imageCaption.textContent = imageName;
    popupType.classList.add("popup__image");
  }

  popupType.classList.add("popup_is-animated");
}

export function closeModal(popupType) {
  popupType.classList.remove("popup_is-opened");
}
