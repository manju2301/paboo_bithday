const countdown = document.getElementById("countdown");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();
const birthdayTime = new Date(`July 19 ${currentYear} 00:00:00`);
year.innerText = `July 19 ${currentYear}`;

// update countdown
function updateCountdown() {
  const currentTime = new Date();
  const diff = birthdayTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  //add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 9 ? "0" + h : h;
  minutes.innerHTML = m < 9 ? "0" + m : m;
  seconds.innerHTML = s < 9 ? "0" + s : s;
}

//show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

//run every second
setInterval(updateCountdown, 1000);
