const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particle=[];
var plinkos=[];
var division=[];

var divisionHeight=300;



function setup() {
  createCanvas(500,800);
  engine=Engine.create();
  world=engine.world;
  ground=Bodies.rectangle(250,780,500,50,{isStatic:true});
  
  World.add(world,ground);

  for(var k =0; k <=width;k =k+80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75,10));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175,10));
  }
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,275,10));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,375,10));
  }
 
  }


function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,500,20);
  if(frameCount%60===0){
    particle.push(new Particle(random(20,350),10,10));
  }
 
  for (var j=0;j<particle.length;j++){
    particle[j].display();
  }
  for (var k=0;k<division.length;k++){
    division[k].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  drawSprites();
}