// grab DOM elements
const button = document.getElementById('button');
const nameEl = document.getElementById('name');
const sectionEl = document.getElementById('my-info');
const animalDiv = document.getElementById('animal-div');
console.log('animalDiv', animalDiv);

const animalButton = document.getElementById('animal-button');
// set event listeners 
button.addEventListener('click', () => {
    if (nameEl.textContent === '____') {
        nameEl.textContent = 'Austin';
    } else {
        nameEl.textContent = '_____';
    }
    nameEl.textContent = 'Austin';
    sectionEl.classList.toggle('my-style');
});

animalButton.addEventListener('click', () => {
    animalDiv.classList.remove('hidden');
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

