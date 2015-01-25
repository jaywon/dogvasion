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
    this.minion = new Dogvasion.Minion(); 
    // this.minions = this.game.add.group();
    // this.minions.enableBody = true;
    // this.minions.physicalBodyType = Phaser.Physics.ARCADE;
  },

  update: function(){
    this.game.physics.arcade.collide(this.player.instance, this.platforms);
    this.game.physics.arcade.overlap(this.player.bullets, this.minion.instance, minionShotHandler, null, this);

    var cursors = this.game.input.keyboard.createCursorKeys();
    var wKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    var aKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    var sKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    var dKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.player.instance.body.velocity.x = 0;

    if(aKey.isDown){
      this.player.moveLeft();
    }else if(dKey.isDown){
      this.player.moveRight();
    }else{
      this.player.stop();
    }

    // sprite.rotation = game.physics.arcade.angleToPointer(sprite);

    if (this.game.input.activePointer.isDown)
    {
      this.player.shoot();
    }
    
    if (wKey.isDown && this.player.instance.body.touching.down){
      this.player.jump();
    }
  }
};

function minionShotHandler(bullet, minion){
  if(minion.hits >= 2){
    new Sound(Dogvasion, 'whine')
    whine.play();
    bullet.kill();
    minion.kill();
    this.minion = new Dogvasion.Minion(); 
  }else{
    new Sound(Dogvasion, 'dpain1')
    dpain1.play();
    bullet.kill();
    minion.hits += 1;
  }
}