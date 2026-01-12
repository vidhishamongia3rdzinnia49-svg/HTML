
const main = document.getElementById("cars");
const sub = document.getElementById("carsub");

main.style.position = "absolute";
main.style.top = "59%";
main.style.left = "50%";
main.style.transform = "translate(-50%,-50%)";
main.style.color = "white";
sub.style.position = "absolute";
sub.style.top = "75%";   // below main text
sub.style.left = "50%";
sub.style.color = "white";
class Vehicle {
  constructor(name) {
    this.name = name; // stores car name
  }

  getName() {
    return "Car Name: " + this.name; // method to access property
  }

  static info() {
    return "Vehicle class using static method"; // static method
  }}
  // call static method (TEXT ONE)
document.getElementById("cars").innerHTML = Vehicle.info();

// create object
let v1 = new Vehicle("BMW");

// show object data below
document.getElementById("carsub").innerHTML = v1.getName();
