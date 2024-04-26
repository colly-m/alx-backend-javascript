import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const {
      _brand,
      _motor,
      _color,
      _range,
    } = this;
    return new this.constructor(
      _brand,
      _motor,
      _color,
      _range,
    );
  }
}
