import '../sass/main.scss';
import { save, load } from './localStorageService';
import _ from 'lodash';

const FORM_USER_DATA = 'feedback-form-state';

const formRef = document.querySelector('form.feedback-form');
populateFormInputs(formRef);

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', _.throttle(onInputForm, 500));

function onInputForm(e) {
  const result = getUserInput(formRef);
  save(FORM_USER_DATA, result);
}

function onFormSubmit(e) {
  e.preventDefault();
  const result = getUserInput(formRef);
  e.currentTarget.reset();
  localStorage.removeItem(FORM_USER_DATA);
  console.log('Send form data :', result);
}

function getUserInput(formRef) {
  const dataForm = new FormData(formRef);
  const result = {};
  dataForm.forEach((value, name) => (result[name] = value));
  return result;
}

function populateFormInputs(form) {
  const userData = load(FORM_USER_DATA);

  if (!userData) return;

  Object.entries(userData).forEach(([key, value]) => {
    form[key].value = value;
  });
}
