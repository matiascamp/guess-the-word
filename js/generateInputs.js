import validateInput from "./validateInput.js"
import { gameState } from "./InitialCharge.js"

export default function generateInputs() {
    const splittedWord = gameState.actualWord.split('')
    const inputContainer = document.querySelector('.inputs-container')
    inputContainer.innerHTML = ''
    splittedWord.forEach((_, index) => {
        const input = document.createElement('input');
        input.setAttribute('maxlength', '1');
        input.disabled = index !== 0;
        input.addEventListener('input', () => validateInput(input, index));
        inputContainer.appendChild(input);
    });
}
