const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//Definir variable canicas
var marble1,marble2,marble3,marble4,marble5,marble6,marble7,marble8,marble9,marble10,marble11,marble12,marble13,marble14,marble15,marble16;
//Definir variable Suelo
var ground1,ground2,ground3,ground4;

var box,rope;

var safe;
var die1,die;
var points = [];





function setup() {
  createCanvas(1500, 3000);
  engine = Engine.create();
  world = engine.world;

  
  

  safe = new Safe(800,3000,300,20);

  die1 = new Die(1300,3000,700,20);
  die2 = new Die(300,3000,700,20);
 
  //Crear Suelo
  ground1 = new Ground(1200,200,600,20);
  ground2 = new Ground(250,200,600,20);

  ground3 = new Ground(650,3000,20,500);
  ground4 = new Ground(950,3000,20,500);

  // Crear Cajas
  marble1 = new Marble(400,0,20,20);
  marble2 = new Marble(500,0,20,20);
  marble3 = new Marble(600,0,20,20);
  marble4 = new Marble(700,0,20,20);
  marble5 = new Marble(800,0,20,20);
  marble6 = new Marble(900,0,20,20);
  marble7 = new Marble(1000,0,20,20);
  marble8 = new Marble(1100,0,20,20);

  marble9 = new Marble(400,0,20,20);
  marble10 = new Marble(500,0,20,20);
  marble11 = new Marble(600,0,20,20);
  marble12 = new Marble(700,0,20,20);
  marble13 = new Marble(800,0,20,20);
  marble14 = new Marble(900,0,20,20);
  marble15 = new Marble(1000,0,20,20);
  marble16 = new Marble(1100,0,20,20);

//crea la primera fila 
for (var j = 75; j <=width; j=j+80) { 
  points.push(new Point(j,375));
}

//crea la segunda fila 
for (var j = 50; j <=width-10; j=j+80) 
{
  points.push(new Point(j,475));
}

for (var j = 75; j <=width; j=j+80) { 
  points.push(new Point(j,575));
}

for (var j = 50; j <=width-10; j=j+80) 
{
  points.push(new Point(j,675));
}

for (var j = 75; j <=width; j=j+80) { 
  points.push(new Point(j,775));
}

//crea la segunda fila de objetos plinko
for (var j = 50; j <=width-10; j=j+80) 
{
  points.push(new Point(j,875));
}

for (var j = 50; j <=width-10; j=j+80) 
{
  points.push(new Point(j,975));
}

for (var j = 75; j <=width; j=j+80) { 
  points.push(new Point(j,1075));
}

for (var j = 50; j <=width-10; j=j+80) 
{
  points.push(new Point(j,1175));
}

for (var j = 50; j <=width-10; j=j+80) 
{
  points.push(new Point(j,1275));
}

for (var j = 50; j <=width-10; j=j+80) 
{
  points.push(new Point(j,1375));
}
}

function draw() {
  //pintar fondo
  background("blue");
  
  Engine.update(engine);




  
  //Pintar canicas
  marble1.display();
  marble2.display();
  marble3.display();
  marble4.display();
  marble5.display();
  marble6.display();
  marble7.display();
  marble8.display();

  marble9.display();
  marble10.display();
  marble11.display();
  marble12.display();
  marble13.display();
  marble14.display();
  marble15.display();
  marble16.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  die1.display();
  die2.display();
  safe.display();
  
  for (var i = 0; i < points.length; i++) {
    points[i].display();   
  }

  //for (var k = 0; k < divisions.length; k++) {
    //divisions[k].display();
  //}


}

//Crear funcion mouseDragged
 


