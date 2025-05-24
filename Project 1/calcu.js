let display = document.getElementById("display");
let clickSound = document.getElementById("clickSound");
let themeToggle = document.getElementById("toggleTheme");

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
