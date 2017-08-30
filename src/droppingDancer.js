var makeDroppingDancer = function (top, left, time) {
  top = 200;
  time = 20;
  makeDancer.call(this, 0, left, time);
  this.$node = $('<span class = "dancer dropping"></span>');
  this.fallRate = 0;
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
};

makeDroppingDancer.prototype = Object.create(makeDancer.prototype);
makeDroppingDancer.prototype.constructor = makeDroppingDancer;

makeDroppingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  if (this.fallRate < 50) {
    this.fallRate += 0.2;
  }
  if (this.top < 700) {
    this.top += this.fallRate;
  } else {
    this.top = 200;
    this.fallRate = 0;
  }
  
  this.setPosition(this.top, this.left);
  
};