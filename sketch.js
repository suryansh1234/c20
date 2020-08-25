var hectangle,poke;

function setup() {
  createCanvas(800,400);
  
  hectangle=createSprite(200,100,60,80);
  poke=createSprite(30,50,60,90);
  hectangle.shapeColor="yellow";
  poke.shapeColor="green";

}

function draw() {
  background(0);  
  drawSprites();
  poke.x=mouseX;
poke.y=mouseY;
if(hectangle.x-poke.x<hectangle.width/2+poke.width/2&&
  poke.x-hectangle.x<hectangle.width/2+poke.width/2&&
  hectangle.y-poke.y<hectangle.height/2+poke.height/2&&
  poke.y-hectangle.y<hectangle.height/2+poke.height/2){
  hectangle.shapeColor="red";
  poke.shapeColor="red";
}else{
  hectangle.shapeColor="violet"
  poke.shapeColor="violet";
}

}