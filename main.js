japDictionary = {
  こ: ".\\images\\ko.png",
  ん: ".\\images\\n.png",
  に: ".\\images\\ni.png",
  ち: ".\\images\\chi.png",
  は: ".\\images\\wa.png",
};

japLetters = document.querySelectorAll("div#jap-phrase > span");

console.log(japLetters);

japLetters.forEach((item) => item.addEventListener("click", giveHint));

function giveHint() {
  hintbox = document.getElementById("hint");
  hintbox.src = japDictionary[this.innerText];
  this.classList.add("hover");
}

console.log("hello world");
