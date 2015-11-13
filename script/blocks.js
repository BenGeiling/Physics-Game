//Blocks
function createBlock(index, X, Y, color, breakable) { //index, X, Y, color, breakable
	block[index] = {
		state: 1,
		oldX: X,
		oldY: Y,
		X: X,
		Y: Y,
		vX: 0,
		vY: 0,
		power: 1,
		timer: 20,
		damage: 1,
		color: color,
		borderColor: 'black',
		sizeX: BLOCK_SIZE,
		sizeY: BLOCK_SIZE,
		stage: stageForeground,
		type: 'block',
		breakable: breakable
	};
}
