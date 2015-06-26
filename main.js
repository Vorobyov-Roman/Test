$(document).ready(function(){

	var obj = {
		x: 1,
		y: 1
	};

	var ratio = 10;

	var bond = {
		left: 	0,
		up: 	0,
		right: 	($(document).width() - $('#obj').width()) / ratio,
		down: 	($(document).height() - $('#obj').height()) / ratio
	};

	var move = {
		37: function(){ if (this.x > bond.left) this.x--; },
		38: function(){ if (this.y > bond.up) this.y--; },
		39: function(){ if (this.x < bond.right) this.x++; },
		40: function(){ if (this.y < bond.down) this.y++; }
	};

//	$('#box').width($(document).width() * 0.9);
//	$('#box').height($(document).height() * 0.9);

	$(document).keydown(function(key){
		move[key.which].call(obj);

		$('#block').offset({ left: obj.x * ratio, top: obj.y * ratio });
	});
});
