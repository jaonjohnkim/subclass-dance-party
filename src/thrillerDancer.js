var makeThrillerDancer = function (top, left, time) {
  time = Math.random() * 100 + 10;
  makeDancer.call(this, top, left, time);
  this.$node = $('<span class = "dancer thriller"></span>');
  this.step(); 
  this.setPosition(top, left);
  this.angle = Math.random() * 20;
};

makeThrillerDancer.prototype = Object.create(makeDancer.prototype);
makeThrillerDancer.prototype.constructor = makeThrillerDancer;

makeThrillerDancer.prototype.plusMinus = function() {
  return ((Math.random() > 0.5) ? 1 : -1);
};
makeThrillerDancer.prototype.setPosition = function (t, l, angle) {
  var styleSettings = {
    top: t,
    left: l,
    transform: 'rotate(' + angle + 'deg)'
  };
  this.$node.css(styleSettings);
};
makeThrillerDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.top = this.top + this.plusMinus() * Math.random() * 2;
  this.left = this.left + this.plusMinus() * Math.random() * 2;
  this.angle = this.angle + this.plusMinus() * Math.random() * 1;
  this.setPosition(this.top, this.left, this.angle);
  
};