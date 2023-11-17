const particles = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), 0));
  }
}

function draw() {
  background(0);

  particles.forEach((element) => {
    element.display();
    element.update();
  });
}
