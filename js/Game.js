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

 //1. Disable the selected letter’s onscreen keyboard button.
 //2. If the phrase does not include the guessed letter, add the `wrong` CSS class 
 //and call the `removeLife()` method.
 //3. If the phrase includes the guessed letter, add the `chosen` CSS class to the selected
 // letter's keyboard button, call the `showMatchedLetter()` method on the phrase, and
 // then call the `checkForWin()` method. If the player has won the game, also call the
 // `gameOver()` method.
 handleInteraction(button) {
  button.disabled = true;
  if (!this.activePhrase.checkLetter(button.innerHTML)) {
   button.classList.add('wrong');
   this.removeLife();
  } else {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(button.innerHTML);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
  }
  }

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't won
*/

// Use a DOM selector to target all the 'hide' elements   
// Check the length of the collection that DOM selector returns  
// If the length is zero, then there are no more letters with the className 'hide', 
// so all the letters should be displayed, and the user should have won the game.
checkForWin() {
  const hiddenChar = document.getElementsByClassName('hide');
  const charLength = hiddenChar.length;
  if (charLength === 0) {
    return true;
  } else {
    return false;
  }
};

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
  this.missed += 1;
  
  const lives = document.querySelectorAll('.tries'); 
  
  for (let i = 0; i < lives.length; i++) {
    const image = lives[i].firstChild;
    if (image.src.includes('images/liveHeart.png')) {
      return image.src = 'images/lostHeart.png';
    }
    if (this.missed === 5) {
      this.gameOver();
    }
  }
};

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
  gameOver(gameWon) {
    const startOverlay = document.getElementById('overlay');
    const gameOverMsg = document.getElementById('game-over-message');
  // display original start screen overlay
    startOverlay.style.display = 'flex';
  //updates theoverlay h1 element with a friendly win or loss message and replaces the overlay’s start CSS class with either the win or lose CSS class.
  if (gameWon) {
    // startOverlay.classList.remove('class');  
    startOverlay.className = 'win';
    gameOverMsg.innerHTML = `Congratulations, you won!`
    } else if (!gameWon) {
      // startOverlay.classList.remove('class');
      startOverlay.className ='lose';
      gameOverMsg.innerHTML = `Sorry, you lost!`
    }
  }
  
  resetGame() {
    //Remove all `li` elements from the Phrase `ul` element.
    const clearUl = document.querySelector('ul');
    clearUl.innerHTML = '';

    //Enable all of the onscreen keyboard buttons 
    //and update each to use the `key` CSS class, and not use the `chosen` or `wrong` CSS classes.
    const keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i++) {
      keys[i].classList.remove('wrong');
      keys[i].classList.remove('chosen');
      keys[i].classList.remove('show');
      keys[i].classList.add('key');
      keys[i].disabled = false
    }
    
    // Reset all of the heart images (i.e. the player's lives) in the scoreboard 
    //to display the `liveHeart.png` image.
    const lives = document.querySelectorAll('.tries');
    for (let i = 0; i < lives.length; i++) {
    const image = lives[i].firstChild;
    image.src = 'images/liveHeart.png';
    }
    
    this.startGame();
  }
}