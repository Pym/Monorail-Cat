var FRAMERATE = 30;

function startGame() {
    var surface = document.getElementById("monorail-cat");
    var gs 		= new JSGameSoup(surface, FRAMERATE);
    var game 	= new Game(gs);
    gs.launch();
}

function Game(gs) {
	this.keymap_player_1 = {
		up: 90,		// z
		down: 83,	// s
		left: 81, 	// q
		right: 68, 	// d
		action1: 32	// space
	};

	this.keymap_player_2 = {
		up: 38,		// up
		down: 40,	// down
		left: 37, 	// left
		right: 39, 	// right
		action1: 13	// enter
	};

	var tilemap = new TileMap(document.getElementById("tileMap"));
	var map = new Map(tilemap);

tilemap.loadCsv("144;66;66;219;66;66;9\n1056;144;66;2886;66;9;1056\n1056;1056;144;66;9;1056;1056\n1056;3504;1581;0;3504;1581;1056\n1056;1056;2304;66;516;1056;1056\n1056;2304;66;219;66;516;1056\n2304;66;66;2886;66;66;516\n");

//tilemap.loadCsv("144;66;66;66;66;66;9\n1056;144;66;66;66;9;1056\n1056;2304;9;144;9;1056;1056\n1056;144;516;1056;1056;1056;1056\n2304;516;0;1056;1056;1056;1056\n144;66;66;516;2304;516;1056\n2304;66;66;66;66;66;516\n");
	tilemap.draw(document.getElementById("tileMap"));
	
	var players = [
		new Player("player 1", this.keymap_player_1),
		new Player("player 2", this.keymap_player_2)
	];
	
	gs.addEntity(players[0]);
	gs.addEntity(players[1]);
	gs.addEntity(new Cat(map, players[0], RED, 0, 0, SOUTH));
	gs.addEntity(new Cat(map, players[1], BLUE, 6, 6, NORTH));

	gs.addEntity(new MapItem("test", map, 3, 2));
}
