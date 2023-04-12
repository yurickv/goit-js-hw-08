import throttle from 'lodash.throttle';
import { addStorage, onSubmitClear, reloadForm } from './04-func';

const inputForm = document.querySelector('.feedback-form')

reloadForm();

inputForm.addEventListener('input', throttle(addStorage, 500));
inputForm.addEventListener('submit', onSubmitClear);


