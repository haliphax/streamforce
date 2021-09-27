import 'https://cdn.jsdelivr.net/npm/phaser@3.15.1/dist/phaser-arcade-physics.min.js';

const config = {
	type: Phaser.AUTO,
	width: 960,
	height: 540,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: {
		preload: preload,
		create: create,
	},
};

const game = new Phaser.Game(config);

function preload() {
	this.load.setBaseURL('/assets');
	this.load.spritesheet(
		'tiles', 'sprites.png', { frameWidth: 16 });
}

function create() {
		let sprite = 0;

		for (let i = 0; i < 540; i += 16)
			for (let j = 0; j < 960; j += 16)
				this.add.image(j, i, 'tiles', sprite++).setOrigin(0, 0);
}
