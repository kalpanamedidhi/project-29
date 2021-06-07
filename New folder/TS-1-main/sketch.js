const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 b1 = new Block(300,275,30,40)
 b2 = new Block(330,275,30,40)
 b3 = new Block(360,275,30,40)
 b4 = new Block(390,275,30,40)
 b5 = new Block(420,275,30,40)
 b6 = new Block(450,275,30,40)
 b7 = new Block(480,275,30,40)
 b8 = new Block(300,235,30,40)
 b9 = new Block(330,235,30,40)
 b10 = new Block(360,235,30,40)
 b11 = new Block(390,235,30,40)
 b12 = new Block(420,235,30,40)
 b13 = new Block(450,235,30,40)
 b14 = new Block(330,195,30,40)
 b15 = new Block(360,195,30,40)
 b16 = new Block(390,195,30,40)
  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  fill("blue")
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("green")
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();

  b14.display();
  b15.display();
  b16.display();
  
  slingShot.display();
  
}
