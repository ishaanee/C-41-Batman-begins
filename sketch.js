const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var random;

var Thunder, thunder_1,thunder_2,thunde_3,thunder_4;
var thunderFrame = 0;


function preload(){
 
   thunder_1 = loadImage("images/thunderbolt/1.png");
   thunder_2 = loadImage("images/thunderbolt/2.png");
   thunder_3 = loadImage("images/thunderbolt/3.png");
   thunder_4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   var canvas = createCanvas(500, 700);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);
   for(var i = 0; i < maxDrops; i++){
      drops.push(new createDrops(random(0,500), random(0,500)));
   }
}

function draw(){
   Engine.update(engine);
   background(night); 
    
   rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(random){
            case 1: Thunder.addImage(thunder_1);
            break;
            case 2: Thunder.addImage(thunder_2);
            break; 
            case 3: Thunder.addImage(thunder_3);
            break;
            case 4: Thunder.addImage(thunder_4);
            break;
            default: break;
        }
        Thunder.scale = 0.5;
    }

    if(thunderFrame + 10 === frameCount && Thunder){
        Thunder.destroy();
    }


   umbrella.display();

   for(var i = 0; i < maxDrops; i++){
      drops[i].display();
      drops[i].update();
  }

   drawSprites();
}   

