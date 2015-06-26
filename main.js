$(document).ready(function(){

	var box = $('#box');

	var ratio = 10;

	var obj = {
		x: 1,
		y: 1,
		
		get left(){ return this.x * ratio; },
		get top(){ return this.y * ratio; },
		get right(){ return this.x * ratio + $('#block').width(); },
		get bottom(){ return this.y * ratio + $('#block').height(); }
	};

	var bond = {
		get left(){ return box.offset().left; },
		get top(){ return box.offset().top; },
		get right(){ return box.width(); },
		get bottom(){ return box.height(); }
	};

	var move = {
		37: function(){ if (this.left - ratio > bond.left) this.x--; },
		38: function(){ if (this.top - ratio > bond.top) this.y--; },
		39: function(){ if (this.right < bond.right) this.x++; },
		40: function(){	if (this.bottom < bond.bottom) this.y++; }
	};

	$(document).keydown(function(key){
		move[key.which].call(obj);

		$('#block').offset({ left: obj.x * ratio, top: obj.y * ratio });
	});
});
