let darkMode = true;
const buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener("click", handleButtonToggleClick);

function handleButtonToggleClick(event) {
  document.documentElement.classList.toggle("light");

  const mode = darkMode ? "light" : "dark";
  event.currentTarget.querySelector(
    "span"
  ).textContent = `${mode} mode activated`;

  darkMode = !darkMode;
}
