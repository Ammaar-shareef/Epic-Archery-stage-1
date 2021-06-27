const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var compBase, playerBase;
var computer, player;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   compBase = new ComputerBase(windowWidth-300,windowHeight-150,200,200);
   playerBase = new PlayerBase(windowWidth-1000,windowHeight-150,200,200);
   player = new Player(windowWidth-1000,windowHeight-320,80,200);
   computer = new Player(windowWidth-300,windowHeight-320,80,200);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   compBase.display();
   playerBase.display();
  
   //display Player and computerplayer
   player.display();
   computer.display();

}
