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
    this.load.spritesheet('kittens', 'assets/images/sprites/samcat.png', 50, 50, 9);
    this.load.spritesheet('enemies', 'assets/images/sprites/enemies.png', 32, 32, 96);
    this.load.image('bullet', 'assets/images/sprites/purpleball.png');
    // this.load.spritesheet('cat', 'assets/images/sprites/Grizzo_Cat.png');
    // this.load.spritesheet('dude', 'assets/images/sprites/dude.png', 32, 48);
 
    // this.load.audio('coin', 'assets/audio/coin.wav');
 
  },
 
  create: function() {
    this.state.start('Game');
  }
 
};