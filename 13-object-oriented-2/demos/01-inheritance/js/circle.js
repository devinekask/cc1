class Circle extends Shape {
  constructor(x, y, radius) {
    // Call the constructor of the parent class
    super(x, y);
    this.radius = radius;
  }

  display() {
    ellipse(this.x, this.y, this.radius);
  }

  update() {
    // We can call the parent class's update() method
    super.update();
    // And then add our own functionality
    this.radius += 0.5;
  }
}