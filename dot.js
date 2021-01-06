const dot = document.querySelector(".dot");
const move = 30;

const handleMotion = e => {
  const x = Math.round(e.accelerationIncludingGravity.x) * move;
  const y = Math.round(e.accelerationIncludingGravity.y) * move;
  const z = Math.round(e.accelerationIncludingGravity.z) * move;

  dot.style.transform = `translate3d(${-x}px, ${y}px, ${z}px)`;

}

window.addEventListener("devicemotion", handleMotion, true);
