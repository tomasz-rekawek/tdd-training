import car from './carProto.js';

var manualCar = function(brand,gears) {
    car.call(this, brand);
    this.gears = gears;

    this.getGears = () => {
        return this.gears;
    }
};
manualCar.prototype = car;
export default manualCar;
