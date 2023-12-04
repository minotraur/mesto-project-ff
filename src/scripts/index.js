import "../pages/index.css";
import { initialCards } from "./cards";
import {
  handleProfileFormSubmit,
  popupInputProfileForm,
  handleCardFormSubmit,
  popupInputNewCardForm,
  popupTypeImage,
  popupTypeEdit,
  popupTypeNewCard,
  openModal,
  closeModal,
} from "./editing";

import {
  createCardElement,
  addCardToPage,
  deleteCard,
  likeCard,
  imageModal,
} from "./cardCreate";

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const cardImage = document.querySelectorAll(".card__image");

// Отрисовка существующих карточек
initialCards.forEach((cardElement) => {
  const newCard = createCardElement(
    cardElement,
    deleteCard,
    likeCard,
    imageModal,
    popupTypeImage
  );
  addCardToPage(newCard);
});

// Настройка всплывающих окон и прослушивателей событий
for (const image of cardImage) {
  openModal(image, popupTypeImage, closeModal);
}

openModal(editProfileButton, popupTypeEdit, closeModal);
openModal(addCardButton, popupTypeNewCard, closeModal);

popupInputProfileForm.addEventListener("submit", handleProfileFormSubmit);
popupInputNewCardForm.addEventListener("submit", handleCardFormSubmit);
