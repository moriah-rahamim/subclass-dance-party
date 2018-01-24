// Creates and returns a new dancer object that can step
class Dancer {
    constructor(top, left, timeBetweenSteps) {
        this.$node = $('<span class="dancer"></span>');
        this.timeBetweenSteps = timeBetweenSteps;
        this.top = top;
        this.left = left;
        this.setPosition(top, left);
        // this.step();
    }

    step() {
        setTimeout(this.step.bind(this), this.timeBetweenSteps);
    }

    setPosition(top, left) {
        let styleSettings = {
            top: top,
            left: left
        };
        this.$node.css(styleSettings);
    }
}

