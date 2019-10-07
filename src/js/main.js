"use strict";

import browserUpdate from 'browser-update';
browserUpdate({
  required: {e:11,f:-6,o:-6,s:-2,c:-6},
  insecure:true,
  unsupported:true,
  reminder:0,
  reminderClosed: 1
});

const editorArea = document.querySelector('.editor__area--js');
const saveButton = document.querySelector('.editor__button--save-js');
const loadButton = document.querySelector('.editor__button--load-js');

saveButton.addEventListener('click', () => {
  localStorage.setItem('textinput' , editorArea.value);
});

loadButton.addEventListener('click', () => {
  editorArea.value = localStorage.getItem('textinput');
});
