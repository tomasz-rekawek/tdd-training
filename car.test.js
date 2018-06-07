import car from './car.js';
describe('car interface', () => {
    test('it should be able to accelerate', () => {
        expect(car.accelerate).toBeDefined();
    });
    test('it should be able to break', () => {
        expect(car.break).toBeDefined();
    });
    test('it should have turnWheel method', () => {
        expect(car.turnWheel).toBeDefined();
    });
    test('it should have speedometer', () => {
        expect(car.checkSpeed).toBeDefined()
    });
});
