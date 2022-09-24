const resetBtn = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');
const keyBtn = documment.querySelectorAll('.key');

resetBtn.addEventListener('click', (e) => {
  const game = new Game();
  game.startGame();
})

for (let i = 0; i < GamepadButton.length; i++) {
  button[i].id = button[i].innerHTML;
}
// https://dmitripavlutin.com/javascript-event-delegation/
qwerty.addEventListener('click', (e) => {
  if (e.target.className === 'key'){
    game.handleInteraction(e.innerHTML);
  }
})


