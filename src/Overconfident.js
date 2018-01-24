window.OverconfidentDancer = class OverconfidentDancer extends Dancer {
    constructor(top, left, timeBetweenSteps) {
        super(top, left, timeBetweenSteps);
        this.$node.addClass('overconfident');
        this.confidenceAdjustment = 0;
    }

    absorbNeighbors() {
        let confidentWidth = this.$node.css('border-width');
        confidentWidth = parseInt(confidentWidth.slice(0, -2));
        let confidentCenter = {
            top: this.top + (confidentWidth / 2),
            left: this.left + (confidentWidth / 2)
        };
        window.dancers.forEach((ele, idx) => {
            if (!(ele instanceof OverconfidentDancer)) {
                console.log(ele);
                let dancerWidth = ele.$node.css('border-width');
                dancerWidth = parseInt(dancerWidth.slice(0, -2));
                let dancerCenter = {
                    top: ele.top + (dancerWidth / 2),
                    left: ele.left + (dancerWidth / 2),
                };
                let distanceBetween = Math.sqrt(
                    Math.pow(confidentCenter.top - dancerCenter.top, 2) +
                    Math.pow(confidentCenter.left - dancerCenter.left, 2)
                );
                if (distanceBetween < (dancerWidth + confidentWidth)) {
                    // remove the other dancer
                    ele.$node.hide();
                    window.dancers.splice(idx, 1);
                    this.confidenceAdjustement += 200;
                    // this.$node.css('border-width', confidentWidth + 5 +'px')
                }

            }
        });
    }

    step() {
        Dancer.prototype.step.call(this);
        let rand = Math.random() * 100 + this.confidenceAdjustment;

        this.$node.css("transition", `border ${this.timeBetweenSteps}ms`);
        this.$node.css("border-width", `${rand}px`);

        this.absorbNeighbors();
    }
}


//{left: 200, top: 800}

//Divide left and top by 2 to find the center.
//If distance between centers is less than radius of A + radius of B