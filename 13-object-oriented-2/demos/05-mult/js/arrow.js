class Arrow {
  constructor(x, y, size) {
    this.location = createVector(x, y);
    this.velocity = createVector(1, 0);

    this.size = size;
  }

  run() {
    this.display();
    this.update();
  }

  update() {
    this.location.add(this.velocity);

    // Increase the velocity by 5%, every frame
    this.velocity.mult(1.05);
  }

  display() {
    push();

    translate(this.location.x, this.location.y);
    stroke(255);
    strokeWeight(4);
    line(-this.size, 0, 0, 0);
    line(-this.size / 4, -this.size / 4, 0, 0);
    line(-this.size / 4, this.size / 4, 0, 0);

    pop();
  }
}
