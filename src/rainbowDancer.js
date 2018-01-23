var RainbowDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left,timeBetweenSteps);
    this.$node.addClass('rainbow');
    this.rainbow = ['red','purple','orange', 'yellow','blue', 'green'];
    this.colorCount = 0;
    // this.step();
};

RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;
RainbowDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);
    this.$node.css("transition", `all ${this.timeBetweenSteps}ms`);
    this.$node.css("border-color", "" + this.rainbow[this.colorCount]);
    if (this.colorCount === this.rainbow.length - 1) {
        this.colorCount = 0;
    } else {
        this.colorCount++;
    }
};

