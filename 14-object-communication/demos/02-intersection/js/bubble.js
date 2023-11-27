class Bubble {
  constructor(x, y, colour = "white", r = 30) {
    this.location = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.colour = colour;
    this.r = r;
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

  // When the distance between the bubble and the other bubble is
  // less than the sum of their radius, then they are intersecting.

  intersects(other) {
    // Long version:
    // const distance = dist(
    //   this.location.x,
    //   this.location.y,
    //   other.location.x,
    //   other.location.y,
    // );

    // Short version, using the p5.Vector.dist() method:
    const distance = this.location.dist(other.location);

    if (distance < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    push();
    fill(this.colour);
    ellipse(this.location.x, this.location.y, this.r * 2);
    ellipse(this.location.x, this.location.y, 3);
    pop();
  }
}
