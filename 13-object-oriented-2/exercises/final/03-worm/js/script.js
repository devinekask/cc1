const worms = [];

function setup() {
  createCanvas(400, 400);
  background(0);

  for (let i = 0; i < 1; i++) {
    worms.push(new Worm(random(width), random(height), 20));
  }
}

function draw() {
  worms.forEach((element) => element.run());
}
