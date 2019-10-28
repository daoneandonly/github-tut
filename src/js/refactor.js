// create button
let colorButton = document.createElement("button");
let colorText = document.querySelector(".colorText");
colorButton.textContent = "Turn colors off";
colorText.appendChild(colorButton);
let clickNo = 120;

// colorButton addEventListener click ->
/// Turn off colors
/// window.localStorage.setItem('color', "false")

function startColor() {
  // set color to true
  window.localStorage.setItem("color", "true");
  // remove eventListener
  colorButton.removeEventListener("click", startColor);
  colorButton.addEventListener("click", stopColor);
  colorButton.textContent = "Turn colors off";
  let html = document.querySelector("html");
  // set eventlisteners to mousemove and mousedown
  html.addEventListener("mousemove", updateColor);
  html.addEventListener("mousedown", plusClick);
}
function updateColor(e) {
  //change colors based on mouse events
  let positionX = Math.round((e.clientX / window.screen.width) * 160);
  let positionY = Math.round((e.clientY / window.screen.width) * 255);
  let colorOne = "rgba(" + positionY + "," + positionX + "," + clickNo + ",1)";
  let colorTwo = "rgba(" + positionX + "," + positionY + "," + clickNo + ",1) ";
  document.querySelector("body").style.background =
    "linear-gradient(45deg, " + colorOne + "  0%, " + colorTwo + " 100% )";
  document.querySelector("h1").style.transform =
    "skewX(" +
    Math.round((e.clientX / window.screen.width) * 100 - 50) * 0.1 +
    "deg)";
}
function plusClick(e) {
  // change 3rd number in RGB to random number
  clickNo = Math.floor(Math.random() * 255);
}
function stopColor() {
  console.log("STOPCOLOR");
  window.localStorage.setItem("color", "false");
  colorButton.removeEventListener("click", stopColor);
  colorButton.addEventListener("click", startColor);

  let html = document.querySelector("html");
  let body = document.querySelector("body");
  // remove click and mouse events
  html.removeEventListener("mousemove", updateColor);
  html.removeEventListener("click", plusClick);
  // set background color
  html.style.background = `background: linear-gradient(
    45deg,
    rgb(81, 12, 217) 0%,
    rgb(12, 81, 217) 100%
  );`;
  // change button
  colorButton.textContent = "Turn colors on";
}

// initial check localStorage
if (window.localStorage.color === "false") {
  stopColor();
  colorButton.addEventListener("click", startColor);
} else {
  startColor();
  colorButton.addEventListener("click", stopColor);
}
