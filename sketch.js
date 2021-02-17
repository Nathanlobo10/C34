const Engine =  Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld
var ground 
function setup(){
 createCanvas(1600,800)
   myEngine = Engine.create();
   myWorld = myEngine.world

   ground = new Ground(400,700,1200,20)
   
}

function draw(){
background("pink")    
Engine.update(myEngine)

ground.display();   


}



