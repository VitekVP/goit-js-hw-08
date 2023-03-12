import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');

const inputData = {};
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(handleInputForm, 500));
formEl.addEventListener('submit', handleSubmitForm);

fillFormFields();

function fillFormFields() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveData) {
    const inputEl = document.querySelector('input');
    const textareaEL = document.querySelector('textarea');

    inputEl.value = saveData.email ? saveData.email : '';

    textareaEL.value = saveData.message ? saveData.message : '';
  }
}

function handleInputForm(event) {
  inputData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
}

function handleSubmitForm(event) {
  event.preventDefault();

  console.log(inputData);

  event.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}
