class Paper{
    constructor(x,y,r){
    var options={
        //put a comma after each line
        'restutution' : 0.3,
        'friction': 5,
		'density': 1.2,
        isStatic: true
    }

    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.r = 100;

    this.image=loadImage("paper.png")

    this.body = Bodies.circle(this.x, this.y, (this.r-20/2), options)
    World.add(world, this.body);
    }
    display(){
    push()
    ImageMode(CENTER)
    image(this.image, 0, 0, this.width ,this.height )

    pop()
    }
}