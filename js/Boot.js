var Dogvasion = Dogvasion || {};
Dogvasion.Boot = function(){};

Dogvasion.Boot.prototype = {
  preload: function () {
    // this.load.image('preloadbar', 'asksets/images/preloader-bar.png');
  },
  create: function() {
    //loading screen will have a white background 
    this.game.stage.backgroundColor = '#000';
 
    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 
    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
 
    this.scale.pageAlignVertically = true;
 
    //screen size will be set automatically
    this.scale.setScreenSize(true);
 
    //physics system 
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
 
    this.state.start('Preload');
 
  }
}; 