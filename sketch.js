const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world;
var engine;
var ground;
function setup(){
 createCanvas(600,600); 
 engine = Engine.create ();
 world = engine.world;
 // Matter.Bodies.rectangle(x, y, width, height, [options])
 var options = {isStatic: true}
 ground = Bodies.rectangle(300,500,600,30,options);
 console.log(ground);
 World.add(world,ground);
}

function draw(){
   background("cyan");
   Engine.update(engine);
rectMode(CENTER);
   rect(ground.position.x,ground.position.y,600,30);
}