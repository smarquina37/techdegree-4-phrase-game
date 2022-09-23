class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

/**
* Display phrase on game board
*/
  addPhraseToDisplay() {
    const charArray = this.phrase.split('');

    charArray.forEach(character => {
      const ul = document.querySelector('ul');
      const li = document.createElement('li');
      li.textContent = character;

      if (character === ' ') {
        li.classList.add('space');
      } else {
        li.classList.add('letter');
        li.classList.add('hide');
      }
      ul.appendChild(li);
    });
  }

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(letter) {
  // if (selected letter === this.phrase.includes(letter)) {
  //   showMatchedLetter()?;
 // } else {
    //lose heart/point?
  }

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
// showMatchedLetter(letter) {
  // document.getElementByClassName('letter');
  //li.classList.remove('hide');
  //li.classList.add('show');
  //
// };
};