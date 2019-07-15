"use strict";

const editorArea = document.querySelector('.editor__area--js');
const saveButton = document.querySelector('.editor__button--save-js');
const loadButton = document.querySelector('.editor__button--load-js');

saveButton.addEventListener('click', (e) => {
  localStorage.setItem('textinput',editorArea.value);
});

loadButton.addEventListener('click', (e) => {
  editorArea.value = localStorage.getItem('textinput');
});
