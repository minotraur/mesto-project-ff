// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
export function createCardElement(
  card,
  deleteCardHandler,
  likeCardHandler,
  openModalHandler,
  popupTypeImage,
  closeModalHandler
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");

  cardElement.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  // Слушатель на удаление карточки
  cardDeleteButton.addEventListener("click", deleteCardHandler);

  // Слушатель на лайк
  cardLikeButton.addEventListener("click", function () {
    likeCardHandler(cardLikeButton);
  });

  // Новый слушатель на открытие модального окна
  cardImage.addEventListener("click", function () {
    openModalHandler(cardImage, popupTypeImage, closeModalHandler);
  });

  return cardElement;
}

// Функция удаления карточки
export function deleteCard(event) {
  const cardToRemove = event.target.closest(".card");
  if (cardToRemove) {
    cardToRemove.remove();
  }
}

// Функция лайка карточки
export function likeCard(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}
