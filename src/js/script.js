let colorTextOne = document.createElement("p");
let colorTextTwo = document.createElement("p");
let colorButton = document.createElement("button");
colorTextOne.textContent = "Move mouse to color the screen!";
let colorText = document.querySelector(".colorText");
colorText.appendChild(colorTextOne);
colorText.appendChild(colorTextTwo);
colorText.appendChild(colorButton);

function startColor() {
  colorButton.removeEventListener("click", startColor);
  let html = document.querySelector("html");
  let clickNo = 120;
  html.addEventListener("mousemove", updateColor);
  html.addEventListener("mousedown", plusClick);

  function updateColor(e) {
    let positionX = Math.round((e.clientX / window.screen.width) * 160);
    let positionY = Math.round((e.clientY / window.screen.width) * 255);
    let colorOne =
      "rgba(" + positionY + "," + positionX + "," + clickNo + ",1)";
    let colorTwo =
      "rgba(" + positionX + "," + positionY + "," + clickNo + ",1) ";

    document.querySelector("body").style.background =
      "linear-gradient(45deg, " + colorOne + "  0%, " + colorTwo + " 100% )";
    document.querySelector("h1").style.transform =
      "skewX(" +
      Math.round((e.clientX / window.screen.width) * 100 - 50) * 0.1 +
      "deg)";

    colorTextOne.textContent = colorOne;
    colorTextTwo.textContent = colorTwo;
  }
  function plusClick(e) {
    clickNo = Math.floor(Math.random() * 255);
  }

  colorButton.textContent = "Dude too much colors";
  colorButton.addEventListener("click", stopColor);
  function stopColor() {
    let html = document.querySelector("html");
    let body = document.querySelector("body");
    html.removeEventListener("mousemove", updateColor);
    html.removeEventListener("click", plusClick);
    html.style.background = `background: linear-gradient(
      45deg,
      rgb(81, 12, 217) 0%,
      rgb(12, 81, 217) 100%
    );`;
    colorButton.textContent = "I want some fancy colors!";
    colorButton.removeEventListener("click", stopColor);
    colorButton.addEventListener("click", startColor);
  }
}

startColor();
