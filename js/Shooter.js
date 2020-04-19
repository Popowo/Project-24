class Shooter {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };
        this.body = Matter.Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        this.w = width;
        this.h = height;
        angleMode(DEGREES);
        this.body.angle = -60;
      }
  
      display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y-30);
        angleMode(DEGREES);
        rotate(angle);
        fill("red");
        stroke(0);
        rectMode(CENTER);
        rect(0,0,80,28);
        pop();
      };
  }
  