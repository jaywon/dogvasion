var Dogvasion = Dogvasion || {};

Dogvasion.Game = function() {};

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
    // this.player = this.game.add.sprite(10, this.game.world.height / 2, 'dude');
    this.player = this.game.add.sprite(10, this.game.world.height / 2, 'kittens');
    this.game.physics.arcade.enable(this.player);
    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = true;

    //add player animations
    this.player.animations.add('left', [12,13,14], 12, true, true);
    this.player.animations.add('right', [24,25,26], 12, true, true);
  },

  update: function(){
    this.game.physics.arcade.collide(this.player, this.platforms);

    var cursors = this.game.input.keyboard.createCursorKeys();
    this.player.body.velocity.x = 0;

    if(cursors.left.isDown){
      this.player.body.velocity.x = -150;
      this.player.animations.play('left');
    }else if(cursors.right.isDown){
      this.player.body.velocity.x = 150;
      this.player.animations.play('right');
    }else{
      this.player.animations.stop();
      this.player.frame = 1;
    }
    
    if (cursors.up.isDown && this.player.body.touching.down){
      this.player.body.velocity.y = -350;
    }
  }
};