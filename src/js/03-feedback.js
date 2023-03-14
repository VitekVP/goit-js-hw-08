import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const textareaEL = document.querySelector('textarea');

const inputData = {};
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(handleInputForm, 500));
formEl.addEventListener('submit', handleSubmitForm);

fillFormFields();

function fillFormFields() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveData) {
    inputEl.value = saveData.email || '';
    textareaEL.value = saveData.message || '';
  }
}

function handleInputForm(event) {
  inputData[event.target.name] = event.target.value;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...inputData,
      email: inputEl.value,
      message: textareaEL.value,
    })
  );
}

function handleSubmitForm(event) {
  event.preventDefault();

  if (inputEl.value === '' || textareaEL.value === '') {
    alert('All fields must be filled !!!');
    return;
  }

  console.log(inputData);
  delete inputData.email;
  delete inputData.message;

  event.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}
