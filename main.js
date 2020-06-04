function setDate() {
  const secHand = document.querySelector(".secHand");
  const minHand = document.querySelector(".minHand");
  const hourHand = document.querySelector(".hourHand");

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  if (secondsDegrees == 90) {
    secHand.classList.add("no-transition");
  } else {
    secHand.classList.remove("no-transition");
  }
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minsDegrees = (minutes / 60) * 360 + 90;
  if (minsDegrees == 90) {
    minHand.classList.add("no-transition");
  } else {
    minHand.classList.remove("no-transition");
  }
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  if (hoursDegrees == 90) {
    hourHand.classList.add("no-transition");
  } else {
    hourHand.classList.remove("no-transition");
  }
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
