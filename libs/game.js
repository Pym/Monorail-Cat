var FRAMERATE = 30;

function startGame() {
    var surface = document.getElementById("monorail-cat");
    var gs 		= new JSGameSoup(surface, FRAMERATE);
    var game 	= new Game(gs);
    gs.launch();
}

function Game(gs) {
	var c = gs.c;
	
	var map = new TileMap(document.getElementById("monorail-cat"));
	map.loadCsv("144;66;66;219;66;66;9\n1056;144;66;2886;66;9;1056\n1056;1056;144;66;9;1056;1056\n1056;3504;1581;0;3504;1581;1056\n1056;1056;2304;66;516;1056;1056\n1056;2304;66;219;66;516;1056\n2304;66;66;2886;66;66;516\n");
	
	gs.addEntity(map);
	gs.addEntity(new Player(gs));
	gs.addEntity(new Cat(map, 0, 0, SOUTH));
}