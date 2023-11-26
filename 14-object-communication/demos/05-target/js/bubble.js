class Bubble {
  constructor(x, y, colour = "white", r = 30) {
    this.location = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.target = undefined;
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

  contains(x, y) {
    const distance = dist(this.location.x, this.location.y, x, y);

    return distance < this.r;
  }

  move() {
    // If the bubble has a target, move towards it
    if (this.target !== undefined) {
      this.moveToTarget();
      return;
    }

    // This part will only be reached if the bubble doesn't have a target
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

  // Use lerp to move the bubble towards the target
  // https://p5js.org/reference/#/p5/lerp
  moveToTarget() {
    this.location.x = lerp(this.location.x, this.target.x, 0.1);
    this.location.y = lerp(this.location.y, this.target.y, 0.1);
  }

  show() {
    push();
    fill(this.colour);
    ellipse(this.location.x, this.location.y, this.r * 2);
    pop();
  }
}
