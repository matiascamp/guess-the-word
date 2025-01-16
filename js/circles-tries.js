import { gameState } from "./InitialCharge";


export default function updateCircles () {
    const selectedCircle = document.querySelectorAll('.circle')
    selectedCircle.forEach((element, index) => {

        element.classList.remove('circle-completed');

        if (index < gameState.countError) {
            element.classList.add('circle-completed');
        }
    })
}