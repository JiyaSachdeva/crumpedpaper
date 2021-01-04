class Ground {
    constructor(x,y,width,height){
var options={
    isStatic:true
}
this.body= Bodies.rectangle(x,y,width,height,options);
this.height= height;
this.width = width;
World.add(world,this.body);

}



    
    display(){


rectMode(CENTER);
var pos = this.body.position;
push();
fill ("brown");
stroke ("blue");
rect(pos.x,pos.y,this.width,this.height);
pop();

    }
}
    