const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //Separamos las parablas teniendo en cuenta el espacio
    const wordsCount= text.split(" ")
    if (wordsCount[wordsCount.length - 1] == ''){
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
  getAverageWordLength: () => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
      },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numberCount = /(\d+(\.\d+)?)/g;
    const decimalnumberCount = text.match(numberCount)
    console.log(decimalnumberCount)
    return decimalnumberCount ? decimalnumberCount.length : 0;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numberSum = " "
  },
  
};

export default analyzer;
