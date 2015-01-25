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

var timeout;

Dogvasion.Minion.prototype = {
  init: function(){
    var randomX = this.game.world.randomX;
    var randomY = this.game.world.randomY;
    this.instance = this.game.add.sprite(randomX, randomY, 'enemies');
    this.growlSound = this.game.add.audio("growl");
    this.growlSound.play();
    this.game.physics.arcade.enable(this.instance);
    this.instance.body.bounce.y = 0.2;
    this.instance.body.gravity.y = 300;
    this.instance.body.collideWorldBounds = true;

    this.instance.animations.add('left', [4,5,6,7], 12, true, true);
    this.instance.animations.add('right', [0,1,2,3], 12, true, true); 

    this.instance.blackhole = this.game.add.sprite(randomX - 150, randomY - 150, 'blackhole');
    this.instance.bringToTop();

    setTimeout(function(){
      self.instance.blackhole.destroy();
    },1000);


    timeout = setInterval(function(){
      self.moveLeft();
    }, 1000);    
  },
  moveLeft: function(){
    if(this.instance.x < this.game.world.bounds.x + 150){
      clearInterval(timeout);
      timeout = setInterval(function(){
        self.moveRight();
      }, 1000);
    }else{
      this.instance.body.velocity.x = -150;
      this.instance.animations.play('left'); 
    } 
  },
  moveRight: function(){
    if(this.instance.x > this.game.world.width - 150){
      clearInterval(timeout);
      timeout = setInterval(function(){
        self.moveLeft();
      }, 1000);
    }else{
      this.instance.body.velocity.x = 150;
      this.instance.animations.play('right');
    } 
  },
  stop: function(){
    this.instance.animations.stop();
    this.instance.frame = 1;
  }
}