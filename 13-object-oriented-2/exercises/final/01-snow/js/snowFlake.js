class SnowFlake {
  constructor() {
    this.location = createVector(random(width), random(-300));
    this.velocity = createVector(0, random(-2, 2));
    this.size = random(3);
  }

  run() {
    this.display();
    this.update();
  }

  update() {
    this.location.add(this.velocity);
  }

  display() {
    noStroke();
    ellipse(this.location.x, this.location.y, this.size);
  }

  isAlive() {
    return this.location.y < height;
  }
}
