import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector('textarea[placeholder="Comienza a escribir un texto aqui..."]');
const wordCount = document.querySelector('li[data-testing="word-count"]') /* Hago referencia al elemento de HTML, paramanipularlo desde JS*/
const characterCount = document.querySelector('li[data-testing="character-count"]')
const characterNoSpacesCount = document.querySelector('li[data-testing="character-no-spaces-count"]')
const numberCount = document.querySelector('li[data-testing="number-count"]')
const numberSumTotal = document.querySelector('li[data-testing="number-sum"]')
const wordLengthAverage = document.querySelector('li[data-testing="word-length-average"]')

//let WordCount = analyzer.getWordCount(textarea.value)
textarea.addEventListener("keyup",()=>{
  const words = analyzer.getWordCount(textarea.value)
  wordCount.textContent= words + " Palabras";
  const characters = analyzer.getCharacterCount(textarea.value)
  characterCount.textContent= characters + " Caracteres (con espacios)";
  const characterNoSpaces = analyzer.getCharacterCountExcludingSpaces(textarea.value)
  characterNoSpacesCount.textContent= characterNoSpaces + " Caracteres (sin espacios ni signos)";
  const numbers = analyzer.getNumberCount(textarea.value)
  numberCount.textContent= numbers + " Números";
  const numberSum = analyzer.getNumberSum(textarea.value)
  numberSumTotal.textContent= numberSum + " Suma de números";
  const AverageLength = analyzer.getAverageWordLength(textarea.value)
  wordLengthAverage.textContent= AverageLength + " Longitud media de palabras";
})

const textInput = document.getElementsByName('user-input')[0];
const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
  textInput.value = '';
  wordCount.textContent= '0 Palabras';
  characterCount.textContent= '0 Caracteres (con espacios)';
  characterNoSpacesCount.textContent= '0 Caracteres (sin espacios, ni signos)"';
  numberCount.textContent= '0 Números';
  numberSumTotal.textContent= '0 Suma de números';
  wordLengthAverage.textContent= '0 Longitud media de palabras';
});