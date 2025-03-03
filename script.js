// generate letter to array ;
let letters = "abcdefghijklmnopqrstuvwxyz";
let arrayrLetter = Array.from(letters);
const game = document.querySelector(".game");

// create letter in web page ;
const letterZone = document.createElement("div");
letterZone.classList.add("letter-zone");
arrayrLetter.forEach((item) => {
  let span = document.createElement("span");
  span.innerText = item;
  span.classList.add("letter-box");
  letterZone.append(span);
});
game.append(letterZone);

const words = {
  programming: ["php", "laravel", "java script", "python", "go", "mysql"],
  people: ["albert einstein", "alexander", "cleopatra"],
  movies: ["prestige", "inception", "parasite", "interstellar"],
  countries: ["syria", "iraq", "eygpt", "qatar", "lebanon"]
};
const allKeys = Object.keys(words);
const randomKey = Math.floor(Math.random() * allKeys.length);
console.log(randomKey);
const randomValueOfKey = allKeys[randomKey];
console.log(randomValueOfKey);
const randomArrayFromKey = words[randomValueOfKey];
console.log(randomArrayFromKey);
const randomNumberInKey = Math.floor(Math.random() * randomArrayFromKey.length);
console.log(randomNumberInKey);
const finalValue = randomArrayFromKey[randomNumberInKey];
console.log(finalValue);

// 
const paragraph = document.querySelector("p");
paragraph.innerHTML = `word from gategory <i>${randomValueOfKey}</i>`;

//
const letterGuess = document.createElement("div");
letterGuess.classList.add("letter-guess");
let finalValueArray = Array.from(finalValue);

finalValueArray.forEach((item) => {
  let letterGuessInput = document.createElement("input");
  letterGuessInput.maxLength = 1;
  if (item == " ") {
    letterGuessInput.classList.add("with-space");
  }
  letterGuess.append(letterGuessInput);
  game.append(letterGuess);
});

const drow = document.querySelector(".drow");

let numberOfWrong = 0;
let numberOfCorrect = 0;
letterZone.addEventListener("click", (eo) => {
  let status = false;

  if (eo.target.classList == "letter-box") {

    eo.target.style.pointerEvents = "none";
    eo.target.style.opacity = "0.5";
    eo.target.style.backgroundColor = "red";
    finalValueArray.forEach((item, index) => {
      if (eo.target.innerText.toUpperCase() == item.toUpperCase()) {
        status = true;
        numberOfCorrect++;
        eo.target.style.backgroundColor = "green";
        letterGuess.childNodes[index].value = item;
      }
    });
    if(numberOfCorrect == finalValueArray.length){
      
      winGame();
    }
    if (!status) {
      numberOfWrong++;
      drow.classList.add(`wrong-${numberOfWrong}`);
      if (numberOfWrong == 8) {
        letterZone.style.pointerEvents = "none";
        setTimeout(finishGame,2000);
      }
    }
  }
});
let finishGame = () => {
  let div = document.createElement("div");
  div.classList.add("finish");
  let p = document.createElement("p");
  p.innerHTML = `game over , the word is <span> ${finalValue} </span>`
  div.append(p);
  document.body.prepend(div);
  setTimeout(() => {
    location.reload();
  }, 4000);
};
let winGame = () => {
  let div = document.createElement("div");
  div.classList.add("win");
  let p = document.createElement("p");
  p.innerHTML = `congratulation you win , the word is <span> ${finalValue} </span> <br></br> number of wrong answers : ${numberOfWrong} <i class="fa-regular fa-face-grin-hearts"></i>`
  div.append(p);
  document.body.prepend(div);
  setTimeout(() => {
    location.reload();
  }, 5000);
};
