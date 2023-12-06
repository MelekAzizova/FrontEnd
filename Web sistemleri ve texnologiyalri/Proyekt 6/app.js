const buttonSet = document.getElementById("buttonSet");
const buttonClick = document.getElementById("buttonClick");
const highIcon = document.getElementById("highIcon");
const lowIcon = document.getElementById("lowIcon");
const sliderEl = document.getElementById("slider");
const background = document.getElementById("background");
const bgColors = ["#372f3a", "#464459", "#545e72", "#5d7680", "#6a9395"];
const slider = { min: 0, max: 100, speedX: 0, x: 80, gravity: 0.03, set: null };

buttonClick.addEventListener(
  "keydown",
  (e) => [32, 13].includes(e.keyCode) && buttonClick.classList.add("active")
);
buttonClick.addEventListener("keyup", () =>
  buttonClick.classList.remove("active")
);

const onClick = () => {
  if (slider.set !== null) return;
  slider.x += 10;
  slider.speedX = slider.gravity * 2;
};

const toggleSetValue = () => {
  const isSlider = slider.set !== null;
  slider.set = isSlider ? null : slider.x;
  buttonSet.firstElementChild.classList[isSlider ? "remove" : "add"]("d-none");
  buttonSet.lastElementChild.classList[isSlider ? "add" : "remove"]("d-none");
};

const animate = () => {
  if (slider.set !== null) return requestAnimationFrame(animate);
  slider.speedX += slider.gravity;
  slider.x -= slider.speedX + slider.speedX;
  slider.x = Math.round(Math.min(Math.max(slider.x, slider.min), slider.max));
  if (slider.x === 0) this.speedX = 0;
  sliderEl.value = slider.x;
  highIcon.style.color = `hsl(163, 23%, ${Math.min(
    (slider.x * 58) / 100 + 25,
    58
  )}%)`;
  background.style.background = bgColors[Math.round((slider.x * 5) / 100)];
  requestAnimationFrame(animate);
};

animate();
