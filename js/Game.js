var Dogvasion = Dogvasion || {};

Dogvasion.Game = function() {
  
};

Dogvasion.Game.prototype = {
  preload: function(){
    this.game.load.image("background", "assets/images/city_bg.png");
    this.dpainSound = this.game.add.audio("dpain1");
    this.whineSound = this.game.add.audio("whine");
    this.deathSound = this.game.add.audio("death");
    this.levelMusic = this.game.add.audio("level1");

    this.painSound1 = this.game.add.audio("pain1");
    this.painSound2 = this.game.add.audio("pain2");
    this.painSound3 = this.game.add.audio("pain3");
    this.painSound4 = this.game.add.audio("pain4");
    this.painSound5 = this.game.add.audio("pain5");
    this.painSounds = [this.painSound1,this.painSound2,this.painSound3,this.painSound4,this.painSound5];
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
    this.minion = new Dogvasion.Minion();

    this.scoreText = this.game.add.text(this.game.world.x, this.game.world.y, '# Lives: ' + this.player.instance.health, {font: "40px Arial", fill: "#ffffff", align: "center"});

  },

  update: function(){

    var cursors = this.game.input.keyboard.createCursorKeys();
    var wKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    var aKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    var sKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    var dKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.player.instance.body.velocity.x = 0;
    this.game.physics.arcade.collide(this.player.instance, this.platforms);
    
    this.game.physics.arcade.collide(this.minion.instance, this.platforms);
    this.game.physics.arcade.overlap(this.player.bullets, this.minion.instance, minionShotHandler, null, this);
    this.game.physics.arcade.overlap(this.player.instance, this.minion.instance, minionCollisionHandler, null, this);

    if(aKey.isDown){
      this.player.moveLeft();
    }else if(dKey.isDown){
      this.player.moveRight();
    }else{
      this.player.stop();
    }

    if (this.game.input.activePointer.isDown){
      this.player.shoot();
    }

    if (this.minion.instance.alive){
      this.minion.update();
    }
    
    if (wKey.isDown && this.player.instance.body.touching.down){
      this.player.jump();
    }
  },

  gameOver: function(){
    this.gameOverText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Game Over!', { font: "40px Arial", fill: "#ffffff", align: "center" });
    this.gameOverText.anchor.setTo(0.5, 0.5);
    this.gameOverText.visible = true;
  }
};

var nextHit = 0;
var hitRate = 1000;
function minionCollisionHandler(player, minion){
  if(this.game.time.now > nextHit){
    nextHit = this.game.time.now + hitRate;
    player.damage(1);
    this.scoreText.text = "# of Lives: " + this.player.instance.health;
    
    if(!player.alive){
      this.deathSound.play();
      this.gameOver();
    }else{
      var rando = Math.floor(Math.random()*5);
      this.painSounds[rando].play();
    }
  }
}

function minionShotHandler(bullet, minion){
    this.whineSound.play();
    bullet.kill();
    if(minion.blackhole){
      minion.blackhole.kill();
    }
    minion.damage(1);
    this.minion = new Dogvasion.Minion(); 
}