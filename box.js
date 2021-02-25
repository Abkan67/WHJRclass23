class Box{
  constructor(x,y,w,h,c) {
    var options = {restitution:0.8, friction:0, density: 2,}
    this.body= Bodies.rectangle(x,y,w,h,options);
    World.add(world, this.body);
    this.width=w;this.height=h;this.color=c;
  }
  display() {
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    fill(this.color);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }
}