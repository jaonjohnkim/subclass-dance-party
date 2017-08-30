var makeThrillerDancer = function (top, left, time) {
  time = Math.random() * 200 + 100;
  makeDancer.call(this, top, left, time);
  this.$node = $('<span class = "dancer thriller"></span>');
  this.step(); 
  this.setPosition(top, left);
  this.angle = Math.random() * 20;
  var context = this;
  $(document).dblclick(function(event) {
    context.left = event.pageX;
    context.top = event.pageY;
    $('.dancer.thriller').stop().animate({left: event.pageX, top: event.pageY});
  });
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
  
  this.top = this.top + this.plusMinus() * Math.random() * 5;
  this.left = this.left + this.plusMinus() * Math.random() * 5;
  this.angle = this.angle + this.plusMinus() * Math.random() * 2;
  this.setPosition(this.top, this.left, this.angle);
  
};