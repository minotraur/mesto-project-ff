let openedPopup = null;

export function openModal(popup) {
  // Добавляем класс "popup_is-animated" для запуска анимации.
  popup.classList.add("popup_is-animated");
  
  // setTimeout используется для того, чтобы дать браузеру отрисовать анимацию перед добавлением класса "popup_is-opened".
  setTimeout(() => {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", closeByEsc);
    document.addEventListener("click", closeClickOverlay);

    const closePopupButton = popup.querySelector(".popup__close");

    // Проверяем, существует ли кнопка закрытия перед добавлением обработчика события.
    if (closePopupButton) {
      closePopupButton.addEventListener("click", closeButton);
    }

    openedPopup = popup;
  }, 0);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEsc);
}

function closeByEsc(evt) {
  // Проверяем, что событие вызвано нажатием клавиши Esc.
  if (evt.key === "Escape") {
    closePopup(openedPopup);
  }
}

function closeClickOverlay(evt) {
  // Проверяем, что клик произошел по самому оверлею, а не его дочернему элементу.
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
}

function closeButton() {
  const closeButton = openedPopup.querySelector(".popup__close");
  // Проверяем, существует ли кнопка закрытия перед вызовом closePopup.
  if (closeButton) {
    closePopup(openedPopup);
  }
}
