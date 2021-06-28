class Polygon{

    constructor(x,y){
        var polygon_options={
            restitution:0.4,
            friction:1.0,
            density:1
          }
      
        
          this.body = Bodies.rectangle(x,y,50,50,polygon_options)
          this.image=loadImage("polygon.png")
          World.add(world,this.body);
          
    }
    display(){
        noStroke(255);
        fill(255);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}
