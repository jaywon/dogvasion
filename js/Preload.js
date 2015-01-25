var Dogvasion = Dogvasion || {};
//loading the game assets
var minLoadTime; 

Dogvasion.Preload = function(){
    self = this;
};
 
Dogvasion.Preload.prototype = {
 
  preload: function() {
    minLoadTime = this.game.time.now + 5000;

    //show loading screen
    this.game.stage.backgroundColor = '#990000';
    this.add.sprite(this.game.world.centerX - 100, this.game.world.centerY - 100, 'logo');

    //load game assets
    this.load.image('ground', 'assets/images/sprites/ground.jpg', 400, 200);
    this.load.image('blackhole', 'assets/images/sprites/blackhole.png');
    this.load.image('bullet', 'assets/images/sprites/purpleball.png');
    this.load.spritesheet('kittens', 'assets/images/sprites/samcat.png', 50, 50, 9);
    this.load.spritesheet('enemies', 'assets/images/sprites/maxdog.png', 120, 60, 16);
    this.load.spritesheet('pistol', 'assets/images/sprites/guns.png', 40, 40, 2);
    this.load.audio('bark', 'assets/sfx/dogs/bark.mp3');
    this.load.audio('growl', 'assets/sfx/dogs/growl.mp3');
    this.load.audio('dpain1', 'assets/sfx/dogs/pain1.mp3');
    this.load.audio('dpain2', 'assets/sfx/dogs/pain2.mp3');
    this.load.audio('whine', 'assets/sfx/dogs/whine.mp3');
    this.load.audio('impact', 'assets/sfx/guns/bulletimpact.mp3');
    // this.load.audio('mgun', 'assets/sfx/guns/machinegun.mp3');
    // this.load.audio('pistol', 'assets/sfx/guns/pistol.mp3');
    // this.load.audio('explode', 'assets/sfx/guns/rocketexplode.mp3');
    // this.load.audio('rocket', 'assets/sfx/guns/rocketlaunch.mp3');
    // this.load.audio('shotgun', 'assets/sfx/guns/shotgun.mp3');
    // this.load.audio('angry', 'assets/sfx/sam/angry1.mp3');
    this.load.audio('death', 'assets/sfx/sam/dramaticdeath.mp3');
    // this.load.audio('happy', 'assets/sfx/sam/exclamation1.mp3');
    // this.load.audio('hiss', 'assets/sfx/sam/hiss.mp3');
    this.load.audio('meow', 'assets/sfx/sam/meow1.mp3');
    this.load.audio('pain1', 'assets/sfx/sam/pain1.mp3');
    this.load.audio('pain2', 'assets/sfx/sam/pain2.mp3');
    this.load.audio('pain3', 'assets/sfx/sam/pain3.mp3');
    this.load.audio('pain4', 'assets/sfx/sam/pain4.mp3');
    this.load.audio('pain5', 'assets/sfx/sam/pain5.mp3');
    this.load.audio('intro', 'assets/music/intro-mainmenu.mp3');
    this.load.audio('level1', 'assets/music/level1.mp3');

    this.introSound = this.add.audio('intro');
    this.introSound.play();
 
  },
 
  create: function() {
    if(self.game.time.now > minLoadTime){
      self.introSound.stop();
      self.state.start('Game');
    }else{
      setTimeout(self.create, 1000);
    }
  }
 
};
