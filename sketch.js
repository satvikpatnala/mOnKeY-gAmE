var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, rockgroup;
var score;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var time;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
 
  ground.x = ground.width / 2;
  console.log(ground.x)
FoodGroup = new Group();
  rockgroup = new Group();
}


function draw() {
  background("0");
  if (gameState===PLAY){
    bannana();
  rock();
    if (keyDown("space") && monkey.y >= 300) {
    monkey.velocityY = -12;

  }
 monkey.velocityY = monkey.velocityY + 0.8;
if(ground.x<0){
  ground.x = ground.width / 2;
}    
  ground.velocityX = -4;     
    stroke("white");
  textSize(20);
  fill("white");
  text("Score " + score,200,50)
  
  textSize(20);
  fill("black");
  time = Math.ceil(frameCount / frameRate());
  text("survival time: " + time, 150, 50);
  }
if (rockgroup.isTouching(monkey)){
    gameState = END;
    }
 if (gameState===END){
   ground.velocityX = 0;
    stroke("white");
  textSize(20);
  fill("white");
  text("Score " + score,200,50)
  
  textSize(20);
  fill("black");
   text("survival time: " + time, 150, 50);
   FoodGroup.destroyEach();
   rockgroup.destroyEach();
   text("gameover", 200,200);
   monkey.destroy();
 }
  monkey.collide(ground);

  console.log(time)


  
  //add gravity
 

  drawSprites();

}



function bannana() {
if (frameCount % 60 === 0){
   var b = createSprite(400,Math.round(random(250,200)),10,40);
    b.addImage(bananaImage);
  b.scale = 0.1
  b.velocityX = Math.round(random(-1,-5))
  b.lifetime = 400/b.velocityX;
  FoodGroup.add(b);
 
 }


 
}


function rock() {

if (frameCount % 120 === 0){
   var r = createSprite(400,330,10,40);
    r.addImage(obstacleImage);

  r.velocityX = -3
  r.lifetime = 400/r.velocityX;
  rockgroup.add(r);
 r.scale = 0.1
  rockgroup.add(r);
 }

}