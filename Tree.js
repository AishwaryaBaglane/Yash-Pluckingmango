class Tree {
    constructor(x,y) {
      var options = {
        isStatic: true
    }
      
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(this.x, this.y, 450, 600,options);
      //this.image=loadImage("sprites/tree.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //imageMode(CENTER);
      //image(this.image,this.x,this.y,450,600)
    }
  }