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
  