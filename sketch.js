
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;
  

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  monkey = createSprite(width-width/1.1,height-height/5,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.125;
  
  ground = createSprite(width,height-height/6,900,15);
  ground.shapeColor="green";
  ground.velocityX=-5;
  ground.x=ground.width/2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

}


function draw() {
  background("white");
  
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time : "+survivalTime,100,50);
    
  bananas();
  obstacles();
  
  if(ground.x>0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")&&monkey.y>height/3){
    monkey.velocityY=-18;
  }
  monkey.velocityY=monkey.velocityY+1;
  
  monkey.collide(ground);

  drawSprites();
}

function bananas(){
  if(frameCount%80===0){
    banana = createSprite(width,random(height/4,height/2),10,10);
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-5;
    banana.lifetime=200;
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(width,height/1.35,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.18;
    obstacle.velocityX=-5;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  }
}


