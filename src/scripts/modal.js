export function openModal(element, popupType, closeModalHandler) {
  element.addEventListener("click", function () {
    popupType.classList.add("popup_is-opened");
    addEscListener(() => closeModalHandler(popupType));
    addOverlayClickListener(popupType, () => closeModalHandler(popupType));
  });

  const closePopupButton = popupType.querySelector(".popup__close");
  if (closePopupButton) {
    closePopupButton.addEventListener("click", function () {
      closeModalHandler(popupType);
    });
  }

  const saveButton = popupType.querySelector(".popup__button-save");
  if (saveButton) {
    saveButton.addEventListener("click", function () {
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
  removeEscListener(() => closeModalHandler(popupType));
}

function addEscListener(callback) {
  const pressEscKey = function (event) {
    if (event.key === "Escape") {
      callback();
    }
  };
  document.addEventListener("keydown", pressEscKey);
}

function removeEscListener(callback) {
  document.removeEventListener("keydown", callback);
}

function addOverlayClickListener(popupType, callback) {
  const pressOverlayClick = function (event) {
    if (event.target === popupType) {
      callback();
    }
  };
  popupType.addEventListener("click", pressOverlayClick);
}
