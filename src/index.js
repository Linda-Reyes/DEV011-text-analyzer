import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector('textarea[placeholder="Comienza a escribir un texto aqui..."]');
const wordCountBadge = document.querySelector('span[data-testing="word-count-badge"]') /* Hago referencia al elemento de HTML, paramanipularlo desde JS*/
const characterCountBadge = document.querySelector('span[data-testing="character-count-badge"]')
const characterNoSpacesCountBadge = document.querySelector('span[data-testing="character-no-spaces-count-badge"]')
const numberCountBadge = document.querySelector('span[data-testing="number-count"]')

//let WordCount = analyzer.getWordCount(textarea.value)
textarea.addEventListener("input",()=>{
  const words = analyzer.getWordCount(textarea.value)
  wordCountBadge.textContent= words;
  const characters = analyzer.getCharacterCount(textarea.value)
  characterCountBadge.textContent= characters;
  const characterNoSpaces = analyzer.getCharacterCountExcludingSpaces(textarea.value)
  characterNoSpacesCountBadge.textContent= characterNoSpaces
  const numbers = analyzer.getNumberCount(textarea.value)
  numberCountBadge.textContent= numbers
})

const textInput = document.getElementsByName('user-input')[0];
const resetButton = document.querySelector('#reset-button');
const list = document.querySelector('span [data-testing]');

resetButton.addEventListener('click', () => {
  textInput.value = '0';
  wordCountBadge.textContent= '0';
  characterCountBadge.textContent= '0';
  characterNoSpacesCountBadge.textContent= '0';
  numberCountBadge.textContent= '0';
});