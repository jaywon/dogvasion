var Dogvasion = Dogvasion || {};

Dogvasion.Game = function() {
  
};

Dogvasion.Game.prototype = {
  preload: function(){
    this.game.load.image("background", "assets/images/city_bg.png");
    this.dpainSound = this.game.add.audio("dpain1")
    this.whineSound = this.game.add.audio("whine");
    this.deathSound = this.game.add.audio("death");
    this.levelMusic = this.game.add.audio("level1");
  },
  create: function(){
    var background = this.game.add.tileSprite(0, 0, 800, 600, "background");
    
    
    //set up sounds
    this.levelMusic.play("", 0, 1, true, true);

    //set up physical elements
    this.platforms = this.game.add.group();
    this.platforms.enableBody = true;

    var ground = this.platforms.create(0, this.game.world.height - 20, 'ground');
    ground.scale.setTo(2,2);
    ground.body.immovable = true;

    //initialize player and set physics properties
    this.player = new Dogvasion.Samcat();    
    // this.minion = new Dogvasion.Minion();
    
    this.minions = this.game.add.group();
    for(var i = 0; i < 10; i++){
      // var minion = createMinion(this.game);
      var minion = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'enemies');

      this.game.physics.arcade.enable(minion);
      minion.body.bounce.y = 0.2;
      minion.body.gravity.y = 300;
      minion.body.collideWorldBounds = true;

      minion.animations.add('left', [21,22,23], 12, true, true);
      minion.animations.add('right', [33,34,35], 12, true, true); 
      this.minions.add(minion);
    }
  },

  update: function(){

    var cursors = this.game.input.keyboard.createCursorKeys();
    var wKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    var aKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    var sKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    var dKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.player.instance.body.velocity.x = 0;
    this.game.physics.arcade.collide(this.player.instance, this.platforms);
    
    this.game.physics.arcade.collide(this.minions, this.platforms);
    this.game.physics.arcade.overlap(this.player.bullets, this.minions, minionShotHandler, null, this);
    this.game.physics.arcade.overlap(this.player.instance, this.minions, minionCollisionHandler, null, this);

    if(aKey.isDown){
      this.player.moveLeft();
    }else if(dKey.isDown){
      this.player.moveRight();
    }else{
      this.player.stop();
    }

    if (this.game.input.activePointer.isDown)
    {
      this.player.shoot();
    }
    
    if (wKey.isDown && this.player.instance.body.touching.down){
      this.player.jump();
    }
  }
};

function createMinion(game){
  console.log(game);
  
}

function minionCollisionHandler(player, minion){
  this.deathSound.play();
  player.kill();
}

function minionShotHandler(bullet, minion){
  console.log(minion);
  this.whineSound.play("",0.5,1,false,true);
  bullet.kill();
  minion.kill();
  // var minion = createMinion();
  // this.minions.add(minion);
  // this.minion = new Dogvasion.Minion(); 
}