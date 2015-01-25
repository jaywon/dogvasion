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
    // this.load.audio('bark', 'assets/sfx/dogs/bark.mp3');
    this.load.audio('growl', 'assets/sfx/dogs/growl.mp3');
    this.load.audio('dpain1', 'assets/sfx/dogs/pain1.mp3');
    // this.load.audio('dpain2', 'assets/sfx/dogs/pain2.mp3');
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
    // this.load.audio('intro', 'assets/music/intro-mainmenu.mp3');
    this.load.audio('level1', 'assets/music/level1.mp3');
 
  },
 
  create: function() {
    this.state.start('Game');
  }
 
};
