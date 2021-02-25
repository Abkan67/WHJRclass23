const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;
boxes=[];

window.addEventListener("click", (e)=>{
    boxes.push(new Box(e.x,e.y,50,50,"255,0,0"));
});
function setup(){
    angleMode(RADIANS);
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(175,150,50,100, "0,0,255");
    box2=new Box(200,100,50,50, "255,0,0");
    ground=new Ground(200,380,600,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    for(i=0;i<boxes.length;i++) {
        boxes[i].display();
    }
   
}