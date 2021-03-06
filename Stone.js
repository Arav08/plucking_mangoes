class Stone{
    constructor(x, y, width, height){
        var options = {
            'isStatic': false,
            'restitution': 0,
            'friction': 1.0,
            'density': 1.2
        }
        this.image = loadImage("images/stone.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x
        this.y = y
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(1)
        stroke("green")
        fill("red");
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }