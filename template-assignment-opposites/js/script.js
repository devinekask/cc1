function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  handleKeyPress(); // DO NOT REMOVE THIS FUNCTION CALL
}

// Use the functions below to display the four different scenes
function displayChoas() {}

function displayOrder() {}

function displayDark() {}

function displayLight() {}

// DO NOT MODIFY THE CODE BELOW
function handleKeyPress() {
  if (keyIsPressed) {
    if (key == "c") {
      displayChoas();
    } else if (key == "v") {
      displayOrder();
    } else if (key == "b") {
      displayDark();
    } else if (key == "n") {
      displayLight();
    }
  }
}
// DO NOT MODIFY THE CODE ABOVE
