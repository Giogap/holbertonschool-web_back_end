export default class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    this.name = name;
    this.length = length;
    this.students = students;
  }
  
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }
}