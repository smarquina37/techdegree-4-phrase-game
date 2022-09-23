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
        li.classList.add('letters');
        li.classList.add('hide');
      }
      ul.appendChild(li);
    });
  }
  // checkLetter() {

  // }
  // showMatchedLetter() {

  // }
}