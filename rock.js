class Rock{
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic': true

        }
        
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.image = loadImage("stone.png");
        World.add(world, this.body);

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
      }




}