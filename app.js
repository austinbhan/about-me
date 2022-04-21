// grab DOM elements
const whoAmIButton = document.getElementById('whoAmIButton');
const whatILikeButton = document.getElementById('whatILikeButton');
const animalButton = document.getElementById('animalButton');

const whoAmIDiv = document.getElementById('whoAmIDiv');
const whatILikeDiv = document.getElementById('whatILikeDiv');
const gooseDiv = document.getElementById('untitledGoose');
// set event listeners 

whoAmIButton.addEventListener('click', () => {
    whoAmIDiv.classList.remove('hidden');
});

whatILikeButton.addEventListener('click', () => {
    whatILikeDiv.classList.remove('hidden');
});

animalButton.addEventListener('click', () => {
    gooseDiv.classList.toggle('hidden');
});

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
