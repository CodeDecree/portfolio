// Angry Birds with Matter.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/content/videos/challenges/138-angry-birds-with-matterjs
// https://youtu.be/TDQzoe9nslY

// Code from Challenge: https://editor.p5js.org/codingtrain/sketches/UOR4nIcNS

const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
const sticks = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;



function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 20);

  bird = new Bird(windowWidth/6, windowHeight - 100, 25);

  slingshot = new SlingShot(windowWidth/6, windowHeight/2 + 100, bird.body);

  let startingStick = 2*windowWidth/3;
  const gap = windowWidth/10;
  sticks[0] = new Box(startingStick-gap+30-gap,200,10,windowHeight/3)
  sticks[1] = new Box(startingStick-gap+30,200,10,windowHeight/3)
  sticks[2] = new Box(startingStick,200,10,windowHeight/2 )
  sticks[3] = new Box(startingStick+gap,200,10,windowHeight/2 )
  sticks[4] = new Box(startingStick+2*gap -30,200,10,windowHeight/3)
  sticks[5] = new Box(startingStick+2*gap -30 + gap,200,10,windowHeight/3)

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };

  // A fix for HiDPI displays
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function keyPressed() {
  if (key == ' ') {
    World.remove(world, bird.body);
    bird = new Bird(150, 300, 25);
    slingshot.attach(bird.body);
  }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

function draw() {
  background(30)
  Matter.Engine.update(engine);
  ground.show();
  for (let stick of sticks) {
    stick.show();
  }
  slingshot.show();
  bird.show();
}