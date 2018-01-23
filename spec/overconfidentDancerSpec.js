describe('OverconfidentDancer', function() {

  var overconfidentDancer, clock, timeBetweenSteps;
  // var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    overconfidentDancer = new OverconfidentDancer(10, 20);
    timeBetweenSteps = overconfidentDancer.timeBetweenSteps;
    overconfidentDancer.step();
  });

  it('should have a jQuery node', function() {
    expect(overconfidentDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should change border width', function() {
    let oldWidth = overconfidentDancer.$node.css('border-width');
    clock.tick(timeBetweenSteps);
    let newWidth = overconfidentDancer.$node.css('border-width');
    expect(oldWidth).to.not.equal(newWidth);
  });

});