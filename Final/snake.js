function Snake() {
  this.x = cols()/2 * scl;
  this.y = rows()/2 * scl;
  this.xspeed = -1;
  this.yspeed = 0;
  this.tail = [];
  this.points = 0;

  this.dir = function(x, y) {
    if (x != 0 && this.xspeed != x * (-1)
        || y != 0 && this.yspeed != y * (-1)) {
      this.xspeed = x;
      this.yspeed = y;
    }
  }

  this.eat = function(food) {
    if (this.x === food.x() && this.y === food.y()) {
      food.eaten();
      this.points++;
      this.tail.push(createVector(this.x, this.y));
      console.log(this.points + " points");
    }
  }

  this.tail = function (splice) {
    this.tail.splice(0);
  }

  this.checkTouchItself = function() {
      this.tail.touchitself(delete(this.x,this.y));
      console.log(this.points - " points")
    }
  }

  this.restart = function() {
    if (true) {this.tail(createVector(this.x,this.y))
    } 
  }

  this.move = function() {
    // put last square of tail in front of the line
    if (this.tail.length > 0) {
      var tipOfTail = this.tail.pop();
      tipOfTail.x = this.x;
      tipOfTail.y = this.y;
      this.tail.unshift(tipOfTail);
    }

    // move head
    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;

    // wrap around right and bottom edges
    this.x %= width;
    this.y %= height;

    // wrap around left and top edges
    if (this.x < 0) {
      this.x = width - scl;
    }
    if (this.y < 0) {
      this.y = height - scl;
    }
  }

  this.draw = function() {
    fill(35,144,59);
    rect(this.x, this.y, scl, scl);
    for(var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x,
          this.tail[i].y,
          scl, scl);
    }
  }

  //this.death = function() {
    //for (var i = 0; i < this.tail.length; i++) {
     // var pos = this.tail[i];
      //var d = dist(this.x, this.y, pos.x, pos.y);
     // if (d < 1){
      // console.log('starting over');
       // this.total = 0;
       // this.tail = [];
      }
    }
  }
}

