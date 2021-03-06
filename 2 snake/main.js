$(document).ready(function(){
	var WEST  = 37,
	    NORTH = 38,
	    EAST  = 39,
	    SOUTH = 40;

	function Node(nextNode){
		this.domObj = $('#box').append('<div class="block"></div>');
		this.next   = nextNode || null;
	};

	var snake = {
		head: null,
		tail: null,

		position : {
			x: null,
			y: null
		},
		direction: {
			value: null,

			get: function(){
				return this.value;
			},
			set: function(newVal){
				switch (this.value){
				case WEST:
					if (newVal == EAST)
						return;
				case NORTH:
					if (newVal == SOUTH)
						return;
				case EAST:
					if (newVal == WEST)
						return;
				case SOUTH:
					if (newVal == NORTH)
						return;
				default:
					break;
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

			switch (this.direction){
			case WEST:
				this.position.x--;
				break;
			case NORTH:
				this.position.y--;
				break;
			case EAST:
				this.position.x++;
				break;
			case SOUTH:
				this.position.y++;
				break;
			default:
				break;
			}

			this.head.domObj.css({ top: this.position.y * 30, left: this.poition.x * 30 });
		},

		init: function(){
			this.tail = new Node();
			this.head = this.tail;
//			this.tail.domObj.css({ top: '30px', left: '0px' });

			this.position = { x: 0, y: 0 };
			this.direction = EAST;
		}
	};

	snake.init();

	$(document).keydown(function(key){
		if (key.which >= WEST && key.which <= SOUTH)
			snake.changeDirection(key.which);
	});

//	setInterval(snake.move(false), 500);
});
