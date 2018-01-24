$(document).ready(function() {
  window.dancers = [];

  $('body').on('click', '.addDancerButton', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

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
    $('.danceParty').on('click', function() {
        let rand = Math.random() * 500;
        for(let i = 0; i < rand; i++) {
            $('.blinkyButton').trigger('click');
            $('.rainbowButton').trigger('click');
            if (i % 5 === 0) {
                $('.overconfidentButton').trigger('click');
            }
        }
    })

});

