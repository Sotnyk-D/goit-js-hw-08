import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(formRead, 500));
form.addEventListener('submit', formSubmit);

reloadForm();

function reloadForm() {
  const storage = localStorage.getItem(STORAGE_KEY);
  if (storage) {
    const parseStorage = JSON.parse(storage);
    email.value = parseStorage.email;
    message.value = parseStorage.message;
  }
}

function formRead(evt) {
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function formSubmit(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
