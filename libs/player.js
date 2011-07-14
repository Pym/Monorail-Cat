var RIGHT = "right";
var LEFT = "left";
var UP = "up";
var DOWN = "down";

/**
 * class Player 
 * 
 * keyboard bindings
 * damned the cat MUST control the player !!! 
 * 
 * @author esion
 * @param name string
 * @param keymap json
 * @param cat Cat
 */
function Player(name, keymap, cat){
	/**
	 * Knock, knock
	 */
	this.name = name;
	
	/**
	 * keyboard
	 */
	this.keymap = keymap;
	
	/**
	 * T3h r33ty cat
	 */
	this.cat = cat;
	
	/**
	 * list of pressed keys
	 */
	this.keys_stack = new Array();
	
	/**
	 * obviously obvious method
	 */
	this.initialize();
}

Player.prototype = {
	
	/**
	 * Oley initilaize the player lif' bar on ze Gui
	 */
	initialize: function(){
		UI.addPlayer(this);
	},

	/**
	 * cat getter
	 */
	getCat : function(){
		return this.cat;
	},
	
	/**
	 * capture keys
	 * @param keyCode string (@see LEFT, RIGHT ...)
	 */
	keyDown : function (keyCode) {
		this.catManipulation(keyCode);
	},
	
	/**
	 * Reset captured key
	 * @param keyCode string (@see LEFT, RIGHT ...)
	 */
	keyUp : function(keyCode) {
		this.catManipulation(keyCode, true);
	},
	
	/**
	 * property setter turn or action depends on given keymap
	 * @param keyCode string (@see LEFT, RIGHT ...)
	 * @param reset boolean - user has releazed deh foacking button on meh shouldr
	 */
	catManipulation : function(keyCode, reset){
		for(key in this.keymap){
			if(this.keymap[key] == keyCode){
				//---------------------
				//setting turn property
				if(key == LEFT || key == RIGHT || key == UP || key == DOWN){
					if(!reset) {
						//stack key and set direction
						this.keys_stack.push(key);
						this.setCatDirection(key);
						
					} else {
						//remove stacked key
						for(k in this.keys_stack){
							if(this.keys_stack[k] == key){
								this.keys_stack.splice(k, 1);
							}
						}
						
						//set latest direction if t3h noob is holding a key, else set no direction
						if(this.keys_stack.length > 0){
							this.setCatDirection(this.keys_stack[this.keys_stack.length - 1]);
						}else{
							// Don't set it to null to save last desired direction
							// this.setCatDirection(null);
						}
					}
				}
				//---------------------
				//action property case
				else{
					if(!reset){
						this.cat.doAction(key);
					}else{
						this.cat.doAction(NONE);
					}
						
				}
			}
		}
	},
	
	
	/**
	 * proxy method for cat manipulation
	 * @param key - string direction
	 */
	setCatDirection : function(key){
		switch(key) {
			case LEFT:	this.cat.setDesiredDirection(WEST);	break;
			case RIGHT:	this.cat.setDesiredDirection(EAST);	break;
			case UP:	this.cat.setDesiredDirection(NORTH);	break;
			case DOWN:	this.cat.setDesiredDirection(SOUTH);	break;
			
			default: 	this.cat.setDesiredDirection(NONE);	break;
		}
	}		
};
