function setup () {
	create canvas (600, 400) ;
	}

function draw () {
	background (37, 64, 143);
	strokeWeight(4);
	fill (x, y, 100);
	
	var x = 0;
	var y = 0;
	var speed = 5;

	while (x > width) 
		while (y > height) {
		fill (x, y, 100)
		ellipse(x, y, 50, 50);
		x = x + 50;
		y = y + 50;
	}

	
	for (var x = 0; x <= width; x += 100)
		for (var y = 0; y <= mouseY; y += 100) {
		fill (random(150), 0, random(150));
		ellipse(x, y, 50, 50);
	}

	if (y > height || y <0) {
		speed = speed * -1;
	}

	if (x > width || x < 0) {
		speed = speed * -1;
	}
	
	y = y + speed;

	x = x + speed;
}