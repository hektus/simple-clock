const clock = () => {
  const secondHand = document.querySelector(".second");
  const minuteHand = document.querySelector(".minute");
  const hourHand = document.querySelector(".hour");
  const digital = document.querySelector(".digital-time");
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  console.log(hours, minutes, seconds);
  secondHand.style.transform = `rotate(${seconds * 6}deg) translateX(-50%)`;
  minuteHand.style.transform = `rotate(${minutes * 6}deg) translateX(-50%)`;
  hourHand.style.transform = `rotate(${hours * 30}deg) translateX(-50%)`;

  digital.textContent = `${
    hours < 10 ? "0" + time.getHours() : time.getHours()
  } : ${minutes < 10 ? "0" + time.getMinutes() : time.getMinutes()} : ${
    seconds < 10 ? "0" + time.getSeconds() : time.getSeconds()
  }`;
};

setInterval(clock, 1000);
