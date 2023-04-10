function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    background(220);

    //Schläger
    fill(0);
    rect(175, 300, 30, 150);
    ellipse(190, 150, 225, 265);
    quad(165, 278, 190, 300, 175, 300, 120, 254);
    quad(260, 254, 205 ,300, 190, 300, 215, 278);
    fill(200);
    ellipse(190, 150, 200, 240);
   
    // Vertikale Seiten
    line(95, 90, 95, 210);
    line(128, 42, 128, 258);
    line(165, 21, 165, 279);
    line(205, 19, 205, 280);
    line(245, 35, 245, 267);
    line(285, 80, 285, 220);
    

    //Horizontale Seiten
    line(130, 45, 250, 45)
    line(100, 85, 280, 85)
    line(80, 125, 300, 125)
    line(80, 163, 300, 163)
    line(100, 200, 280, 200)
    line(110, 240, 260, 240)
    

    //Ball
    fill(100)
    circle(230,150,60)
  }