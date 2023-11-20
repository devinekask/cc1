class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  //static method
  static distance(p1, p2) {
    return dist(p1.x, p1.y, p2.x, p2.y);
  }
}
