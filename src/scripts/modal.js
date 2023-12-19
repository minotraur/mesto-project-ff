export function openModal(popup) {
  // Открываем модальное окно, добавляя класс "popup_is-opened".
  popup.classList.add("popup_is-opened");

  // Добавляем обработчики событий для закрытия модального окна.
  document.addEventListener("keydown", closeByEsc);
  popup.addEventListener("click", closeClickOverlay);

  // Сохраняем ссылку на функцию обработчика
  const closePopupHandler = () => closePopup(popup);

  // Добавляем обработчик события для закрытия по клику на кнопку закрытия.
  popup
    .querySelector(".popup__close")
    .addEventListener("click", closePopupHandler);

  // Добавляем класс "popup_is-animated" для запуска анимации.
  popup.classList.add("popup_is-animated");

  // Сохраняем ссылку на функцию обработчика в свойстве объекта popup
  popup.closePopupHandler = closePopupHandler;
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEsc);
  popup.removeEventListener("click", closeClickOverlay);

  // Удаляем обработчик события по сохраненной ссылке
  popup
    .querySelector(".popup__close")
    .removeEventListener("click", popup.closePopupHandler);
}

function closeByEsc(evt) {
  // Проверяем, что событие вызвано нажатием клавиши Esc.
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}

function closeClickOverlay(evt) {
  // Проверяем, что клик произошел по самому оверлею, а не его дочернему элементу.
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}
