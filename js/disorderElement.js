export default function disorderElement(word) {

    const splittedWord = word.split('');

    for (let i = splittedWord.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [splittedWord[i], splittedWord[randomIndex]] = [splittedWord[randomIndex], splittedWord[i]];
    }
  
    return splittedWord.join('');
  };