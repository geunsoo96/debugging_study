import areaOfCircle from "./modules/areaOfCircle.js";

// const getFromDataSomeWhare = 300;
let width = "300px";
let height = "300px";

class CreateCircle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
const circle = new CreateCircle(width, height);
console.log(circle);
// console.log(areaOfCircle());
