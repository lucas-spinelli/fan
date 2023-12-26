let fanOn = true;
let animationSpeed = 2; // Velocidad de la animación en segundos

function toggleFan() {
  fanOn = !fanOn;
  const fan = document.querySelector('.fan');

  if (fanOn) {
    fan.style.animation = `rotate-fan ${animationSpeed}s infinite linear`;
  } else {
    fan.style.animation = 'none'; // Detener la animación instantáneamente
  }
}
