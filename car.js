class car {
    constructor() {
        this.speed = 0;
        this.wheel = 0;
    }
    checkSpeed() {
        return this.speed;
    }
    turnWheel(angle) {
        this.wheel = angle;
    }
    break(howStrong, howLong) {
        this.speed = this.speed - howStrong * howLong;
    }
    accelerate(howFast, howLong) {
        if(typeof howFast !== 'number' || typeof howLong !== 'number') {
            throw 'accelerate works only with numbers'
        }
        this.speed = this.speed + howFast * howLong;
    }
    stop() {
        this.speed = 0;
    }
}
export default car;
