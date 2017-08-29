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
  // this.oldStep = makeDancer.prototype.step.bind(this);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//Must save the previous step function
var oldStep = makeDancer.prototype.step;
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
makeBlinkyDancer.prototype.step = function () {
  // console.log(this.timeBetweenSteps);
  this.oldStep();
  this.$node.toggle();
};