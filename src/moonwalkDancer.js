var makeMoonwalkDancer = function (top, left, time) {
  left = $('body').width() / 2 - 399;
  time = Math.random() * 100 + 10;
  makeDancer.call(this, top, left, time);
  this.$node = $('<span class = "dancer moonwalk"></span>');
  this.left = left;
  this.top = top;
  this.direction = 1;
  this.step();
  this.setPosition(top, left);
};

makeMoonwalkDancer.prototype = Object.create(makeDancer.prototype);
makeMoonwalkDancer.prototype.constructor = makeMoonwalkDancer;

makeMoonwalkDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  
  var leftEdge = $('body').width() / 2 - 400;
  var rightEdge = $('body').width() / 2 + 360;
  if (this.left > leftEdge && this.left < rightEdge) {
    this.left += this.direction * 2;
  } else {
    this.direction *= -1;
    if (this.$node.hasClass('rotated')) {
      this.$node.removeClass('rotated');
    } else {
      this.$node.addClass('rotated');
    }
    
    this.left += this.direction * 2;
    
  }
  this.setPosition(this.top, this.left);

};