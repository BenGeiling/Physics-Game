//Players
function createPlayer(index, X, Y, color) {
	player[index] = {
		state: 1, //1 = exists
		oldX: X,
		oldY: Y,
		X: X,
		Y: Y,
		vX: 0,
		vY: 0,
		mass: 1, //Gravity multiplier
		move: '', //Direction of movement pointer
		facing: 1, //1 = right 2 = left
		speed: 10, //Player speed multiplier
		ammo: {
			hud: new Array(), //Setup Ammo Graphic
			hudX: BORDER_WIDTH+2*(OBJECT_SIZE),
			hudY: BORDER_WIDTH+3*(OBJECT_SIZE),
			hudDirection: 1
		},
		health: {
			total: 10, //Total health
			current: 10, //Current health
			hud: new Array(), //Setup Health Graphic
			hudX: BORDER_WIDTH+2*(OBJECT_SIZE),
			hudY: BORDER_WIDTH+2*(OBJECT_SIZE),
			hudDirection: 1
		},
		color: color,
		originalColor: color,
		borderColor: 'black',
		sizeX: BLOCK_SIZE,
		sizeY: BLOCK_SIZE,
		stage: stageForeground,
		type: 'player',
		itemIndex: 0, //So you can scroll through items
		itemReport: false, //Shows text of item name
		item: {}, //Curent item goes here
		crosshair: { //Player crosshair
			state: 1,
			oldX: X,
			oldY: Y,
			X: X,
			Y: Y,
			oldA: 2.5,
			A: 2.5,
			color: 'white',
			borderColor: 'black',
			sizeX: 4,
			sizeY: 4,
			stage: stageForeground
		},
		text: {
			type: 'text',
			X: X,
			Y: Y,
			oldX: X,
			oldY: Y,
			color: 'rgba(200, 200, 200, 0.5)',
			borderColor: 'none',
			sizeX: 60,
			sizeY: 12,
			stage: stageForeground
		},
		timer: {
			keyPress: (new Date).getTime(),
			fire: (new Date).getTime(),
			text: (new Date).getTime(),
			item: (new Date).getTime(),
			color: 20
		},
		modifier: false
	};
}
