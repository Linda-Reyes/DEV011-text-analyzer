import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector('textarea[placeholder="Comienza a escribir un texto aqui..."]');

//let WordCount = analyzer.getWordCount(textarea.value)
textarea.addEventListener("input",(e)=>{
    console.log(e.target.value) 
})