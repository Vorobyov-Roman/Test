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
		x:	0,
		y:	0
	};

	var move = {
		37:	function(){ if(block.left > box.left) this.x-- },
		38:	function(){ if(block.top > box.top) this.y-- },
		39:	function(){ if(block.right < box.right) this.x++ },
		40:	function(){ if(block.bottom < box.bottom) this.y++ },
	};

	$(document).keydown(function(key){
		try {
			move[key.which].call(obj);
			block.object.css({ top: obj.y, left: obj.x });
		} catch(e) {
			//"handle" other keys
		}
	});
});
