
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper(20,600,15);
  
ground = new Ground (800,650,10000, 20);
box1= new Box (700,600,10,80);
box2 = new Box (600,600,10,80);
box3 = new Box (650,635,90,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  paper.display();
  stroke ("white");
  ground.display();
  stroke ("white");
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}

function keyPressed (){

  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position, {x:9, y:-9});
  }
}



