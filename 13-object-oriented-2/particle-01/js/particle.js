class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.stepX = random(-0.5, 0.5);
    this.stepY = random(0, 1);

    this.lifespan = 100;
    this.size = random(5, 15);
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
    noStroke();
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
