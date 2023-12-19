import "../pages/index.css";
import {
  getInitialCards,
  getProfileInfo,
  editProfileData,
  addNewCard,
  deleteCard,
  changeAvatar,
} from "./api.js";
import {
  createCardElement,
  handleDeleteCardClick,
  handleLikeIconClick,
} from "./card";
import { openModal, closePopup } from "./modal";
import { enableValidation, clearValidation } from "./validation";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

let userId = null;

// DOM узлы
const content = document.querySelector(".content");
const places = content.querySelector(".places__list");

// Кнопки действий
const popupTypeAvatarButton = document.querySelector(".profile__image");
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

// Имя и описание работы
const profileName = document.querySelector(".profile__title");
const profileJobDescription = document.querySelector(".profile__description");

// Попапы
const popupTypeAvatarEdit = document.querySelector(".popup_type_avatar_edit");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");

// Форма попапа редактирования аватара
const popupAvatarForm = document.querySelector(
  '.popup_type_avatar_edit .popup__form[name="edit-avatar"]'
);
const popupAvatarUrl = document.querySelector(".popup__input_type_avatar_url");

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

const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");

Promise.all([getInitialCards(), getProfileInfo()])
  .then(([cards, userData]) => {
    userId = userData._id;
    profileName.textContent = userData.name;
    profileJobDescription.textContent = userData.about;
    popupTypeAvatarButton.style.backgroundImage = `url('${userData.avatar}')`;

    cards.forEach((data) => {
      const newCard = createCardElement(
        data,
        handleDeleteCard,
        handleLikeIconClick,
        fillImageAndOpenPopup,
        userId
      );
      places.append(newCard);
    });
  })
  .catch((err) => {
    console.log(err);
  });

popupTypeAvatarButton.addEventListener("click", () => {
  clearValidation(popupAvatarForm, validationConfig);
  openModal(popupTypeAvatarEdit);
});

editProfileButton.addEventListener("click", () => {
  clearValidation(popupInputProfileForm, validationConfig);
  popupInputProfileName.value = profileName.textContent;
  popupInputProfileJobDescription.value = profileJobDescription.textContent;
  openModal(popupTypeEdit);
});

addCardButton.addEventListener("click", () => {
  clearValidation(popupInputNewCardForm, validationConfig);
  openModal(popupTypeNewCard);
});

function fillImageAndOpenPopup(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupCaption.textContent = card.name;
  openModal(popupTypeImage);
}

const handleDeleteCard = (cardId, cardElement) => {
  deleteCard(cardId)
    .then(() => {
      handleDeleteCardClick(cardElement);
    })
    .catch((err) => {
      console.log(err);
    });
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const submitButton = evt.srcElement.querySelector(".popup__button");
  renderLoading(true, submitButton);
  editProfileData(
    popupInputProfileName.value,
    popupInputProfileJobDescription.value
  )
    .then((userData) => {
      profileName.textContent = userData.name;
      profileJobDescription.textContent = userData.about;
      closePopup(popupTypeEdit);
      popupInputProfileForm.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, submitButton);
    });
}
popupInputProfileForm.addEventListener("submit", handleProfileFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const cardData = {
    name: newCardNameInput.value,
    link: newCardUrlInput.value,
    likes: [],
  };

  const submitButton = evt.srcElement.querySelector(".popup__button");
  renderLoading(true, submitButton);
  addNewCard(cardData.name, cardData.link)
    .then((res) => {
      const cardElement = createCardElement(
        res,
        handleDeleteCard,
        handleLikeIconClick,
        fillImageAndOpenPopup,
        userId
      );

      places.prepend(cardElement);
      closePopup(popupTypeNewCard);
      popupInputNewCardForm.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, submitButton);
    });
}
popupInputNewCardForm.addEventListener("submit", handleCardFormSubmit);

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();

  const submitButton = evt.srcElement.querySelector(".popup__button");
  renderLoading(true, submitButton);

  changeAvatar(popupAvatarUrl.value)
    .then((res) => {
      popupTypeAvatarButton.style.backgroundImage = `url('${res.avatar}')`;
      closePopup(popupTypeAvatarEdit);
      popupAvatarForm.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, submitButton);
    });
}
popupAvatarForm.addEventListener("submit", handleAvatarFormSubmit);

enableValidation(validationConfig);

function renderLoading(isLoading, submitButton) {
  if (isLoading) {
    submitButton.textContent = "Сохранение...";
  } else {
    submitButton.textContent = "Сохранить";
  }
}
