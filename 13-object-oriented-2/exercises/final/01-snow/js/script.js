let snowFlakes = [];
let snowYPos = 400;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(10);

  addNewFlakes();
  drawSnow();

  snowFlakes.forEach((element) => element.run());
  snowFlakes = snowFlakes.filter((element) => element.isAlive);
}

function addNewFlakes() {
  for (let i = 0; i < 3; i++) {
    snowFlakes.push(new SnowFlake());
  }
}

function drawSnow() {
  fill(230);
  rect(0, snowYPos, width, height);
  snowYPos -= 0.01;
}
