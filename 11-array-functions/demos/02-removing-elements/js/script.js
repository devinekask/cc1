function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  //an array with colors
  const colorList = ["#FF0000", "#00FF00", "#0000FF", "#987654"];

  //remove first element from the array
  colorList.shift();
  console.log(colorList);

  //remove first element from the array and store it in variable
  // const removedItem = colorList.shift();
  // console.log(removedItem);

  // const lastElement = colorList.pop();
  // console.log(lastElement);
  // console.log(colorList);
}
