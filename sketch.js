var movingRect,fixedRect;
var gameObject1,gameObject2;





function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400,800,80,30);

  fixedRect=createSprite(400,100,50,80);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  

 gameObject1=createSprite(200,450,50,50);
  gameObject1.shapeColor="yellow";
  gameObject2=createSprite(300,500,50,50);
  gameObject2.shapeColor="yellow";
  movingRect.velocityY=-5;
  fixedRect.velocityY=+5;
}

function draw() {
  background(0,0,0);
  gameObject2.x=World.mouseX;
  gameObject2.y=World.mouseY;
 if(isTouching(gameObject2,gameObject1))
  {
   gameObject2.shapeColor="red";
    gameObject1.shapeColor="red";
  }
  else
  {

    gameObject2.shapeColor="yellow";
    gameObject1.shapeColor="yellow";
  }
  bounceOff(movingRect,fixedRect);
 drawSprites();
}

















