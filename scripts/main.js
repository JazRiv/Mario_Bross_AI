
function preload() {
	salto = loadSound("sonidos/jump.wav");
	moneda = loadSound("sonidos/coin.wav");
	fin = loadSound("sonidos/gameover.wav");
	morir = loadSound("sonidos/mariodie.wav");
	inicio = loadSound("sonidos/world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(gameConfig.screenX,gameConfig.screenY);
	canvas.parent("juego");
	// playBGMusic();
	video = createCapture(VIDEO);
	video.size(331, 300);
	video.parent("controles");
	modelo = ml5.poseNet(video, listo);
	modelo.on("pose", obtener);
	instializeInSetup(mario);
}

function draw() {
	game()
}

function listo(){
	console.log("Modelo listo");
}

function obtener(resultados){
	if (resultados.length > 0){
		nariz_x = resultados[0].pose.nose.x;
		nariz_y = resultados[0].pose.nose.y;
		console.log(resultados);
	}
}