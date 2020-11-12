const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7;box8,box9,box10,box11,box12;box13,box14,box15;box16;
var ground1,ground2,lGround;
var hexa;sling;hexaImg;

function preload()
{
	var hexaImg = loadImage("hexagon.png");
}
function setup() {
	createCanvas(1050, 500);
	engine = Engine.create();
	world = engine.world;
	var options={isStatic:true}
	ground1 = new Ground(500,400,400,10);
	lGround = new Ground(0,500,3000,30);

	box1 = new Box(500,240,30,40,rgb(128,128,128));
	box2 = new Box(490,260,30,40,rgb(63,224,208));
	box3 = new Box(500,260,30,40,rgb(63,224,208));
	box4 = new Box(510,260,30,40,rgb(63,224,208));
	box5 = new Box(480,280,30,40,rgb(255,192,203));
	box6 = new Box(490,280,30,40,rgb(255,192,203));
	box7 = new Box(500,280,30,40,rgb(255,192,203));
	box8 = new Box(510,280,30,40,rgb(255,192,203));
	box9 = new Box(520,280,30,40,rgb(255,192,203));
	box10 = new Box(470,300,30,40,rgb(135,206,234));
	box11 = new Box(480,300,30,40,rgb(135,206,234));
	box12 = new Box(490,300,30,40,rgb(135,206,234));
	box13 = new Box(500,300,30,40,rgb(135,206,234));
	box14 = new Box(510,300,30,40,rgb(135,206,234));
	box15 = new Box(520,300,30,40,rgb(135,206,234));
	box16 = new Box(530,300,30,40,rgb(135,206,234));

	hexa = new Poly(100,100,50,40);
	sling = new Chain(hexa.body,{x:200,y:100});

	Engine.run(engine);
}

function draw() {
	background(0);

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();

	ground1.display();
	lGround.display();
  	hexa.display();
 	sling.display();
 
  	drawSprites();
}
function mouseDragged()
{
    Matter.Body.setPosition(hexa.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  sling.released();
}
function keyPressed()
{
	if(keyCode == 32)
	{
			Matter.Body.setPosition(hexa.body,{x:100,y:400});
			sling.attach(hexa.body);
	}
}