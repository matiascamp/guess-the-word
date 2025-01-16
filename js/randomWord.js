import generateInputs from "./generateInputs.js";
import disorderElement from "./disorderElement.js";
import { words, gameState } from "./InitialCharge.js";

export default function randomWord() {

    const randomIndex = Math.floor(Math.random() * words.length);

    gameState.actualWord = words[randomIndex]

    const scrambledWord = disorderElement(gameState.actualWord);

    const showWord = document.querySelector('.show-word');

    showWord.innerHTML = scrambledWord;

    generateInputs(gameState.actualWord)
}
