const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //Separamos las parablas teniendo en cuenta el espacio
    const wordsCount= text.split(" ");
    if (wordsCount[wordsCount.length - 1] === ''){
      return wordsCount.length - 1
    }else {
      return wordsCount.length
    }
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const CharacterCount= text.length 
    return CharacterCount
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //Eliminamos los espacios y signos de puntuación utilizando una expresión regular
    const cleanedText = text.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '');
    const characterCount = cleanedText.length;
    return characterCount;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordsCount= text.split(" ");
    const totalWordlength = wordsCount.reduce((acc, word) => acc + word.length, 0);
    const averageWordLength = totalWordlength / wordsCount.length;
    return Number(averageWordLength.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const reGex = /\b\d+(\.\d+)?\b/g
    const numberCount = text.match(reGex)
    if (numberCount) {
      return numberCount.length
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const reGex = /\b\d+(\.\d+)?\b/g
    const numbersArray = text.match(reGex)
    //console.log(numbersArray)
    if(numbersArray){
      let numberSum = 0;
      for(let i = 0; i < numbersArray.length; i++){
        const number = parseFloat(numbersArray[i]);
        if (!isNaN (number)){
          numberSum += number;
        }
      }
      return isNaN (numberSum) ? 0: numberSum;
    }else{
      return 0
    }
  },
};
export default analyzer;