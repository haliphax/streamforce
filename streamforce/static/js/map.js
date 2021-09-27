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

		this.anims.create({
			key: 'walkies',
			frames: this.anims.generateFrameNumbers(
				'tiles', { frames: [402, 405, 406, 405] }),
			frameRate: 4,
			repeat: -1,
		});

		for (let i = 0; i < 270; i += 16)
			for (let j = 0; j < 480; j += 16) {
				const delay = Math.random() * 1000;

				this.add.sprite(j, i).setOrigin(0, 0).playAfterDelay('walkies', delay);
			}
	}
}

const config = {
	type: Phaser.AUTO,
	width: 480,
	height: 270,
	scene: [ Game ],
};

const game = new Phaser.Game(config);
