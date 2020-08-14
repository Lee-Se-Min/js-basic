const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  const userName = input.value;
  event.preventDefault();
  paintGreeting(userName);
  saveName(userName);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greeting.innerText = `I believe in you, ${text}`;
  greeting.classList.add(SHOWING_CN);
  form.classList.remove(SHOWING_CN);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // not has user
    askForName();
  } else {
    // has user
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
