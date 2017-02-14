var x = 900;
var y = 600;
var xspeed = 7;
var yspeed = -4;
// create an array of balls
numBalls = 20;
var balls = new Array(numBalls);

function setup () {
	createCanvas(720, 400);
	
	for(i= 0 ; i < numBalls ; i++){
	   balls[i] = new Ball(i*2, i*2);
	}
}

function draw () {
	background(109, 32, 79); 
	for(i= 0 ; i < numBalls ; i++){
	   balls[i].display();
	   balls[i].move();
	   balls[i].bounce();
	}
}




function Ball(x, y) {
	this.x = x;
	this.y = y;

	this.display = function() {
		stroke(255);
		strokeWeight(6);
		fill(this.x, this.y, 20);
		ellipse(this.x, this.y, 48, 48);
	}
	
	this.move = function() {
		this.x = this.x + xspeed 
		this.y = this.y + yspeed 
	}
	
	this.bounce = function() {
		if (this.x > width || this.x < 0){
			xspeed = xspeed *-1;
		}
		if (this.y > height || this.y < 0){
			yspeed = yspeed *-1;
		}
	}
}
