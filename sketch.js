
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,tree1,mango1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1=new Ground(width/2,600,width,20);
   tree1=new Tree (1050,580);
   mango1=new Mango(1100,100,30);

	Engine.run(engine);
  
}


function draw() {
  
  background(166,173,173);
  rectMode(CENTER);
  Engine.update(engine);
  ground1.display();
  tree1.display();
  mango1.display();
  drawSprites();
 
}



