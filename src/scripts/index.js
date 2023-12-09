import "../pages/index.css";
import { initialCards } from "./cards";
import { createCardElement, deleteCard, likeCard } from "./card";
import { openModal, closePopup } from "./modal";

// DOM узлы
const content = document.querySelector(".content");
const places = content.querySelector(".places__list");

// Кнопки действий
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

// Имя и описание работы
const profileName = document.querySelector(".profile__title");
const profileJobDescription = document.querySelector(".profile__description");

// Попапы
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");

// Форма попапа редактирования профиля
const popupInputProfileForm = document.querySelector('.popup_type_edit .popup__form[name="edit-profile"]');
// Инпуты попапа профиля
const popupInputProfileName = document.querySelector(".popup__input_type_name");
const popupInputProfileJobDescription = document.querySelector(".popup__input_type_description");
//----------------------------------//

// Форма попапа добавления карточки
const popupInputNewCardForm = document.querySelector('.popup_type_new-card .popup__form[name="new-place"]');
// Инпуты попапа новой карточки
const newCardNameInput = popupInputNewCardForm.querySelector(".popup__input_type_card-name");
const newCardUrlInput = popupInputNewCardForm.querySelector(".popup__input_type_url");
//----------------------------------//

const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");


// Создание существующих карточек
initialCards.forEach((cardData) => {
  const newCard = createCardElement(cardData, deleteCard, likeCard, fillImageAndOpenPopup);
  places.append(newCard);
});

editProfileButton.addEventListener("click", () => {
  popupInputProfileName.value = profileName.textContent; 
  popupInputProfileJobDescription.value = profileJobDescription.textContent; 
  openModal(popupTypeEdit);
});

addCardButton.addEventListener("click", () => {
  openModal(popupTypeNewCard);
});

function fillImageAndOpenPopup(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupCaption.textContent = card.name;

  openModal(popupTypeImage)
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = popupInputProfileName.value;
  profileJobDescription.textContent = popupInputProfileJobDescription.value;

  closePopup(popupTypeEdit);
  popupInputProfileForm.reset();
}
popupInputProfileForm.addEventListener("submit", handleProfileFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const cardData = {
    name: newCardNameInput.value,
    link: newCardUrlInput.value,
  };

  const cardElement = createCardElement(cardData, deleteCard, likeCard, fillImageAndOpenPopup);
  places.prepend(cardElement);

  closePopup(popupTypeNewCard);
  popupInputNewCardForm.reset();
}
popupInputNewCardForm.addEventListener("submit", handleCardFormSubmit);
