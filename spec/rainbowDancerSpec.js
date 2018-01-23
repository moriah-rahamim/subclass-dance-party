describe('RainbowDancer', function() {

  var rainbowDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rainbowDancer = new RainbowDancer(10, 20, timeBetweenSteps);
  });

  it('should change colors', function() {
    // capture the current css color
    let oldColor = rainbowDancer.$node.css('border-color');
    // wait 101 milliseconds
    setTimeout(function() {
      let newColor = rainbowDancer.$node.css('border-color');
      expect(newColor).to.not.equal(oldColor);
    }, 101);
    // capture it again
    // it should be a different color
  });
});