
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
    engine = Engine.create();
    world = engine.world;

    dustbinObj = createSprite(1200, 650);

    paperObject = createSprite(200, 450, 40);

    groundObject = createSprite(800, 670, 20);

	dustbinObj=new dustbin(1200,650);
    World.add(world, dustbinObj);

	paperObject=new paper(200,450,40);
    World.add(world, paperObject);

	groundObject=new ground(width/2,670,width,20);
    World.add(world, groundObject);
	//Create a Ground
	

	var Render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





