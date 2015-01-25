var Dogvasion = Dogvasion || {};

Dogvasion.Game = function() {
  
};

Dogvasion.Game.prototype = {
  preload: function(){
    this.game.load.image("background", "assets/images/city_bg.png");
  },
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 800, 600, "background");
    
    //set up physical elements
    this.platforms = this.game.add.group();
    this.platforms.enableBody = true;

    var ground = this.platforms.create(0, this.game.world.height - 20, 'ground');
    ground.scale.setTo(2,2);
    ground.body.immovable = true;

    //initialize player and set physics properties
    this.player = new Dogvasion.Samcat();  
    this.enemy = new Dogvasion.Minion();
  },

  update: function(){
    this.game.physics.arcade.collide(this.player.instance, this.platforms);

    var cursors = this.game.input.keyboard.createCursorKeys();
    this.player.instance.body.velocity.x = 0;

    if(cursors.left.isDown){
      this.player.moveLeft();
    }else if(cursors.right.isDown){
      this.player.moveRight();
    }else{
      this.player.stop();
    }
    
    if (cursors.up.isDown && this.player.instance.body.touching.down){
      this.player.jump();
    }
  }
};