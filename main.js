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

	var move = {
		37: function(){ if (this.x > bond.left) this.x--; },
		38: function(){ if (this.y > bond.up) this.y--; },
		39: function(){ if (this.x < bond.right) this.x++; },
		40: function(){ if (this.y < bond.down) this.y++; }
	};

	$(document).keydown(function(key){
		move[key.which].call(obj);

		$('#block').offset({ left: obj.x * step, top: obj.y * step });
	});
});
