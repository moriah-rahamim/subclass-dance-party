var OverconfidentDancer = function(top, left) {
    let timeBetweenSteps = Math.random() * 1000;
    // note to self: perhaps add a minimum time later
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('overconfident');
};

OverconfidentDancer.prototype = Object.create(Dancer.prototype);
OverconfidentDancer.prototype.constructor = OverconfidentDancer;

OverconfidentDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);
    let rand = Math.random() * 100;

    this.$node.css("transition", `border ${this.timeBetweenSteps}ms`);
    this.$node.css("border-width", `${rand}px`);
    this.$node.css("border-radius", `${rand}px`);

};