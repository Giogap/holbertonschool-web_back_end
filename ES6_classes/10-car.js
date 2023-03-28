class Car {
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