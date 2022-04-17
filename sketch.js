const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ground;
var left;
var right;
var top_wall;
var ball;

var uparrow;
var rightarrow;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options
  ball_options = {
    restitution:0.05,
   // isStatic:false
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  uparrow = createImg("up.png");
  uparrow.position(220,30);
  uparrow.size(50,50);
  uparrow.mouseClicked(vforce);

  rightarrow = createImg("right.png");
  rightarrow.position(20,30);
  rightarrow.size(50,50);
  rightarrow.mouseClicked(hforce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  
}
function hforce(){
  Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vforce(){
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}