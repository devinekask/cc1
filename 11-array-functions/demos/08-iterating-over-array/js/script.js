function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  const colorList = ["#FF0000", "#00FF00", "#0000FF"];

  //using a traditional for loop
  for (let i = 0; i < colorList.length; i++) {
    console.log(colorList[i]);
  }

  //using the iterator Array function
  colorList.forEach((item) => {
    console.log(item);
  });
}
