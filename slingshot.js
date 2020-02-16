class Slingshot {
    constructor(bodyA,bodyB){
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:0.05,
            length:8
        }
        this.Sling=Constraint.create(options);
        World.add(world,this.Sling);
    }
    display(){
        var pointA=this.Sling.bodyA.position;
        var pointB=this.Sling.bodyB.position;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}