// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

// class makeBlinkyDancer extends makeDancer {
//   constructor (top, left, timeBetweenSteps) {
//     super(top, left, timeBetweenSteps);
//     this.oldStep = super.step.bind(this);
//     this.step(timeBetweenSteps);
//   }
//   step (tStep) {
    
//     this.oldStep(tStep);
//     console.log(this);
//     this.$node.toggle();
//   }
// }

var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer blinky"></span>');
  // this.step();
  // this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {
  console.log(Date.now());
  // console.log('I\'ve been called');
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};