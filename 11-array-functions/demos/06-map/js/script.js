function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  const week = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const upperWeek = week.map(convertToUppercase);
  console.log(upperWeek);

  // can be writen much shorter
  const upperWeekShort = week.map((day) => day.toUpperCase());
  console.log(upperWeekShort);

  // an example of how to multiply numbers using the map function
  const numbers = [20, 34, 16, 23, 7];
  const highNumbers = numbers.map((item) => item * 2);
  console.log(highNumbers);
}

// function receives an item as a parameter, converts it to uppercase and returns the value
function convertToUppercase(item) {
  const upperItem = item.toUpperCase();
  return upperItem;
}
