import { Reset, Random, Return } from './buttons.js';
import randomWord from './randomWord.js';

export const words = ["manzana", "banana", "cereza", "durazno", "limón", "naranja", "pera", "uva"];
export const gameState = {
    actualWord: '',
    countError: 0,
    badLetter: ''
}

export const tries = document.querySelector('.tries-counter')

export const mistakes = document.querySelector('.mistakes')

export default function InitialCharge() {
    tries.innerHTML = `Tries(0/5):`

    mistakes.innerHTML = 'Mistakes:'

    Reset()
    Random()
    Return()
    randomWord()
}