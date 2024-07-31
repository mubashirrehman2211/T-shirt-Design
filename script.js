// VARIABLES

let shirtVariant = document.querySelector(".img");
let textarea = document.getElementById("inputText");
let textOnShirt = document.getElementById("textOnShirt");
let textColor = document.getElementById("textColor");
let textBox = document.querySelector(".textBox");
let counter = document.getElementById("counter");

// TOGGLE SHIRT VARIANT

// BLACK SHIRT

function toggleShirt1() {
  shirtVariant.style.backgroundImage = "url(./black.png)";
}

// GREEN SHIRT

function toggleShirt2() {
  shirtVariant.style.backgroundImage = "url(./green.png)";
}

// GRAY SHIRT

function toggleShirt3() {
  shirtVariant.style.backgroundImage = "url(./gray.png)";
}

// PURPLE SHIRT

function toggleShirt4() {
  shirtVariant.style.backgroundImage = "url(./purple.png)";
}

// YELLOW SHIRT

function toggleShirt5() {
  shirtVariant.style.backgroundImage = "url(./yellow.png)";
}

// TEXT ON SHIRT

function enterText() {
  textOnShirt.innerHTML = textarea.value;
}

//CHANGE TEXT COLOR

function changeColor() {
  textOnShirt.style.color = textColor.value;
}

// TEXT BOLD

function textBold() {
  textOnShirt.style.fontWeight = "bold";
}

// TEXT ITALIC

function textItalic() {
  textOnShirt.style.fontStyle = "italic";
}

// TEXT ALIGN (LEFT, CENTER, RIGHT)

function alignLeft() {
  textOnShirt.style.textAlign = "left";
}

function alignCenter() {
  textOnShirt.style.textAlign = "center";
}

function alignRight() {
  textOnShirt.style.textAlign = "right";
}

// INCREASE AND DECREASE FONT SIZE

function changeSize(value) {
  let style = window
    .getComputedStyle(textOnShirt, null)
    .getPropertyValue("font-size");
  let fontSize = parseFloat(style);
  let valueTobeDisplayed;

  if (value == "plus") {
    textOnShirt.style.fontSize = fontSize + 1 + "px";
    valueTobeDisplayed = fontSize + 1;
  }

  if (value == "minus") {
    textOnShirt.style.fontSize = fontSize - 1 + "px";
    valueTobeDisplayed = fontSize - 1;
  }

  if (value == "counter-input") {
    let size = document.getElementById("counter-input").value;
    let fu = parseFloat(size);
    textOnShirt.style.fontSize = fu + "px";
    valueTobeDisplayed = fu;
  }
  console.log("object");
  document.getElementById("counter-input").value = valueTobeDisplayed;
}
