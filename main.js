$(document).ready(function(){

	var obj = {
		x: 1,
		y: 1
	};

	var step = 10;

	var bond = {
		left: 	0,
		up: 	0,
		right: 	($(document).width() - $('#obj').width()) / step,
		down: 	($(document).height() - $('#obj').height()) / step
	};

	var keycode = {
		left:	37,
		up: 	38,
		right: 	39,
		down: 	40
	};

	function moveLeft(){
		if (this.x > bond.left) this.x--;
	}
	function moveUp(){
		if (this.y > bond.up) this.y--;
	}
	function moveRight(){
		if (this.x < bond.right) this.x++;
	}
	function moveDown(){
		if (this.y < bond.down) this.y++;
	}

	$(document).keydown(function(key){
		if (key.which == keycode.left) moveLeft.call(obj);
		else if (key.which == keycode.up) moveUp.call(obj);
		else if (key.which == keycode.right) moveRight.call(obj);
		else if (key.which == keycode.down) moveDown.call(obj);

		$('#block').offset({ left: obj.x * step, top: obj.y * step });
	});
});
