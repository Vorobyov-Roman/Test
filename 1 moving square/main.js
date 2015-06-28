$(document).ready(function(){
	function ObjectOnAPage(nameID){
		this.object = $('#' + nameID);
	};
	ObjectOnAPage.prototype = {
		get left(){ return this.object.position().left; },
		get top(){ return this.object.position().top; },
		get right(){ return this.object.position().left + this.object.width(); },
		get bottom(){ return this.object.position().top + this.object.height(); },
	};

	var block = new ObjectOnAPage('block');
	var box = new ObjectOnAPage('box');

	var obj = {
		x: 0,
		y: 0,

		movingLeft: false,
		movingUp: false,
		movingRight: false,
		movingDown: false,
	};

	var move = {
		left:  function(){ if (block.left > box.left) this.x-- },
		up:    function(){ if (block.top > box.top) this.y-- },
		right: function(){ if (block.right < box.right) this.x++ },
		down:  function(){ if (block.bottom < box.bottom) this.y++ },
	};

	$(document).keydown(function(key){
		switch (key.which) {
		case 37: obj.movingLeft = true;
			break;
		case 38: obj.movingUp = true;
			break;
		case 39: obj.movingRight = true;
			break;
		case 40: obj.movingDown = true;
			break;
		}
	});
	$(document).keyup(function(key){
		switch (key.which) {
		case 37: obj.movingLeft = false;
			break;
		case 38: obj.movingUp = false;
			break;
		case 39: obj.movingRight = false;
			break;
		case 40: obj.movingDown = false;
			break;
		}
	});

	var tick = function() {
		if (obj.movingLeft) move.left.call(obj);
		if (obj.movingUp) move.up.call(obj);
		if (obj.movingRight) move.right.call(obj);
		if (obj.movingDown) move.down.call(obj);

		block.object.css({ top: obj.y, left: obj.x });

		setTimeout(tick, 30);
	};

	tick();

//	setTimeout(function(){
//		if (obj.movingLeft) move.left.call(obj);
//		if (obj.movingUp) move.up.call(obj);
//		if (obj.movingRight) move.right.call(obj);
//		if (obj.movingDown) move.down.call(obj);
//
//		block.object.css({ top: obj.y, left: obj.x });
//	}, 30);
});
