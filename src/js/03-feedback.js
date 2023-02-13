const throttle = require('lodash.throttle');
const mailEl = document.querySelector('input[type="email"]');
const textAreaEl = document.querySelector('textarea[name="message"]');
const formEl = document.querySelector('form.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
let storedMail;
let storedMessage;
const data = {
  email: '',
  message: '',
};

setData();

formEl.addEventListener(
  'input',
  throttle(function () {
    data.email = mailEl.value;
    data.message = textAreaEl.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  }, 500)
);

formEl.addEventListener('submit', event => submitData(event));

function setData() {
  if (JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) === null) {
    storedMail = data.email;
    storedMessage = data.message;
  } else {
    storedMail = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
    storedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;
    mailEl.value = storedMail;
    textAreaEl.value = storedMessage;
    data.email = storedMail;
    data.message = storedMessage;
  }
}

function submitData(event) {
  event.preventDefault();
  console.log(data);
  data.email = '';
  data.message = '';
  localStorage.clear();
  mailEl.value = '';
  textAreaEl.value = '';
}
