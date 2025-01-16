import randomWord from "./randomWord.js";
import { gameState, mistakes, tries } from "./InitialCharge.js";
import updateCircles from "./circles-tries.js";

export function Reset() {
    const buttonReset = document.querySelector('.reset')

    buttonReset.addEventListener('click', () => {
        gameState.countError = 0
        gameState.badLetter = ''
        tries.innerHTML = `Tries (0/5):`
        mistakes.innerHTML = 'Mistakes:'
        const inputs = document.querySelectorAll('input')
        inputs.forEach((input) => {
            input.value = ''
        })
        updateCircles()

    });
}

export function Random() {
    const buttonRandom = document.querySelector('.random')

    buttonRandom.addEventListener('click', () => {
        gameState.countError = 0
        gameState.badLetter = ''
        tries.innerHTML = `Tries (0/5):`
        mistakes.innerHTML = 'Mistakes:'
        updateCircles()
        randomWord()
    })
}

export function Return() {
    const buttonReturn = document.querySelector('.return')
    const notDisplay = document.querySelector('.playing')
    const display = document.querySelector('.success')
    buttonReturn.addEventListener('click', () => {
        gameState.countError = 0
        gameState.badLetter = ''
        tries.innerHTML = `Tries (0/5):`
        mistakes.innerHTML = 'Mistakes:'
        notDisplay.style.display = "flex"
        display.style.display = "none"
        randomWord()
    })
}

