japDictionary = {
  こ: ".\\images\\ko.png",
  ん: ".\\images\\n.png",
  に: ".\\images\\ni.png",
  ち: ".\\images\\chi.png",
  は: ".\\images\\wa.png",
};

japPhrases = ["こんにちは", "ありがとう", "おねがいします", "ごめんなさい"];

let counter = 0;

japLetters = document.querySelectorAll("div#jap-phrase > span");

// Add event for clicking each japanese letter
japLetters.forEach((item) => item.addEventListener("click", giveHint));

function giveHint() {
  hintbox = document.getElementById("hint");
  hintbox.src = japDictionary[this.innerText];
  this.classList.add("hover");
}

// add event for submitting, change to new japanese phrase
document.querySelector("form").addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log(`counter: ${counter}`);
  javPhrase = japPhrases[counter];
  counter += 1;

  // remove Jap phrase
  japLetters.forEach((e) => e.parentNode.removeChild(e));

  // add new Jap phrase
  for (i = 0; i < javPhrase.length; i++) {
    letter = document.createElement("span");
    japPhraseDiv = document.querySelector("div#jap-phrase");
    letter.innerHTML = javPhrase[i];
    letter.addEventListener("click", giveHint);
    japPhraseDiv.appendChild(letter);
  }
  japLetters = document.querySelectorAll("div#jap-phrase > span");
}
console.log("hello world");
