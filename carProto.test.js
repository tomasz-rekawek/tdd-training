import car from './carProto.js';
describe('car interface', () => {
    let myCar = new car();
    test('it should be able to accelerate', () => {
        expect(myCar.accelerate).toBeDefined();
    });
    test('it should be able to break', () => {
        expect(myCar.break).toBeDefined();
    });
    test('it should have turnWheel method', () => {
        expect(myCar.turnWheel).toBeDefined();
    });
    test('it should have speedometer', () => {
        expect(myCar.checkSpeed).toBeDefined()
    });

    test('it should have emergancy breaking method', () => {
        expect(myCar.stop).toBeDefined();
    });
});


describe('accelerating', () => {
    test('speed should be 100km when accelereting 100ms^2 for 1 sec', () => {
        let myCar = new car();
        myCar.accelerate(100, 1);
        expect(myCar.checkSpeed()).toEqual(100);
    })
    test('car should throw an error when passed non numerical arugments to accelerate', () => {
        let myCar = new car();
        expect(() => {myCar.accelerate('zupa', '13')}).toThrowError();
        expect(() => {myCar.accelerate(12, 'dd')}).toThrowError();
    })
});
