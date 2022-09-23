const resetBtn = document.getElementById('btn__reset');

resetBtn.addEventListener('click', (e) => {
  const game = new Game();
  game.startGame();
})
