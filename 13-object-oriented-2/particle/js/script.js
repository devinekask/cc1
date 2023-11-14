let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);


  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }


  // particles.push(new Particle(random(width), -10));

  particles = particles.filter(element => element.isAlive());

  particles.forEach(element => {
    element.display();
    element.update();
  });

}

