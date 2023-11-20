const worms = [];

function setup() {
  createCanvas(400, 400);
  background(0);

  for (let i = 0; i < 4; i++) {
    const colour = SquareWorm.getRandomColour();
    const chance = random();

    if (chance < 0.5) {
      worms.push(new SquareWorm(random(width), random(height), 20, colour));
    } else {
      worms.push(new RoundWorm(random(width), random(height), 20, colour));
    }
  }
}

function draw() {
  worms.forEach((element) => element.run());

  if (frameCount > 800) {
    noLoop();
  }
}
