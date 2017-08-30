$(document).ready(function() {
  window.dancers = [];
  var plusMinus = function() {
    return Math.random() > 0.5 ? 1 : -1;
  };
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
  
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    // var dancer = dancerMakerFunction(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 1000
    // );
    
    var dancer = new dancerMakerFunction (
      plusMinus() * Math.random() * 225 + 450,
      plusMinus() * Math.random() * 400 + $('body').width() / 2,
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
    window.dancers.forEach(function(node, i, allDancers) {
      node.top = 400;
      node.left = i * 700 / allDancers.length + 250;
      node.$node.animate({top: node.top, left: node.left});
    });
  });
  
  $('.scramble').on('click', function(event) {
    window.dancers.forEach(function(node, i, allDancers) {
      node.top = plusMinus() * Math.random() * 225 + 450;
      node.left = plusMinus() * Math.random() * 400 + $('body').width() / 2;
      node.$node.animate({top: node.top, left: node.left});
    });
  });
});

