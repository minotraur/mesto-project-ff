(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/cohort-magistr-2",headers:{authorization:"29c4de3b-b718-48a8-93bf-31d082303221","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(e,t,r,o,c){var a=n.querySelector(".card").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__delete-button"),l=a.querySelector(".card__like-button"),s=a.querySelector(".like-counter");return a.querySelector(".card__title").textContent=e.name,u.src=e.link,u.alt=e.name,e.likes.some((function(e){return e._id===c}))&&l.classList.add("card__like-button_is-active"),s.textContent=e.likes.length,e.owner._id===c&&t?i.addEventListener("click",(function(){t(e._id,a)})):i.remove(),r&&l.addEventListener("click",(function(){return r(e._id,l,s)})),o&&u.addEventListener("click",(function(){return o(e)})),a}var o=function(n,r,o){var c,a;(c=n,a=!r.classList.contains("card__like-button_is-active"),fetch("".concat(e.baseUrl,"/cards/likes/").concat(c),{method:a?"PUT":"DELETE",headers:e.headers}).then(t)).then((function(e){r.classList.toggle("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){console.log(e)}))};function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u),e.addEventListener("click",i);var t=function(){return a(e)};e.querySelector(".popup__close").addEventListener("click",t),e.classList.add("popup_is-animated"),e.closePopupHandler=t}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),e.removeEventListener("click",i),e.querySelector(".popup__close").removeEventListener("click",e.closePopupHandler)}function u(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function i(e){e.target.classList.contains("popup")&&a(e.target)}var l=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)},s=function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):p(e,t,t.validationMessage,n)},p=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)},d=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""};function _(e,t){var n=e.querySelectorAll(t.inputSelector),r=e.querySelector(".popup__button");r.classList.add(t.inactiveButtonClass),r.disabled=!0,n.forEach((function(n){var r=e.querySelector(".".concat(n.id,"-error"));n.classList.remove(t.inputErrorClass),r.classList.remove(t.errorClass),r.textContent=""}))}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},y=null,v=document.querySelector(".content").querySelector(".places__list"),h=document.querySelector(".profile__image"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),q=document.querySelector(".profile__title"),E=document.querySelector(".profile__description"),L=document.querySelector(".popup_type_avatar_edit"),g=document.querySelector(".popup_type_edit"),C=document.querySelector(".popup_type_new-card"),k=document.querySelector('.popup_type_avatar_edit .popup__form[name="edit-avatar"]'),x=document.querySelector(".popup__input_type_avatar_url"),A=document.querySelector('.popup_type_edit .popup__form[name="edit-profile"]'),w=document.querySelector(".popup__input_type_name"),U=document.querySelector(".popup__input_type_description"),j=document.querySelector('.popup_type_new-card .popup__form[name="new-place"]'),O=j.querySelector(".popup__input_type_card-name"),P=j.querySelector(".popup__input_type_url"),T=document.querySelector(".popup_type_image"),B=T.querySelector(".popup__image"),D=T.querySelector(".popup__caption");function I(e){B.src=e.link,B.alt=e.name,D.textContent=e.name,c(T)}Promise.all([fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/users/me "),{headers:e.headers}).then(t)]).then((function(e){var t,n,c=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],u=c[1];y=u._id,q.textContent=u.name,E.textContent=u.about,h.style.backgroundImage="url('".concat(u.avatar,"')"),a.forEach((function(e){var t=r(e,M,o,I,y);v.append(t)}))})).catch((function(e){console.log(e)})),h.addEventListener("click",(function(){_(k,m),c(L)})),S.addEventListener("click",(function(){_(A,m),w.value=q.textContent,U.value=E.textContent,c(g)})),b.addEventListener("click",(function(){_(j,m),c(C)}));var H,M=function(n,r){var o;(o=n,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then(t)).then((function(){!function(e){e.remove()}(r)})).catch((function(e){console.log(e)}))};function N(e,t){t.textContent=e?"Сохранение...":"Сохранить"}A.addEventListener("submit",(function(n){n.preventDefault();var r,o,c=n.srcElement.querySelector(".popup__button");N(!0,c),(r=w.value,o=U.value,fetch("".concat(e.baseUrl,"/users/me "),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){q.textContent=e.name,E.textContent=e.about,a(g),A.reset()})).catch((function(e){console.log(e)})).finally((function(){N(!1,c)}))})),j.addEventListener("submit",(function(n){n.preventDefault();var c,u,i={name:O.value,link:P.value,likes:[]},l=n.srcElement.querySelector(".popup__button");N(!0,l),(c=i.name,u=i.link,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:c,link:u})}).then(t)).then((function(e){var t=r(e,M,o,I,y);v.prepend(t),a(C),j.reset()})).catch((function(e){console.log(e)})).finally((function(){N(!1,l)}))})),k.addEventListener("submit",(function(n){n.preventDefault();var r,o=n.srcElement.querySelector(".popup__button");N(!0,o),(r=x.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){h.style.backgroundImage="url('".concat(e.avatar,"')"),a(L),k.reset()})).catch((function(e){console.log(e)})).finally((function(){N(!1,o)}))})),H=m,Array.from(document.querySelectorAll(H.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t,n){var r=Array.from(e.querySelectorAll(t)),o=e.querySelector(n.submitButtonSelector);l(r,o,n),r.forEach((function(t){t.addEventListener("input",(function(){s(e,t,n),l(r,o,n)}))}))}(e,H.inputSelector,H)}))})();