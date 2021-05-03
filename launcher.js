class launcher{
constructor(body,anchor){
var option={
bodyA: body,
pointB: anchor,
stiffness:0.004,
length:1
}
this.launcher=Constraint.create(option);
this.bodyA=body
this.pointB=anchor
World.add(world,this.launcher);
}
fly(){
    this.launcher.bodyA=null;
}
attach(body){
this.launcher.bodyA=body;
}
display(){


if(this.launcher.bodyA){
    var pointA=this.bodyA.position;
var pointB=this.pointB;
}





}


}