var mango1, mango2, mango3, mango4, mango5;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyIMG = loadImage("boy.png");
	treeIMG = loadImage("tree.png")
}
  

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(100, 540, 50, 100);
	boy.addImage(boyIMG);
	boy.scale = 0.1;

	tree = createSprite(600, 420, 50, 100);
	tree.addImage(treeIMG);
	tree.scale = 0.3;



	ground = new Ground(400, 600, 1000, 10);

	rock = new Rock(50, 480);

	arm = new SlingShot(rock.body, {x:50, y:480})

	mango1 = new Mango(550, 350);
	mango2 = new Mango(600, 350,);
	mango3 = new Mango(650, 350);
	mango4 = new Mango(650, 300);
	mango5 = new Mango(600, 300);


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);

  Engine.update(engine);
  
  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  ground.display();
 
  rock.display();

  dectColllide(rock, mango1);
  dectColllide(rock, mango2);
  dectColllide(rock, mango3);
  dectColllide(rock, mango4);
  dectColllide(rock, mango5)
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    hand.fly();
}

function keyPressed(){
  if (keyCode === 32){
    Matter.body.setPosition(rock.body, {x:50, y:480})
    hand.attach(rock.body)

  }
    


}

function dectColllide(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	rockBodyPosition = lstone.body.position;  
  
	var distance = dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= lmango.r + lstone.r) {
  
	  Matter.body.setStatic(lmango.body, false)
  
	}
	
  }

