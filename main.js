japDictionary = {
  こ: "ko",
  ん: "n",
  に: "ni",
  ち: "chi",
  は: "wa",
};

japLetters = document.querySelectorAll("div#jap-phrase > span");

console.log(japLetters);

japLetters.forEach((item) => item.addEventListener("click", giveHint));

function giveHint() {
  hintbox = document.getElementById("hint");
  hintbox.innerText = japDictionary[this.innerText];
}

console.log("hello world");
