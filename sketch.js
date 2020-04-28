const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var world,engine;
var triangle,triangleimg;
function preload(){
  triangleimg=loadImage("triangle.png")
  triangleimg2=loadImage("triangle2.png")

}
function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(1400,650);
square=createSprite(610,110,80,80);
square.shapeColor="yellow";
square=createSprite(810,110,80,80);
square.shapeColor="yellow";
triangle=createSprite(315,103,40,40);
triangle.addImage("triangle",triangleimg2);
triangle=createSprite(415,103,40,40);
triangle.addImage("triangle",triangleimg2);
triangle=createSprite(517,248,40,40);
triangle.addImage("triangle",triangleimg);
triangle=createSprite(1126,247,40,40);
triangle.addImage("triangle",triangleimg);
square=createSprite(1030,110,80,80);
square.shapeColor="yellow";
rectangle=createSprite(365,400,200,500);
rectangle.shapeColor="red";
rectangle=createSprite(520,476,110,330);
rectangle.shapeColor="lightblue";
square=createSprite(820,400,500,500);
square.shapeColor="green";
rectangle=createSprite(1125,476,110,330);
rectangle.shapeColor="lightblue";
rectangle=createSprite(360,560,110,200);
rectangle.shapeColor="pink";
square=createSprite(310,300,80,80);
square.shapeColor="yellow";
square=createSprite(410,300,80,80);
square.shapeColor="yellow";
square=createSprite(660,450,80,80);
square.shapeColor="yellow";
square=createSprite(980,450,80,80);
square.shapeColor="yellow";

}

function draw() {
  Engine.update(engine);
  background(63, 72, 204);
  drawSprites();
 

 }