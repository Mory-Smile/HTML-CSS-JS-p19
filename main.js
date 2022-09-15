let hourEl = document.querySelector(".arrows .hour");
let minuteEl = document.querySelector(".arrows .minute");
let secondEl = document.querySelector(".arrows .second");

function updateClock() {
  let currentDate = new Date();
  setTimeout(updateClock, 1000);
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let second = currentDate.getSeconds();
  let hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  let minuteDeg = (minute / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  let secondDeg = (second / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

// updateClock();

setInterval(updateClock, 1000);
