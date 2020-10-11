class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            length:150,
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.8,
            pointB:{x:this.offsetX,y:this.offsetY}
            

        }
        this.rope=Constraint.create(options);
        this.pointB=pointB
        World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        var anchor1X=bodyA.x;
        var anchor1Y=bodyA.y;
        var anchor2X=bodyB.x;
        var anchor2Y=bodyB.y;
        line (anchor1X,anchor1Y,anchor2X,anchor2Y);
    }  
    
}