import randomWord from "./randomWord.js";
import { gameState, mistakes, tries } from "./InitialCharge.js";
import updateCircles from "./circles-tries.js";

export default function validateInput(input, index) {

    const letter = gameState.actualWord[index];


    if (input.value.toLowerCase() === letter.toLowerCase()) {

        input.classList.add('correct');

        if (index < gameState.actualWord.length - 1) {
            const nextInput = input.nextElementSibling;
            nextInput.disabled = false;
            nextInput.focus();
        }

        if (index === gameState.actualWord.length - 1) {
            const notDisplay = document.querySelector('.playing')
            const display = document.querySelector('.success')

            notDisplay.style.display = "none"
            display.style.display = "flex"

        }
    }



    if (input.value.toLowerCase() !== letter.toLowerCase() && input.value !== '') {
        gameState.countError = gameState.countError + 1
        updateCircles()

        gameState.badLetter += input.value + ','

        mistakes.innerHTML = `Mistakes:${gameState.badLetter}`
        tries.innerHTML = `Tries(${gameState.countError}/5):`
        input.classList.remove('correct');

        if (gameState.countError > 4) {
            gameState.countError = 0
            gameState.badLetter = ''
            tries.innerHTML = `Tries(0/5):`
            mistakes.innerHTML = 'Mistakes:'
            randomWord();
            updateCircles()
        }
    }
};
