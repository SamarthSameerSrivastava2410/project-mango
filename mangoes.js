class Mango {
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: true

        }
        
        this.body = Bodies.rectangle(x, y, 100, 100 , options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();
      }




}