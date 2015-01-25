var Dogvasion = Dogvasion || {};
var MAX_LIVES = 9;

Dogvasion.Samcat = function() {
  this.game = Dogvasion.game;
  this.health = MAX_LIVES;
  this.hits = 0; 
  this.init();
};

Dogvasion.Samcat.prototype = {
  init: function(){
    this.instance = this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2, 'kittens');
    this.game.physics.arcade.enable(this.instance);
    this.instance.body.bounce.y = 0.2;
    this.instance.body.gravity.y = 300;
    this.instance.body.collideWorldBounds = true;

    this.instance.animations.add('left', [12,13,14], 12, true, true);
    this.instance.animations.add('right', [24,25,26], 12, true, true); 
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
  },
  jump: function(){
    this.instance.body.velocity.y = -350;
  },
  shoot: function(){

  }
}