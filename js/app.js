let game;
const resetBtn = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');
// const keyBtn = document.getElementsByClassName('key');

resetBtn.addEventListener('click', (e) => {
  game = new Game();
  game.startGame();
})

// https://dmitripavlutin.com/javascript-event-delegation/
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
qwerty.addEventListener('click', (e) => {
  if (e.target.className === 'key'){
    game.handleInteraction(e.target);
  }
})

