var Dogvasion = Dogvasion || {};
var MAX_HEALTH = 2;
var MAX_HITS= 2;

function random(){
  return Math.floor(Math.random() * 50) + 1;
}

Dogvasion.Minion = function() {
  self = this;
  this.game = Dogvasion.game;
  this.health = MAX_HEALTH;
  this.hits = 0;
  this.init();
};

Dogvasion.Minion.prototype = {
  init: function(){
    this.instance = this.game.add.sprite(this.game.world.randomX,this.game.world.randomY, 'enemies');
    this.game.physics.arcade.enable(this.instance);
    this.instance.body.bounce.y = 0.2;
    this.instance.body.gravity.y = 300;
    this.instance.body.collideWorldBounds = true;

    this.instance.animations.add('left', [21,22,23], 12, true, true);
    this.instance.animations.add('right', [33,34,35], 12, true, true); 

    var timeout = setInterval(function(){
      self.instance.body.velocity.x = - 150;
    }, 1000);    
  },
  moveLeft: function(){
    this.instance.body.velocity.x = -150;
    this.instance.animations.play('left');    
  },
  moveRight: function(){
    this.instance.body.velocity.x = 150;
    this.instance.animations.play('right');
  },
  stop: function(){
    this.instance.animations.stop();
    this.instance.frame = 1;
  }
}