class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      {phrase: 'work hard dream big'},
      {phrase: 'success looks good on you'},
      {phrase: 'you can do hard things'},
      {phrase: 'no pressure no diamonds'},
      {phrase: 'Tap into your magic'}
  ];
    this.activePhrase = null;
  }

  /*
  * Starts game
  */
  // startGame() {
  //   getRandomPhrase();
  //   this.activePhrase.addPhraseToDisplay();
  // }

  /** 
  * Randomly retrieves a phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */

  getRandomPhrase() {
    let randomIndex = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[randomIndex];
  }

  /*
  * Checks to see if button clicked by the player matches letter in the phrase
  */
//  handleInteraction() {

//  }
  
}