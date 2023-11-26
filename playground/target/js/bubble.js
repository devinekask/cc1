class Bubble {
  constructor(x, y, colour, r = 1.1) {
    this.location = createVector(x, y);
    this.formations = [];
    this.target = createVector(random(width), random(height));
    this.velocity = createVector(0, random(-20, 20));
    this.velocity.rotate(random(TWO_PI));
    this.colour = colour;
    this.percentage = random(0.4, 0.1);
    this.r = r;

  }

  isAlive() {
    const distance = this.location.dist(this.target);

    if (distance < 20) {
      return false;
    } else {
      return true;
    }
  }

  move() {
    this.location.add(this.velocity);

    const reflection = createVector(0, 0);

    // if (this.location.x > width - this.r || this.location.x < this.r) {
    //   reflection.x = -1;
    // }
    // if (this.location.y > height - this.r || this.location.y < this.r) {
    //   reflection.y = -1;
    // }

    this.velocity.reflect(reflection);
  }

  moveToTarget() {
    this.location.x = lerp(this.location.x, this.target.x, this.percentage);
    this.location.y = lerp(this.location.y, this.target.y, this.percentage);
  }

  show() {
    push();
    noStroke();
    const distance = this.location.dist(this.target);
    const alpha = map(distance, 0, width, 255, 100);
    fill(0, 0, 0, alpha);
    ellipse(this.location.x, this.location.y, this.r * 2);
    pop();
  }
}
