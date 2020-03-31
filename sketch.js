//Namespacing for physics engine.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Creates a variable for Engine and World.
var engine,world;

function setup() {
  //Creates the canvas.
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  //ground prevents the castle from falling down.
  ground = new Ground(500,605,1000,10,"brown");
  //Prevents the flag from falling down.
  ground1 = new Ground(560,230,125,30,"black");
  //Left lower building.
  stick1 = new Sticks(275,580,400,40,"blue");
  stick2 = new Sticks(275,540,400,40,"blue");
  stick3 = new Sticks(275,500,400,40,"blue");
  stick4 = new Sticks(275,460,400,40,"blue");

  //Right lower building.
  stick5 = new Sticks(725,580,400,40,"blue");
  stick6 = new Sticks(725,540,400,40,"blue");
  stick7 = new Sticks(725,500,400,40,"blue");
  stick8 = new Sticks(725,460,400,40,"blue");

  //Left upper building.
  stick9 = new Sticks(375,420,200,40,"red");
  stick10 = new Sticks(375,380,200,40,"red");

  //Right upper buinding.
  stick11 = new Sticks(625,420,200,40,"red");
  stick12 = new Sticks(625,380,200,40,"red");

  //Lower flag.
  stick13 = new Sticks(560,225,125,30,"green");
  //Middle flag
  stick14 = new Sticks(560,195,125,30,"white");
  //Upper flag
  stick15 = new Sticks(560,165,125,30,"orange");
}

function draw() {
  //Changes the background colour to black.
  background(0);

  //Updates the Engine.
  Engine.update(engine);

  //Displays the castle
  ground.display();
  ground1.display();
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  stick8.display();
  stick9.display();
  stick10.display();
  stick11.display();
  stick12.display();
  stick13.display();
  stick14.display();
  stick15.display();

  //Increases line thickness.
  strokeWeight(10);
  //Draws the lines.
  stroke("yellow");
  line(400,360,500,265);
  stroke("purple");
  line(600,360,500,265);
  stroke("pink");
  line(400,360,600,360);
  stroke("white");
  line(500,265,500,125);
}