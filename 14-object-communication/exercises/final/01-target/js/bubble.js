class Bubble {
  constructor(x, y, colour = "white", r = 30) {
    this.location = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.target = undefined;
    this.colour = colour;
    this.r = r;
  }

  move() {
    if (this.target !== undefined) {
      this.moveToTarget();
      return;
    }

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
