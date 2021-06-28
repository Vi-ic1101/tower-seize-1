class Polygon{

    constructor(x,y,w,h){
        var polygon_options={
            restitution:0.4,
            friction:1.0,
            density:1
          }
        this.x=x
        this.y=y
        this.w=w
        this.h=h
          this.polygon = Bodies.rectangle(x,y,w,h,polygon_options)
          this.image=loadImage("polygon.png")
          World.add(world,this.polygon);
          
    }
    display(){
        noStroke(255);
        fill(255);
        imageMode(CENTER);
        image(this.image,this.polygon.position.x,this.polygon.position.y,50,50);
    }
}