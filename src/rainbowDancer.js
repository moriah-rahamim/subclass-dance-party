window.RainbowDancer = class RainbowDancer extends Dancer {
    constructor(top, left, timeBetweenSteps) {
        super(top, left, timeBetweenSteps);
        this.$node.addClass('rainbow');
        this.rainbow = ['red', 'purple', 'orange', 'yellow', 'blue', 'green'];
        this.colorCount = 0;
    }

    step() {
        Dancer.prototype.step.call(this);
        this.$node.css("transition", `all ${this.timeBetweenSteps}ms`);
        this.$node.css("border-color", "" + this.rainbow[this.colorCount]);
        if (this.colorCount === this.rainbow.length - 1) {
            this.colorCount = 0;
        } else {
            this.colorCount++;
        }
    }
};

