  
class Frog {
    constructor(x, y) {
      var options = {
      isStatic:"true"
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 70;
      this.height = 70;
      this.image=loadImage("frog1.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
    
  
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }