class Ground{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(2000,600,240,10,{isStatic: true});
        World.add(world, this.body);
    }

    display(){

        push ()

        fill("white")

        rectMode(CENTER)
        rect(this.body.position.x,800,96,20)

        pop ()
    }
}