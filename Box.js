class Box {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            "frictionAir":0.005,
            "density":1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angu=this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angu);
        
        strokeWeight(4);
        stroke("black");
        fill("purple");
        ellipse(0, 0, this.width, this.height);
        pop();
      }
    }

