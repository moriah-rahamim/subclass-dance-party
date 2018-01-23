$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    console.log(dancerMakerFunction);
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancer.step();
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
      let heightOfWindow = $('body').height();
      let spacing = heightOfWindow/(window.dancers.length + 1);
      let currentHeight = spacing;
      window.dancers.forEach(ele => {
          ele.left = 0;
          ele.$node.css('left','0px');
          ele.top = currentHeight;
          ele.$node.css('transition','top 1s');
          ele.$node.css('top', currentHeight + 'px');
          currentHeight += spacing;
      })
  })

});

