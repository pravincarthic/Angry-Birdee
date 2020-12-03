class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");

    this.image2 = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (this.body.speed > 10 && this.body.position.x > 220) {
      var pos = [this.body.position.x, this.body.position.y];
      this.trajectory.push(pos);
    
    }
    
    
        //console.log(this.trajectory);
    for (let index = 0; index < this.trajectory.length; index++) {
      image(this.image2, this.trajectory[index][0], this.trajectory[index][1], this.visibility1 = this.visibility1-5);

      
    }
    super.display();
  }
}