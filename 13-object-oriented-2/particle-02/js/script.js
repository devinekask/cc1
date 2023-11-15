let particle;

function setup() {
  createCanvas(400, 400);
  particle = new Particle(random(width), random(height));
}

function draw() {
  background(0);

  particle.display();
  particle.update();
}
