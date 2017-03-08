var scl = 20;
var snake;
var food;
var apple;
//var appleSize = 50;

var pictures = [];

var picIndex = 0;

function setup() {
  createCanvas(scl * 30, scl * 30);
  snake = new Snake();
  food  = new Food();
  frameRate(10);
}

function preload(){
  pictures[0] = loadImage('image/1.jpg');
  pictures[1] = loadImage('image/2.jpg');
  pictures[2] = loadImage('image/3.jpg');
  pictures[3] = loadImage('image/4.jpg');
  pictures[4] = loadImage('image/5.jpg');
  pictures[5] = loadImage('image/6.jpg');
  pictures[6] = loadImage('image/7.jpg');
  pictures[7] = loadImage('image/8.jpg');
  pictures[8] = loadImage('image/9.jpg');
  pictures[9] = loadImage('image/10.jpg');
  pictures[10] = loadImage('image/11.jpg');
  pictures[11] = loadImage('image/12.jpg');
  pictures[12] = loadImage('image/13.jpg');
  pictures[13] = loadImage('image/14.jpg');
  pictures[14] = loadImage('image/15.jpg');  
  apple = loadImage('image/manzana.png'); 
}

function draw() {
  if (picIndex > 14) {
      picIndex = 0;
  }
  console.log(picIndex);

  background (pictures[picIndex]); 
  snake.eat(food);
  snake.move();
  snake.draw();
  food.draw();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}

function cols() {
  return floor(width / scl);
}

function rows() {
  return floor(height / scl);
}

function randomVector() {
  return createVector(floor(random(cols())), floor(random(rows())));
}