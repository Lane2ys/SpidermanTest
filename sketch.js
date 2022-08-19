



var Spiderman , Venom , SpidermanImg , VenomImg , Attack1 , Attack2 , Attack1img , Attack2img
var groundImg;
var ground;
var SMSwing , SMDeath , VenomAttack , VenomMoving , VenomDeath;
var Building , BuildingSP;

var Level1 = 1;
var Level2 = 2;

var gameState = Level1;

function preload(){
SpidermanImg = loadImage("./Sprites/SpidermanStanding.png");
VenomImg = loadImage("./Sprites/VenomStanding.png");
Attack1img = loadAnimation("./Sprites/SM-attack1.png");
Attack2img = loadAnimation("./Sprites/SM-attack2.png");
VenomDeath = loadAnimation("./Animations/VenomDeath1.png","./Animations/VenomDeath2.png");
VenomMoving = loadAnimation("./Animations/VenomMoving1.png","./Animations/VenomMoving2.png","./Animations/VenomMoving3.png","./Animations/VenomMoving4.png","./Animations/VenomMoving5.png");
VenomAttack = loadAnimation("./Animations/VenomAttack1.png","./Animations/VenomAttack2.png","./Animations/VenomAttack3.png","./Animations/VenomAttack4.png","./Animations/VenomAttack5.png","./Animations/VenomAttack6.png");
SMDeath = loadAnimation("./Animations/SMDeath1.png","./Animations/SMDeath2.png","./Animations/SMDeath3.png","./Animations/SMDeath4.png");
SMSwing = loadAnimation("./Animations/SMSwing1.png","./Animations/SMSwing2.png","./Animations/SMSwing3.png","./Animations/SMSwing4.png","./Animations/SMSwing5.png",);
groundImg = loadImage("ground2.png");
Building = loadImage("Building.jpg");




 
}


function setup() {
  createCanvas(1000,900);

  Spiderman = createSprite(100,810,20,20);
  Spiderman.scale = 2;
  Spiderman.addImage("SM", SpidermanImg);
  Spiderman.addAnimation('Swing' , SMSwing);
  Spiderman.changeAnimation('Swing');
  Spiderman.velocityX = 3;

  
  
  Venom = createSprite(900,825,20,20);
  Venom.scale = 2;
  Venom.addImage("Monster", VenomImg);
  Venom.addAnimation('Move', VenomMoving);
  Venom.changeAnimation('Move');
  Venom.velocityX = -2;


  ground = createSprite(100,870,100,200);
  ground.addImage("ground",groundImg);
 
  ground.x = ground.width /2;
  ground.velocityX = -3;
  
  



 
  
  
  
}


function draw() 
{
  background(Building);
  
 if(gameState === Level1){
  ground.velocityX = -3;
  
  

 }
 
 if(ground.x < 0){
  ground.x = ground.width/2;

}

  
 
 
  drawSprites();

  if(Venom.isTouching(Spiderman)){
    Spiderman.x = 100;
    Venom.x = 900;
  }
  
}

