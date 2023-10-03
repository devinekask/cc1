function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);

  // let i = 0 -> we create a variable called i with a value of 0
  // i < 4 -> as long as i is smaller than 4, we continue
  // i++ -> every time we have executed the code, we increase i by 1

  for (let i = 0; i < 4; i++) {
    console.log(i);
  }
}
