function setup() {
  createCanvas(400, 400);
  sayHello();
}

function draw() {
  sayHello();
  drawFourSquares();
  drawThreeCircles();
}

function sayHello() {
  console.log("Hello Devine");
}

function drawFourSquares() {
  rect(50, 200, 50, 50);
  rect(150, 200, 50, 50);
  rect(250, 200, 50, 50);
  rect(350, 200, 50, 50);
}

function drawThreeCircles() {
  ellipse(75, 300, 50, 50);
  ellipse(175, 300, 50, 50);
  ellipse(275, 300, 50, 50);
}
