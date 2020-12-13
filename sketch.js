var car,wall;
var speed,weight;
var info;

function setup() {
  createCanvas(1600,400);
  speed  = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  car.velocityX = speed;
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background("black");
  if(wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    info = Math.round(deformation);
    if(deformation < 100) {
      car.shapeColor = rgb(0,255,0);
      fill(rgb(0,255,0));
      textSize(30);
      text("Deformation:"+info,800,200);
    }
    if(deformation < 180&& deformation > 100) {
      car.shapeColor = rgb(230,230,0);
      fill(rgb(230,230,0));
      textSize(30);
      text("Deformation:"+info,800,200);
    }
    if(deformation > 180) {
      car.shapeColor = rgb(255,0,0);
      fill(rgb(255,0,0));
      textSize(30);
      text("Deformation:"+info,800,200);
    }
  }


  drawSprites();
}