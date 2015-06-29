$(document).ready(function(){
	function Element(nameID){
		this.object = $('#' + nameID);
	};
	Element.prototype = {
		get left()  { return this.object.offset().left; },
		get top()   { return this.object.offset().top; },
		get right() { return this.object.offset().left + this.object.width(); },
		get bottom(){ return this.object.offset().top + this.object.height(); },
	};

	var block = new Element('block');
	var box =   new Element('box');

	var obj = {
		x: 0,
		y: 0,

		movingLeft:  false,
		movingUp:    false,
		movingRight: false,
		movingDown:  false,

		setMovement: function(key, value){
			switch (key) {
			case 37:
				obj.movingLeft = value;
				break;
			case 38:
				obj.movingUp = value;
				break;
			case 39:
				obj.movingRight = value;
				break;
			case 40:
				obj.movingDown = value;
				break;
			}
		}
	};

	var move = {
		left:  function(){ if (block.left > box.left + 1) this.x--; },
		up:    function(){ if (block.top > box.top + 1) this.y--; },
		right: function(){ if (block.right < box.right) this.x++; },
		down:  function(){ if (block.bottom < box.bottom) this.y++; },
	};

	$(document).keydown(function(key){ obj.setMovement(key.which, true); });
	$(document).keyup(function(key){ obj.setMovement(key.which, false); });

	setInterval(function(){
		if (obj.movingLeft)  move.left.call(obj);
		if (obj.movingUp)    move.up.call(obj);
		if (obj.movingRight) move.right.call(obj);
		if (obj.movingDown)  move.down.call(obj);

		block.object.css({ top: obj.y, left: obj.x });
	}, 1);
});
