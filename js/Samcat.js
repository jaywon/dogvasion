var Dogvasion = Dogvasion || {};
var MAX_LIVES = 9;
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
    this.gunSound = this.game.add.audio("impact");
    this.instance.body.bounce.y = 0.2;
    this.instance.body.gravity.y = 300;
    this.instance.body.collideWorldBounds = true;

    this.instance.animations.add('left', [3,4,5], 12, true, true);
    this.instance.animations.add('right', [6,7,8], 12, true, true); 

    this.instance.pistol = this.game.add.sprite(0,0, 'pistol');
    this.instance.pistol.anchor.setTo(0, .3);
    this.instance.pistol.animations.add('left',[0], 12, true, true);
    this.instance.pistol.animations.add('right',[1], 12, true, true);
    this.instance.addChild(this.instance.pistol);

    //bind events
    // this.instance.events.onKilled.add(function(){
    //   console.log(self.instance);
    // });

    //set up bullets
    this.bullets = this.game.add.group();
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

    this.bullets.createMultiple(50, 'bullet');
    this.bullets.setAll('anchor.x', 0.3);
    this.bullets.setAll('anchor.y', 0.2);
    this.bullets.setAll('checkWorldBounds', true);
    this.bullets.setAll('outOfBoundsKill', true);
  },
  moveLeft: function(){
    this.instance.body.velocity.x = -150;
    this.instance.animations.play('left');  
    this.instance.pistol.visible = true;
    this.instance.pistol.anchor.setTo(0, .3);
    this.bullets.setAll('anchor.x', 0.3);
    this.bullets.setAll('anchor.y', 0.2);
    this.instance.pistol.animations.play('left');
  },
  moveRight: function(){
    this.instance.body.velocity.x = 150;
    this.instance.animations.play('right');
    this.instance.pistol.visible = true;
    this.instance.pistol.anchor.setTo(0, .6);
    this.bullets.setAll('anchor.x', -2.5);
    this.bullets.setAll('anchor.y', 0.2);
    this.instance.pistol.animations.play('right');
  },
  stop: function(){
    this.instance.animations.stop();
    this.instance.pistol.visible = false;
    this.instance.frame = 1;
  },
  jump: function(){
    this.instance.body.velocity.y = -350;
  },
  shoot: function(){
    if(this.instance.alive){
      if (this.game.time.now > nextFire && this.bullets.countDead() > 0)
      {
          this.gunSound.play();
          nextFire = this.game.time.now + fireRate;
          var bullet = this.bullets.getFirstDead();
          bullet.reset(this.instance.x - 8, this.instance.y - 8);
          this.game.physics.arcade.moveToPointer(bullet, 300);
      }
    }
  },
  update: function(){
    console.log('cat update');
  }
}