
var monkey; 
var monkey_running;
var banana ,bananaImage,bananaGroup;
var obstacle,obstacleImage,obstacleGroup;
var survivalTime =0;
var ground;

function preload(){
  
  monkey_running =          loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  
  createCanvas(400,400);
  
  ground=createSprite(200,350,900,15);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  ground.shapeColor=("green");
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
  
  background("lightBlue");
  
  //score
  stroke=("white");
  fill=("white");
  textSize=20;
  text("Survival Time: "+ survivalTime, 250,50);
  survivalTime = survivalTime + Math.round(getFrameRate()/60);

  //infinite ground
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  //collide with the ground
  monkey.collide(ground);
  
  //space control
  if(keyDown("space")){
    monkey.velocityY=-12;
  }  
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  Banana();
  
  spawnObstacles();
  
  drawSprites();
}

function Banana(){
 if (frameCount % 80 === 0) {
  banana=createSprite(410,200,20,20);
  banana.addImage(bananaImage);
  banana.y = Math.round(random(120,200));
  banana.scale=0.1
  banana.velocityX=-2; 
  banana.lifetime=220;
  bananaGroup.add(banana);  
 }
  
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
  var obstacle = createSprite(410,307);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX =-2;
  obstacleGroup.add(obstacle);  
  obstacle.lifetime=220
 }
}