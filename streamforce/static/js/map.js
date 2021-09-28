class Game extends Phaser.Scene
{
	constructor() {
		super();
	}

	preload() {
		this.load.setBaseURL('/assets');
		this.load.spritesheet(
			'tiles', 'sprites.png', { frameWidth: 16 });
	}

	create() {
		let sprite = 0;

		const sprites = [
			this.anims.create({
				key: 'blue',
				frames: this.anims.generateFrameNumbers(
					'tiles', { frames: [354, 357, 358, 357] }),
				frameRate: 4,
				repeat: -1,
			}),
			this.anims.create({
				key: 'yellow',
				frames: this.anims.generateFrameNumbers(
					'tiles', { frames: [402, 405, 406, 405] }),
				frameRate: 4,
				repeat: -1,
			}),
			this.anims.create({
				key: 'green',
				frames: this.anims.generateFrameNumbers(
					'tiles', { frames: [450, 453, 454, 453] }),
				frameRate: 4,
				repeat: -1,
			}),
		];

		let count = 0;

		for (let i = 0; i < 270; i += 16)
			for (let j = 0; j < 480; j += 16) {
				const delay = Math.random() * 1000;
				const choice = sprites[Math.floor(Math.random() * sprites.length)];

				this.add.sprite(j, i, 'tiles', choice.frames[0].textureFrame)
					.setOrigin(0, 0)
					.playAfterDelay(choice, delay);
				count++;
			}

		console.log(`${count} sprites added to scene`);
	}
}

const config = {
	type: Phaser.AUTO,
	width: 480,
	height: 270,
	scene: [ Game ],
};

const game = new Phaser.Game(config);
