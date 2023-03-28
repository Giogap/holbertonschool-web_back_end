export default class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    cloneCar() {
      const cloned = Object.create(Object.getPrototypeOf(this));
      cloned[brandSymbol] = this[brandSymbol];
      cloned[motorSymbol] = this[motorSymbol];
      cloned[colorSymbol] = this[colorSymbol];
      return cloned;
    }

    
  }

class TestCar extends Car {}

test("Car cloneCar check for species", () => {
  const opel = new TestCar('Opel', 'Turbo', 'Red');
  const newCar = opel.cloneCar();

  expect(newCar instanceof TestCar).toBe(true);
});