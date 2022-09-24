class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('work hard dream big'),
      new Phrase('you can and you will'),
      new Phrase('you can do hard things'),
      new Phrase('no pressure no diamonds'),
      new Phrase('Tap into your magic')
  ];
    this.activePhrase = null;
  };

  /** 
  * Randomly retrieves a phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */

  getRandomPhrase() {
    let randomIndex = Math.floor(Math.random() * this.phrases.length);
      const randomPhrase = this.phrases[randomIndex];
      return randomPhrase;
  }

    /*
  * Starts game by selecting a random phrasse and displaying it
  */
  startGame() {
    document.getElementById('overlay').style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /*
  * Checks to see if button clicked by the player matches letter in the phrase
  */
 handleInteraction(e) {

 }


/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't won
*/
// checkForWin() {
  
// };

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
// removeLife() {
//   const image = document.querySelector('.tries');
//   const source = image.src = image.src.replace("images/livesHeart.png", "images/lostHeart.png");
// };

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
// gameOver(gameWon) {

// };
}