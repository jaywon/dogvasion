var Dogvasion = Dogvasion || {};
Dogvasion.game = new Phaser.Game(800, 600, Phaser.AUTO, '');
Dogvasion.game.state.add('Boot', Dogvasion.Boot);
Dogvasion.game.state.add('Preload', Dogvasion.Preload);
Dogvasion.game.state.add('Game', Dogvasion.Game);
Dogvasion.game.state.start('Boot');