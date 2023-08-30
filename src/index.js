import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector('textarea[placeholder="Comienza a escribir un texto aqui..."]');
const wordCountBadge = document.querySelector('span[data-testing="word-count-badge"]') /* Hago referencia al elemento de HTML, paramanipularlo desde JS*/
const characterCountBadge = document.querySelector('span[data-testing="character-count-badge"]')
const characterNoSpacesCountBadge = document.querySelector('span[data-testing="character-no-spaces-count-badge"]')

//let WordCount = analyzer.getWordCount(textarea.value)
textarea.addEventListener("input",(e)=>{
    //console.log(e.target.value) 
    let words = analyzer.getWordCount(textarea.value)
    wordCountBadge.textContent= words;
    let characters = analyzer.getCharacterCount(textarea.value)
    characterCountBadge.textContent= characters;
    let characterNoSpaces = analyzer.getCharacterCountExcludingSpaces(textarea.value)
    characterNoSpacesCountBadge.textContent= characterNoSpaces
})

