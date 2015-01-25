var Dogvasion = Dogvasion || {};
var nextMovement = 0;
var movementDelay = 100; 
var timeout;
var blackholeGenTime;
var blackholeTimeout = 2000;

function random(){
  return Math.floor(Math.random() * 50) + 1;
}

Dogvasion.Minion = function() {
  self = this;
  this.game = Dogvasion.game;
  this.init();
};


Dogvasion.Minion.prototype = {
  init: function(){
    var randomX = this.game.world.randomX;
    var randomY = this.game.world.randomY;
    this.instance = this.game.add.sprite(randomX, randomY, 'enemies');
    this.instance.alpha = 0;
    this.game.add.tween(this.instance).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
    this.growlSound = this.game.add.audio("growl");
    this.growlSound.play();
    this.game.physics.arcade.enable(this.instance);
    this.instance.body.bounce.y = 0.2;
    this.instance.body.gravity.y = 300;
    this.instance.body.collideWorldBounds = true;

    this.instance.animations.add('left', [4,5,6,7], 12, true, true);
    this.instance.animations.add('right', [0,1,2,3], 12, true, true); 

    this.instance.blackhole = this.game.add.sprite(randomX - 150, randomY - 150, 'blackhole');
    blackholeGenTime = this.game.time.now + blackholeTimeout;
    this.game.add.tween(this.instance.blackhole).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
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
  next: function(){
    //move left is set only first time, 
    //this function is replaced each time direction is adjusted
    self.moveLeft();
  },
  update: function(){
    if(blackholeGenTime < self.game.time.now){
      self.instance.blackhole.kill();
    }else{
      self.instance.blackhole.alpha -= .001;  
    }

    if(self.instance.x < 50){
      self.next = self.moveRight;
      self.next();
    }else{
      if(self.instance.x > self.game.world.width - 150){
        self.next = self.moveLeft;
        self.next();
      }else{
        self.next();
      }
    }
    nextMovement = self.game.time.now + movementDelay; 
  }
}