var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,400);
  
  //createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,50,40);
  fixedRect=createSprite(750,200,50,200);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

function draw() {
  background("black");
  movingRect.x=movingRect.x+11;
  console.log(movingRect.x-fixedRect.x) 
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
      movingRect.x=movingRect.x-10;

  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  drawSprites();
}