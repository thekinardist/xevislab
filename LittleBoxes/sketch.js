let angle = 0;
let modifier = 0.03;
let mx = 1; 
let my = 1; 

let boxShader; 

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); 
}



function draw() {
//--Environment--//
  background(0, 0, 0);

//light[s]//
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 255, 255, locX, locY, 100);
let c = color(255, 255,255); 
let lightDir = createVector(mouseX, mouseY,150); 
directionalLight(c, lightDir);
ambientLight(10, 10, 10);
//--Environment--//

  //--Background Rectangles--//
  rectMode(CENTER);
  var offset = 0;
  var w = 50;

  for (var x = 0; x < width; x += w) {
    for(var y  = 0; y < height; y += w){
    push();
    var a = angle + offset;
    var h = map(sin(a), -1, 1, 0, 300);
  
    translate(x - width / 2, y -height/2, -50);
    //rotateX(0.03 * frameCount); 
    //shader(boxShader);
    specularMaterial(mouseY /2,100,100);
    shininess(2); 
    noStroke();
    box(w, w, h);
    offset += modifier;
    pop();   
    }
   }

  angle += modifier; 

  //--Background Rectangles--//


  //--Main Rectangle--//
   
  push();
  specularMaterial(360 - mouseY /2, 100,100); 
  translate(0,0,0);
  box(mouseX +1, mouseX +1, 100);
  pop(); 
  //--Main Rectangle--//
}
