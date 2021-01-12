class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB= pointB;
        this.Sling=Constraint.create(options)
        World.add(world,this.Sling)
    }
    fly(){
        this.Sling.bodyA=null;
    }
    display(){
        if(this.Sling.bodyA){

        
        var A=this.Sling.bodyA.position;
        var B=this.pointB;
        strokeWeight(6);
        line(A.x,A.y,B.x,B.y)
       }
    }
}