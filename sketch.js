const Engine=Matter.Engine;
const World=Matter.World;
//const Events=Matter.Events;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var fly, flyImg, flyGroup;
var frog, frogImgClose, frogImgOpen, frogImg;
var backgroundImg;
var spider, spiderImg, spiderGroup;
var tongue1;

function preload(){
  
  backgroundImg=loadImage("swamp.jpg");
  backgroundImg.scale=0.1;
  
  flyImg=loadImage("fly.png");
  
  spiderImg=loadImage("spider.png");
  
  frogImg=loadAnimation("frog1.png" ,"frog2.png");
  
}

function setup(){
  createCanvas(700,600);
  
  engine=Engine.create();
  world=engine.world;
  
  frog=new Frog(350,500);
  
  flyGroup=new Group();
  spiderGroup=new Group();
  
  tongue1 = new SlingShot(frog.body, tongue1.body);
}

function draw(){
  background(backgroundImg);
  
  Engine.update(engine);
  
  frog.display();
  tongue1.display();
  spiders();
  flies();
  
  drawSprites();
  
}

function flies(){
  
  if (frameCount % 60 === 0) {
  fly=createSprite(200,100,30,30);
  fly.y=Math.round(random(600,100));
  fly.x=Math.round(random(100,600));
  fly.scale=0.04;
  fly.addImage(flyImg);
  fly.lifetime=70;
  
  flyGroup.add(fly);
  }
  
}

function spiders(){
  
  if(frameCount % 130 === 0){
    spider=createSprite(300,100,30,30);
    spider.y=Math.round(random(600,100));
    spider.x=Math.round(random(100,600));
    spider.scale=0.3;
    spider.addImage(spiderImg);
    spider.lifetime=90;
    
    spiderGroup.add(spider);
  }
}