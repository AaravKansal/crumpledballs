class Paper{
    constructor(x,y,r){
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,{isStatic:false,friction:0.5,density:1.2,restitution:0.3})
        World.add(world,this.body);
      
        
    }display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("red")
        ellipse(0,0,this.r,this.r)
        pop();
    }
    
}