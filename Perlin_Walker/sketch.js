let walker; 

function setup() {
  createCanvas(700, 400);
  imageMode(CENTER); 
  //angleMode(DEGREES); 
  head = loadImage("Me_Head.png"); 
  walker = new Walker();
  background(255);

}

function draw() {
  if (keyIsDown(UP_ARROW) === true){
    walker.step();
    walker.show();
  }
}

class Walker{
  constructor(){
    this.tx = 0; 
    this.ty = 10000; 

    this.ss = 50; 

  }

  show(){
     image(head, this.x, this.y, this.s, this.s);
  }

  step(){
    this.x = map(noise(this.tx), 0, 1, 0, width); 
    this.y = map(noise(this.ty), 0, 1, 0, height); 
    
    
    this.s = map(noise(this.ss), 0, 1, 50, 250);

    this.tx += 0.01;
    this.ty += 0.01; 
    
    this.ss += 0.03; 
  }
}

function keyPressed(){
  if (key === 'c'){
    clear();
    background(255); 
  }
}