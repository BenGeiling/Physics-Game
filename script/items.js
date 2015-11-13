//Items
function shovel(object) {
	return {
		state: 1,
		name: 'shovel',
		oldX: object.crosshair.oldX,
		oldY: object.crosshair.oldY,
		X: object.crosshair.oldX,
		Y: object.crosshair.oldY,
		vX: Math.round((object.crosshair.X-(object.X))/2),
		vY: Math.round((object.crosshair.Y-(object.Y))/2),
		mass: 0,
		friction: 0,
		reload: 0,
		ammo: false,
		totalAmmo: false,
		power: 1,
		damage: 1,
		explodeImpact: true,
		range: BLOCK_SIZE,
		color: 'none',
		borderColor: 'none',
		sizeX: 1,
		sizeY: 1,
		stage: stageForeground,
		type: 'projectile'
	};
}

function missile(object) {
	return {
		state: 1,
		name: 'missile',
		oldX: object.crosshair.oldX,
		oldY: object.crosshair.oldY,
		X: object.crosshair.oldX,
		Y: object.crosshair.oldY,
		vX: Math.round((object.crosshair.X-(object.X))/2),
		vY: Math.round((object.crosshair.Y-(object.Y))/2),
		mass: 0,
		friction: 0,
		reload: 2000,
		ammo: 5,
		totalAmmo: 5,
		power: BLOCK_SIZE*3,
		damage: 3,
		explodeImpact: true,
		range: 2000,
		color: 'black',
		borderColor: 'none',
		sizeX: 6,
		sizeY: 6,
		stage: stageForeground,
		type: 'projectile'
	};
}

function gun(object) {
	return {
		state: 1,
		name: 'gun',
		oldX: object.crosshair.oldX,
		oldY: object.crosshair.oldY,
		X: object.crosshair.oldX,
		Y: object.crosshair.oldY,
		vX: Math.round((object.crosshair.X-(object.X))/2),
		vY: Math.round((object.crosshair.Y-(object.Y))/2),
		mass: 0,
		friction: 0,
		reload: 300,
		ammo: 10,
		totalAmmo: 10,
		power: 3,
		damage: 2,
		explodeImpact: true,
		range: 2000,
		color: 'black',
		borderColor: 'none',
		sizeX: 2,
		sizeY: 2,
		stage: stageForeground,
		type: 'projectile'
	};
}

function cannon(object) {
	return {
		state: 1,
		name: 'cannon',
		oldX: object.crosshair.oldX,
		oldY: object.crosshair.oldY,
		X: object.crosshair.oldX,
		Y: object.crosshair.oldY,
		vX: Math.round((object.crosshair.X-(object.X))/2),
		vY: Math.round((object.crosshair.Y-(object.Y))/2),
		mass: 1,
		friction: 1,
		reload: 1000,
		ammo: 3,
		totalAmmo: 3,
		power: BLOCK_SIZE*5,
		damage: 1,
		explodeImpact: true,
		range: 2000,
		color: 'black',
		borderColor: 'none',
		sizeX: 4,
		sizeY: 4,
		stage: stageForeground,
		type: 'projectile'
	};
}

function explosive(object) {
	return {
		state: 1,
		name: 'explosive',
		oldX: object.crosshair.oldX,
		oldY: object.crosshair.oldY,
		X: object.crosshair.oldX,
		Y: object.crosshair.oldY,
		vX: Math.round((object.crosshair.X-(object.X))/3),
		vY: Math.round((object.crosshair.Y-(object.Y))/3),
		mass: 2,
		friction: 1,
		reload: 1000,
		ammo: 3,
		totalAmmo: 3,
		power: BLOCK_SIZE*5,
		damage: 1,
		explodeImpact: false,
		range: 2000,
		timer: 2000,
		color: 'black',
		borderColor: 'none',
		sizeX: 4,
		sizeY: 4,
		stage: stageForeground,
		type: 'projectile'
	};
}
