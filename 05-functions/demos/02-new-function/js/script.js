function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  sayHello();
  drawFourSquares();
  drawThreeCircles();
}

function sayHello() {
  const greeting = "Hello";
  console.log(greeting);
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
