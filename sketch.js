const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var blocks = [];
var music;

function preload() {
  bg = loadImage("gamingbackground2.png");
  music = loadSound("Music.mp3");
}

function setup() {
  canvas = createCanvas(3000,700);
  mouse = Mouse.create(canvas.elt);
  engine = Engine.create();
  world = engine.world;

  var options = {
    mouse : mouse,
  }
  
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  for(k = 600; k<=900; k+=70){
     for(i = 550; i >= 100; i -= 70){
     blocks.push(new Box(k, i, 70, 70));
     }
  }
  music.play();
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  hero.display();
  rope.display();
  monster.display();

  for(i = 0; i<blocks.length ; i++){
    blocks[i].display();
  }
}
