// 10-car.js
const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  cloneCar() {
    const cloned = Object.create(Object.getPrototypeOf(this));
    cloned[brandSymbol] = this[brandSymbol];
    cloned[motorSymbol] = this[motorSymbol];
    cloned[colorSymbol] = this[colorSymbol];
    return cloned;
  }
}

// 10-car.test.js
import Car from "./10-car.js";

class TestCar extends Car {}

test("Car has the correct definition", () => {
  const bmw = new Car('BMW', 'Turbo', 'Mango');
  expect(bmw._brand).toBe('BMW');
  expect(bmw._color).toBe('Mango');
  expect(bmw._motor).toBe('Turbo');
  expect(bmw._range).toBe(undefined);
});

test("Car cloneCar check for species", () => {
  const opel = new TestCar('Opel', 'Turbo', 'Red');
  const newCar = opel.cloneCar();
  expect(newCar instanceof TestCar).toBe(true);
});