class Arrow {
  constructor(x, y, size) {
    this.location = createVector(x, y);
    this.velocity = createVector(1, 1.5);
    this.size = size;
  }

  run() {
    this.display();
    this.update();
  }

  update() {
    this.location.add(this.velocity);
  }

  display() {
    push();

    translate(this.location.x, this.location.y);

    //by default in radians
    const angle = this.velocity.heading();
    rotate(angle);

    stroke(255);
    strokeWeight(4);
    line(-this.size, 0, 0, 0);
    line(-this.size / 4, -this.size / 4, 0, 0);
    line(-this.size / 4, this.size / 4, 0, 0);

    pop();
  }
}
