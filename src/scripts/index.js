import "../pages/index.css";
import { initialCards } from "./cards";
import { createCardElement, deleteCard, likeCard } from "./card";
import { openModal, closeModal } from "./modal";

// DOM узлы
const content = document.querySelector(".content");
const places = content.querySelector(".places__list");

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const popupTypeImage = document.querySelector(".popup_type_image");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");

// Форма попапа редактирования профиля
const popupInputProfileForm = document.querySelector(
  '.popup_type_edit .popup__form[name="edit-profile"]'
);
// Инпуты попапа профиля
const popupInputProfileName = document.querySelector(".popup__input_type_name");
const popupInputProfileJobDescription = document.querySelector(
  ".popup__input_type_description"
);
//----------------------------------//

// Форма попапа добавления карточки
const popupInputNewCardForm = document.querySelector(
  '.popup_type_new-card .popup__form[name="new-place"]'
);
// Инпуты попапа новой карточки
const newCardNameInput = popupInputNewCardForm.querySelector(
  ".popup__input_type_card-name"
);
const newCardUrlInput = popupInputNewCardForm.querySelector(
  ".popup__input_type_url"
);
//----------------------------------//

// Создание существующих карточек
initialCards.forEach((cardElement) => {
  const newCard = createCardElement(
    cardElement,
    deleteCard,
    likeCard,
    openModal,
    popupTypeImage,
    closeModal
  );
  places.append(newCard);
});

// Открытие модального окна редактирования
openModal(editProfileButton, popupTypeEdit, closeModal);
// Открытие модального окна создания карточки
openModal(addCardButton, popupTypeNewCard, closeModal);

const cardImages = content.querySelectorAll(".card__image");
for (let image of cardImages) {
  // Открытие модального окна карточки
  openModal(image, popupTypeImage, closeModal);
}

export function openProfileEditModal() {
  const profileName = document.querySelector(".profile__title").textContent;
  const profileJobDescription = document.querySelector(
    ".profile__description"
  ).textContent;

  popupInputProfileName.value = profileName;
  popupInputProfileJobDescription.value = profileJobDescription;
}

editProfileButton.addEventListener("click", openProfileEditModal);

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
    openModal,
    popupTypeImage,
    closeModal
  );
  places.prepend(cardElement);

  closeModal(popupTypeNewCard);
  popupInputNewCardForm.reset();
}
popupInputNewCardForm.addEventListener("submit", handleCardFormSubmit);
