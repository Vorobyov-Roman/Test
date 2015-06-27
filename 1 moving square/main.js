$(document).ready(function(){
	var box = $('#box');
	var block = $('#block');

	var ratio = box.height() / 100;
	var step = 1;

	var obj = {
		x: 0,
		y: 0,
		
		get left(){ return this.x * ratio; },
		get top(){ return this.y * ratio; },
		get right(){ return this.x * ratio + block.width(); },
		get bottom(){ return this.y * ratio + block.height(); }
	};

	var bound = {
		get left(){ return box.position().left; },
		get top(){ return box.position().top; },
		get right(){ return box.width(); },
		get bottom(){ return box.height(); }
	};

	var move = {
		37: function(){ if (this.x >= step) this.x -= step; },
		38: function(){ if (this.y >= step) this.y -= step; },
		39: function(){ if (this.right + step * ratio < bound.right) this.x += step; },
		40: function(){	if (this.bottom + step * ratio < bound.bottom) this.y += step; }
	};

	$(document).keydown(function(key){
		try {
			move[key.which].call(obj);
			block.css({ top: obj.top, left: obj.left });
		} catch(e){
			//exception is thrown due to handler of keypress being non existent
			//this is an expected behaviour
		}
	});
});
