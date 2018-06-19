import manualCar from './manualCarProto';

describe('manual car', () => {
    test('it should have stuff that normal car has', () => {
        var myCar = new manualCar;
        console.log(myCar);
        expect(myCar.checkSpeed).toBeDefined();
    });
    test('constructors should be extended', () => {
        var myCar = new manualCar('toyota', 6);
        expect(myCar.brand).toBe('toyota');
        expect(myCar.gears).toBe(6);
    });
})
