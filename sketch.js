const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var dustbin,ball;

function setup() {
  createCanvas(800,400);

  dustbin = new Dustbin(700,320,70,110);
  ball = new Ball(100,100);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  dustbin.display();
  ball.display();  
  drawSprites();
