//Touch Stuff
function onTouchStart(e) {
	for(var i = 0; i < e.changedTouches.length; i++) {
		var touch = e.changedTouches[i];

		if((leftTouchID < 0) && (touch.clientX < halfWidth)) { //One finger left
			leftTouchID = touch.identifier;
			leftTouchStartPos.X = touch.clientX;
			leftTouchStartPos.Y = touch.clientY;
			leftTouchPos.X = leftTouchStartPos.X;
			leftTouchPos.Y = leftTouchStartPos.Y;
			leftVector.X = 0;
			leftVector.Y = 0;
			console.log('l1');
			continue;
		} //else {
		//	console.log('l2'); //Two fingers left
	//	}

		if((rightTouchID < 0) && (touch.clientX > halfWidth)) { //One finger right
			rightTouchID = touch.identifier;
			rightTouchStartPos.X = touch.clientX;
			rightTouchStartPos.Y = touch.clientY;
			rightTouchPos.X = rightTouchStartPos.X;
			rightTouchPos.Y = rightTouchStartPos.Y;
			rightVector.X = 0;
			rightVector.Y = 0;
			console.log('r1');
			continue;
		}// else {
	//		console.log('r2'); //Two fingers right
	//	}
	}
	touches = e.touches;
}

function onTouchMove(e) {
	 // Prevent the browser from doing its default thing (scroll, zoom)
	e.preventDefault();

	for(var i = 0; i < e.changedTouches.length; i++) {
		var touch = e.changedTouches[i];
		if(leftTouchID == touch.identifier) {
			leftTouchPos.X = touch.clientX;
			leftTouchPos.Y = touch.clientY;
			leftVector.X = leftTouchPos.X;
			leftVector.Y = leftTouchPos.Y;
			leftVector.X -= leftTouchStartPos.X;
			leftVector.Y -= leftTouchStartPos.Y;
			break;
		}
		if(rightTouchID == touch.identifier) {
			rightTouchPos.X = touch.clientX;
			rightTouchPos.Y = touch.clientY;
			rightVector.X = rightTouchPos.X;
			rightVector.Y = rightTouchPos.Y;
			rightVector.X -= rightTouchStartPos.X;
			rightVector.Y -= rightTouchStartPos.Y;
			break;
		}
	}

	touches = e.touches;
}

function onTouchEnd(e) {
   	touches = e.touches;

	for(var i = 0; i < e.changedTouches.length; i++) {
		var touch = e.changedTouches[i];
		if(leftTouchID == touch.identifier) {
			leftTouchID = -1;
			leftVector.X = 0;
			leftVector.Y = 0;
			break;
		}
		if(rightTouchID == touch.identifier) {
			rightTouchID = -1;
			rightVector.X = 0;
			rightVector.Y = 0;
			break;
		}
	}

}
