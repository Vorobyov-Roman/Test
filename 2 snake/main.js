$(document).ready(function(){
	var WEST  = 0,
	    NORTH = 1,
	    EAST  = 2,
	    SOUTH = 3;

	function Node(){
		this.domObj = $('#box').append('<div class="block"></div>');
		this.next   = null;
	};

	var snake = {
		head: null,
		tail: null,

		direction: {
			value: null,

			get(){
				return this.value;
			},
			set(newVal){
				switch (this.value){
				case WEST:  if (newVal == EAST) return;
				case NORTH:	if (newVal == SOUTH) return;
				case EAST:  if (newVal == WEST) return;
				case SOUTH: if (newVal == NORTH) return;
				default:    break;
				}

				this.value = newVal;
			}
		},
		changeDirection: function(newDir){
			this.direction = newDir;
		},
		move: function(extend){
			if (!extend){
				this.tail.domObj.remove();
				this.tail = this.tail.next;
			}

			this.head.next = new Node();
			this.head = this.head.next;
		}
	};
});
