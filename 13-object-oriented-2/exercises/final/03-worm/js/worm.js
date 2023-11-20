class Worm {
  constructor(x, y, size) {
    this.location = createVector(x, y);
    this.velocity = createVector(size / 4, size / 4);
    this.size = size;
    this.noiseValue = random(100);
  }

  run() {
    this.display();
    this.update();
  }

  update() {
    angleMode(DEGREES);

    const angle = map(noise(this.noiseValue), 0, 1, -45, 45);

    this.velocity.rotate(angle);
    this.location.add(this.velocity);

    this.noiseValue += 0.1;

    if (this.location.x < 0) {
      this.location.x = width;
    } else if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    } else if (this.location.y > height) {
      this.location.y = 0;
    }
  }

  display() {
    stroke(255);
    fill(0);
    ellipse(this.location.x, this.location.y, this.size);
  }
}
