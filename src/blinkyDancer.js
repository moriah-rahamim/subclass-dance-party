window.BlinkyDancer = class BlinkyDancer extends Dancer {
    constructor(top, left, timeBetweenSteps) {
        super(top, left, timeBetweenSteps);
        this.$node.addClass('blinky');
    }

    step() {
        Dancer.prototype.step.call(this);
        this.$node.toggle();
    };
};