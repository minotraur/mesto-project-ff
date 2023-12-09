export function openModal(popup) {
  // Открываем модальное окно, добавляя класс "popup_is-opened".
  popup.classList.add("popup_is-opened");

  // Добавляем обработчики событий для закрытия модального окна.
  document.addEventListener("keydown", closeByEsc);
  popup.addEventListener("click", closeClickOverlay);

  // Добавляем обработчик события для закрытия по клику на кнопку закрытия.
  popup
    .querySelector(".popup__close")
    .addEventListener("click", () => closePopup(popup));

  // Добавляем класс "popup_is-animated" для запуска анимации.
  popup.classList.add("popup_is-animated");
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEsc);
}

function closeByEsc(evt) {
  const openedPopup = document.querySelector(".popup_is-opened");
  // Проверяем, что событие вызвано нажатием клавиши Esc.
  if (evt.key === "Escape") {
    closePopup(openedPopup);
  }
}

function closeClickOverlay(evt) {
  // Проверяем, что клик произошел по самому оверлею, а не его дочернему элементу.
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}
