class Plane {
  constructor(x, y, size) {
    this.location = createVector(x, y);
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.size = size;
  }

  run() {
    this.display();
    this.update();
  }

  update() {
    this.location.add(this.velocity);

    const reflection = createVector(0, 0);

    if (this.location.x > width || this.location.x < 0) {
      reflection.x = -1;
    }
    if (this.location.y > height || this.location.y < 0) {
      reflection.y = -1;
    }

    this.velocity.reflect(reflection);
  }

  display() {
    push();
    translate(this.location.x, this.location.y);

    const angle = this.velocity.heading();
    rotate(angle);

    fill(0);
    stroke(255);
    triangle(
      -this.size,
      -this.size / 2,
      -this.size,
      this.size / 2,
      this.size,
      0,
    );
    pop();
  }
}
