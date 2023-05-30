const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  drive() {
    console.log("Driving...");
  },
};

const newCar = Object.create(car);

console.log(newCar.make); // "Toyota"
console.log(newCar.model); // "Corolla"
console.log(newCar.year); // 2022
newCar.drive(); // "Driving..."