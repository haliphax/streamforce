class Game extends Phaser.Scene {
	constructor() {
		super();
	}

	create() {
		let sprite = 0;

		const sprites = [
			this.anims.create({
				key: 'blue',
				frames: this.anims.generateFrameNumbers(
					'tiles', { frames: [354, 357, 358, 357] }),
				frameRate: 6,
				repeat: -1,
			}),
			this.anims.create({
				key: 'yellow',
				frames: this.anims.generateFrameNumbers(
					'tiles', { frames: [402, 405, 406, 405] }),
				frameRate: 6,
				repeat: -1,
			}),
			this.anims.create({
				key: 'green',
				frames: this.anims.generateFrameNumbers(
					'tiles', { frames: [450, 453, 454, 453] }),
				frameRate: 6,
				repeat: -1,
			}),
		];

		let count = 0;

		for (let i = 0; i < 1080; i += 64)
			for (let j = 0; j < 1920; j += 64) {
				const delay = Math.random() * 1000;
				const choice = sprites[Math.floor(Math.random() * sprites.length)];

				this.add.sprite(j, i, 'tiles', choice.frames[0].textureFrame)
					.setOrigin(0, 0)
					.setScale(4)
					.playAfterDelay(choice, delay);
				count++;
			}

		console.log(`${count} sprites added to scene`);
	}

	preload() {
		this.load.setBaseURL('/assets');
		this.load.spritesheet(
			'tiles', 'sprites.png', { frameWidth: 16 });
	}
}

const game = new Phaser.Game({
	height: 1080,
	pixelArt: true,
	scene: [Game],
	type: Phaser.AUTO,
	width: 1920,
});
