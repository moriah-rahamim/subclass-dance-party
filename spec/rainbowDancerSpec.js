describe('RainbowDancer', function() {

  var rainbowDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rainbowDancer = new RainbowDancer(10, 20, timeBetweenSteps);
    rainbowDancer.step();
    // ^^ delete me if weird shit starts happening
  });

  it('should change colors', function() {
    // capture the current css color
    let oldColor = rainbowDancer.$node.css('border-color');
    // wait 100 milliseconds
    clock.tick(timeBetweenSteps);
    // capture it again
    // it should be a different color
    let newColor = rainbowDancer.$node.css('border-color');
    expect(newColor).to.not.equal(oldColor);
  });
  
  it('should have a jQuery node', function() {
    expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

});