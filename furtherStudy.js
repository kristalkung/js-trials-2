"use strict";


function wordsInCommon(words1, words2) {
  
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word of words1Set) {
    if(words2Set.has(word)) {
      result.add(word);
    }
  }
  return Array(result);
}


// function kidsGame(names) {
  
//   let output = [names.shift()];

//   const firstLetterToWords = {};

//   for(const name of names) {
//     if(!firstLetterToWords[name[0]]) {
//       firstLetterToWords[name[0]] = [name];
//     }
//     else {
//       firstLetterToWords[name[0]].push(name);
//     }

//   while (true) {
//     const lastWord = output[output.length - 1];
//     const lastWordChar = lastWord[lastWord.length - 1];

//     if(firstLetterToWords[lastWordChar] === undefined || firstLetterToWords[lastWordChar].length === 0) {
//       break;
//     }
//     let word = firstLetterToWords[lastWordChar].shift();
//     output.push(word);
//   }

//   return output;

//   }
// }


function kidsGame(names) {
  const output = [names.shift()];

  const firstLetterToWords = {};

  for (const name of names) {
    const firstChar = name[0];
    if (!firstLetterToWords[firstChar]) {
      firstLetterToWords[firstChar] = [name];
    } else {
      firstLetterToWords[firstChar] += [name];
    }
  }

  while (true) {
    const lastWord = output[output.length - 1];
    const lastWordChar = lastWord[lastWord.length - 1];

    if (firstLetterToWords[lastWordChar] === undefined ||
        firstLetterToWords[lastWordChar].length === 0) {
      break;
    }
    else {
      const nextWord = firstLetterToWords[lastWordChar].shift();
      output.push(nextWord);
    }
  }
  return output;
}
