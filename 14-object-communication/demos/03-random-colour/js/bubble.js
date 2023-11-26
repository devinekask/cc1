class Bubble {
  constructor(x, y, colour = "white", r = 30) {
    this.location = createVector(x, y);
    this.velocity = createVector(random(-5, 5), random(-5, 5));
    this.colour = colour;
    this.r = r;
    this.overlap = false;
  }

  move() {
    this.location.add(this.velocity);

    const reflection = createVector(0, 0);

    if (this.location.x >= width - this.r || this.location.x <= this.r) {
      reflection.x = -1;
    }
    if (this.location.y >= height - this.r || this.location.y <= this.r) {
      reflection.y = -1;
    }

    this.velocity.reflect(reflection);
  }

  intersects(other) {
    const distance = dist(
      this.location.x,
      this.location.y,
      other.location.x,
      other.location.y,
    );

    if (distance < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    push();
    strokeWeight(2);
    fill(this.colour);
    ellipse(this.location.x, this.location.y, this.r * 2);
    ellipse(this.location.x, this.location.y, 3);
    pop();
  }
}
