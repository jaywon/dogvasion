var Dogvasion = Dogvasion || {};
var MAX_LIVES = 9;
var bullets;
var nextFire = 0;
var fireRate = 100;   

Dogvasion.Samcat = function() {
  self = this;
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

    this.instance.animations.add('left', [3,4,5], 12, true, true);
    this.instance.animations.add('right', [6,7,8], 12, true, true); 

    //set up bullets
    bullets = this.game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
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
    if (this.game.time.now > nextFire && bullets.countDead() > 0)
    {
        nextFire = this.game.time.now + fireRate;
        var bullet = bullets.getFirstDead();
        bullet.reset(this.instance.x - 8, this.instance.y - 8);
        this.game.physics.arcade.moveToPointer(bullet, 300);
    }
  }
}