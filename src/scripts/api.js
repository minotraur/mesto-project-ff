const config = {
  baseUrl: "https://nomoreparties.co/v1/cohort-magistr-2",
  headers: {
    authorization: "29c4de3b-b718-48a8-93bf-31d082303221",
    "Content-Type": "application/json",
  },
};

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(checkResponse);
};

export const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me `, {
    headers: config.headers,
  }).then(checkResponse);
};

export const editProfileData = (newName, newAbout) => {
  return fetch(`${config.baseUrl}/users/me `, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: newName,
      about: newAbout,
    }),
  }).then(checkResponse);
};

export const addNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkResponse);
};

export const deleteCard = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

export const changeLikeStatus = (id, like) => {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: like ? "PUT" : "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

export const changeAvatar = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: link,
    }),
  }).then(checkResponse);
};
