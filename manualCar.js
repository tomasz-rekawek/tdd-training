import car from './car';

class manualCar extends car {
    constructor(brand, gears){
        super(brand);
        this.gears = gears;
    }

    getGears() {
        return this.gears;
    }
}
export default manualCar;
