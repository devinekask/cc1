class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.stepX = random(-0.5, 0.5);
    this.stepY = random(0, 1);

    this.lifespan = 100;
    this.size = random(10, 15);
  }

  update() {
    this.x += this.stepX;
    this.y += this.stepY;
    this.lifespan--;
  }

  isAlive() {
    return this.lifespan > 0;
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();

    const opacity = map(this.lifespan, 0, 100, 0, 255);

    fill(255, 255, 255, opacity);
    ellipse(0, 0, this.size);

    pop();
  }
  run() {
    this.update();
    this.display();
  }
}
