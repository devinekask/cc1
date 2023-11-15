let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }

  particles = particles.filter(particle => particle.isAlive());

  particles.forEach(element => {
    element.display();
    element.update();
  });
}
