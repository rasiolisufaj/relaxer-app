const containerEl = document.getElementById("container");
const textEl = document.getElementById("text");

let totalTime = 7500;
let breatheTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5;

breatheRelaxer();

function breatheRelaxer() {
  textEl.innerText = "Breathe In!";
  containerEl.classList.remove("shrink");
  containerEl.classList.add("grow");

  setTimeout(() => {
    textEl.innerText = "Hold";

    setTimeout(() => {
      textEl.innerText = "Breathe Out!";
      containerEl.classList.remove("grow");
      containerEl.classList.add("shrink");
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheRelaxer, totalTime);
