const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function timeFormat(time) {
  if (time < 10) return `0${time}`;
  else return time;
}

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${timeFormat(hours)} : ${timeFormat(
    minutes
  )}  ${timeFormat(seconds)}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
