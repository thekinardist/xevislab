let angle = 0;
let modifier = 0;
let gui;

let boxShader; 

function setup() {
  let p5canvas = createCanvas(windowWidth, windowHeight, WEBGL); 
  gui = createGUI('slider', p5canvas); 
  gui.slider('angle', 50, height - 40, width -100, 30).scheme('purple')
      .opaque()
      .ticks(2,10)
      .limits(0.1, 0.5)
      .setAction((info) => {
        modifier = info.value;
      }); 
  boxShader = baseNormalShader().modify({
    uniforms: {
      'float time': () => millis()
    },
    'Vertex getWorldInputs': `(Vertex inputs) {
      inputs.normal = abs(inputs.normal); 
      return inputs;
    }`
  });

}

function draw() {

  push(); 
  background(0, 0, 0);

  translate(0, 50, -50);
  rotateX(-PI / 8);
  


  rectMode(CENTER);
  var offset = 0;
  var w = 50;
  for (var x = 0; x < width; x += w) {
    push();
    var a = angle + offset;
    var h = map(sin(a), -1, 1, 0, 100);
  
    translate(x - width / 2, 0, 0);
    rotateX(0.03 * frameCount); 
    shader(boxShader);
    noStroke();
    box(w, h, w);
    offset += modifier;
    pop();

  }
  angle += modifier;
  push(); 

  gui.draw(); 


}
