// var OverconfidentDancer = function(top, left, timeBetweenSteps) {
//     Dancer.call(this, top, left, timeBetweenSteps);
//     this.$node.addClass('confident');
// };
//
// OverconfidentDancer.prototype = Object.create(Dancer.prototype);
// OverconfidentDancer.prototype.constructor = OverconfidentDancer;
// OverconfidentDancer.prototype.step = function() {
//     Dancer.prototype.step.call(this);
//     let rand= Math.random() * 80;
//     this.$node.css("transition", `border-width ${this.timeBetweenSteps}ms`, `border-radius ${this.timeBetweenSteps}ms`, `top ${this.timeBetweenSteps}`,`left ${this.timeBetweenSteps}`);
//     this.$node.css("border-radius", "" + rand + "px");
//     this.$node.css("border-width", "" + rand + "px");
//     let styleSettings = {
//         top: Math.random() * $("body").height(),
//         left: Math.random() * $("body").width()
//     };
//     this.$node.css(styleSettings);
// };
