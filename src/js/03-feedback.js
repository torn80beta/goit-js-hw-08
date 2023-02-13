mailEl = document.querySelector('input[type="email"]');
textAreaEl = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let data = {
  email: mailEl.value,
  message: textAreaEl.value,
};

mailEl.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
textAreaEl.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;

mailEl.addEventListener('input', () => {
  data.email = mailEl.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  console.log(LOCALSTORAGE_KEY.email);
});

textAreaEl.addEventListener('input', () => {
  data.message = textAreaEl.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  console.log(LOCALSTORAGE_KEY.message);
});
