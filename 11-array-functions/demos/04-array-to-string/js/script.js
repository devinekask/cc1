function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  //an array with colors
  const colorList = ["#FF0000", "#00FF00", "#0000FF"];

  // convert array to a string where items are separated with a comma
  const converted = colorList.join();
  console.log(converted);

  // convert array to a string where there is no separator between the items
  const converted2 = colorList.join("");
  console.log(converted2);

  // convert array to a string where items are separated with a space
  const converted3 = colorList.join(" ");
  console.log(converted3);

  // convert the string back to an array using space as the delimiter
  const backToArray = converted3.split(" ");
  console.log(backToArray);
}
