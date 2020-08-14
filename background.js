const body = document.querySelector("body");

const IMG_NUMBER = 5;

function printBg(num) {
  const image = new Image();
  image.src = `images/${num + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  printBg(randomNumber);
}

init();
