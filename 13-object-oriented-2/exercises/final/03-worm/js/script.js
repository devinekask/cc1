const worms = [];

function setup() {
  createCanvas(400, 400);
  background(0);

  for (let i = 0; i < 4; i++) {
    const colour = getRandomColour();
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

  if (frameCount > 1000) {
    noLoop();
  }
}

function getRandomColour() {
  let colour;

  const chance = random();

  if (chance < 0.25) {
    colour = "#219C90";
  } else if (chance < 0.5) {
    colour = "#E9B824";
  } else if (chance < 0.75) {
    colour = "#EE9322";
  } else {
    colour = "#D83F31";
  }

  return colour;
}
