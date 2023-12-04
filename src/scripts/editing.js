import {
  createCardElement,
  deleteCard,
  likeCard,
  imageModal,
  addCardToPagePrepend,
} from "./card";

import { openModal, closeModal } from "./modal";

export const popupTypeImage = document.querySelector(".popup_type_image");
export const popupTypeEdit = document.querySelector(".popup_type_edit");
export const popupTypeNewCard = document.querySelector(".popup_type_new-card");

// Данные профиля
const profileName = document.querySelector(".profile__title").textContent;
const profileJobDescription = document.querySelector(
  ".profile__description"
).textContent;

// Форма попапа редактирования профиля
export const popupInputProfileForm = document.querySelector(
  '.popup_type_edit .popup__form[name="edit-profile"]'
);
// Инпуты попапа профиля
const popupInputProfileName = document.querySelector(".popup__input_type_name");
const popupInputProfileJobDescription = document.querySelector(
  ".popup__input_type_description"
);
// Заполнение инпутов
popupInputProfileName.value = profileName;
popupInputProfileJobDescription.value = profileJobDescription;

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const newProfileNameValue = popupInputProfileName.value;
  const newJobDescriptionValue = popupInputProfileJobDescription.value;

  const profileName = document.querySelector(".profile__title");
  const profileJobDescription = document.querySelector(".profile__description");

  profileName.textContent = newProfileNameValue;
  profileJobDescription.textContent = newJobDescriptionValue;

  closeModal(popupTypeEdit);
  popupInputProfileForm.reset();
}

popupInputProfileForm.addEventListener("submit", handleProfileFormSubmit);

// Форма попапа добавления карточки
export const popupInputNewCardForm = document.querySelector(
  '.popup_type_new-card .popup__form[name="new-place"]'
);
// Инпуты попапа новой карточки
const newCardNameInput = popupInputNewCardForm.querySelector(
  ".popup__input_type_card-name"
);
const newCardUrlInput = popupInputNewCardForm.querySelector(
  ".popup__input_type_url"
);

export function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const newCardNameValue = newCardNameInput.value;
  const newCardUrlValue = newCardUrlInput.value;

  const cardData = {
    name: newCardNameValue,
    link: newCardUrlValue,
  };

  const cardElement = createCardElement(
    cardData,
    deleteCard,
    likeCard,
    imageModal,
    popupTypeImage
  );
  addCardToPagePrepend(cardElement);

  const cardImage = cardElement.querySelector(".card__image");
  openModal(cardImage, popupTypeImage, closeModal);

  closeModal(popupTypeNewCard);
  popupInputNewCardForm.reset();
}

popupInputNewCardForm.addEventListener("submit", handleCardFormSubmit);

export { openModal, closeModal };
