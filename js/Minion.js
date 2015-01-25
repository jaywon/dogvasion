var Dogvasion = Dogvasion || {};
var MAX_HEALTH = 2;
var DEATH_HITS = 2;

Dogvasion.Minion = function() {
  this.game = Dogvasion.game;
  this.health = MAX_HEALTH;
  this.hits = 0;
  this.init();
};

Dogvasion.Minion.prototype = {
  init: function(){
    this.instance = this.game.add.sprite(10, this.game.world.height - 50, 'enemies');
    this.game.physics.arcade.enable(this.instance);
    this.instance.body.bounce.y = 0.2;
    this.instance.body.gravity.y = 300;
    this.instance.body.collideWorldBounds = true;

    this.instance.animations.add('left', [21,22,23], 12, true, true);
    this.instance.animations.add('right', [33,34,35], 12, true, true); 
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