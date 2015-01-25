var Dogvasion = Dogvasion || {};
 
//loading the game assets
 
Dogvasion.Preload = function(){};
 
Dogvasion.Preload.prototype = {
 
  preload: function() {
    //show loading screen
 
    // this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
 
    // this.preloadBar.anchor.setTo(0.5);
 
    // this.preloadBar.scale.setTo(3);
 
    // this.load.setPreloadSprite(this.preloadBar);
 
    //load game assets
    this.load.image('ground', 'assets/images/sprites/ground.jpg', 400, 200);
    this.load.image('blackhole', 'assets/images/sprites/blackhole.png');
    this.load.image('bullet', 'assets/images/sprites/purpleball.png');
    this.load.spritesheet('kittens', 'assets/images/sprites/samcat.png', 50, 50, 9);
    this.load.spritesheet('enemies', 'assets/images/sprites/maxdog.png', 120, 60, 16);
    this.load.spritesheet('pistol', 'assets/images/sprites/guns.png', 40, 40, 2);
    this.load.audio('bark', 'assets/sfx/dogs/bark.wav');
    this.load.audio('growl', 'assets/sfx/dogs/growl.wav');
    this.load.audio('dpain1', 'assets/sfx/dogs/pain1.wav');
    // this.load.audio('dpain2', 'assets/sfx/dogs/pain2.wav');
    this.load.audio('whine', 'assets/sfx/dogs/whine.wav');
    this.load.audio('impact', 'assets/sfx/guns/bulletimpact.wav');
    // this.load.audio('mgun', 'assets/sfx/guns/machinegun.wav');
    // this.load.audio('pistol', 'assets/sfx/guns/pistol.wav');
    // this.load.audio('explode', 'assets/sfx/guns/rocketexplode.wav');
    // this.load.audio('rocket', 'assets/sfx/guns/rocketlaunch.wav');
    // this.load.audio('shotgun', 'assets/sfx/guns/shotgun.wav');
    // this.load.audio('angry', 'assets/sfx/sam/angry1.wav');
    this.load.audio('death', 'assets/sfx/sam/dramaticdeath.wav');
    // this.load.audio('happy', 'assets/sfx/sam/exclamation1.wav');
    // this.load.audio('hiss', 'assets/sfx/sam/hiss.wav');
    this.load.audio('meow', 'assets/sfx/sam/meow1.wav');
    this.load.audio('pain1', 'assets/sfx/sam/pain1.wav');
    // this.load.audio('pain2', 'assets/sfx/sam/pain2.wav');
    // this.load.audio('pain3', 'assets/sfx/sam/pain3.wav');
    // this.load.audio('pain4', 'assets/sfx/sam/pain4.wav');
    // this.load.audio('pain5', 'assets/sfx/sam/pain5.wav');
    this.load.audio('intro', 'assets/music/intro-mainmenu.wav');
    this.load.audio('level1', 'assets/music/level1.wav');
 
  },
 
  create: function() {
    this.state.start('Game');
  }
 
};
