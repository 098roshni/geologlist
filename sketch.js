
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var option = {
	'density': 2 ,
	'friction':1.0,
	'restitution':0.5
}

var rubber;
var hammer;
var stone;
var radius;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  rubber = createSprite(700,400,radius);
  hammer = createSprite(500,200,100,50);
  stone = createSprite(100,100,200,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



