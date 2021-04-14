function setup() {
    
    let cnv =createCanvas(350, 350, WEBGL);
    cnv.class('container');
    cnv.parent('torus');
    

  }
  
  function draw() {
    
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    clear();
    torus(90, 45);
  }
