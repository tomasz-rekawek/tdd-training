let car = function(brand) {
    this.speed = 0;
    this.wheel = 0;
    this.brand = brand;
    this.checkSpeed = () => {
        return this.speed;
    }
    this.turnWheel = () => {
        this.wheel = angle;
    }
    this.break = (howStrong, howLong) => {
        this.speed = this.speed - howStrong * howLong;
    }
    this.accelerate = (howFast, howLong) => {
        if(typeof howFast !== 'number' || typeof howLong !== 'number') {
            throw 'accelerate works only with numbers'
        }
        this.speed = this.speed + howFast * howLong;
    }
    this.stop = () => {
        this.speed = 0;
    }
}
export default car;
