class Bubble {
  constructor(x, y, colour, r = 75) {
    this.location = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.colour = colour;
    this.r = r;
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

  move() {
    this.location.add(this.velocity);

    const reflection = createVector(0, 0);

    if (this.location.x > width - this.r || this.location.x < this.r) {
      reflection.x = -1;
    }
    if (this.location.y > height - this.r || this.location.y < this.r) {
      reflection.y = -1;
    }

    this.velocity.reflect(reflection);
  }

  show() {
    if (this.colour) {
      fill(this.colour);
    } else {
      noFill();
    }
    ellipse(this.location.x, this.location.y, this.r * 2);
  }
}
