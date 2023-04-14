//move the whole symbole by editing the x and y variables 

let x = 100;
let y = 100;

function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    background(220);

    //Schläger
    fill(0);
    rect(175+x, 300+y, 30, 150);
    ellipse(190+x, 150+y, 225, 265);
    quad(165+x, 278+y, 190+x, 300+y, 175+x, 300+y, 120+x, 254+y);
    quad(260+x, 254+y, 205+x ,300+y, 190+x, 300+y, 215+x, 278+y);
    fill(200);
    ellipse(190+x, 150+y, 200, 240);
   

    // Vertikale Seiten
    line(95+x, 90+y, 95+x, 210+y);
    line(128+x, 42+y, 128+x, 258+y);
    line(165+x, 21+y, 165+x, 279+y);
    line(205+x, 19+y, 205+x, 280+y);
    line(245+x, 35+y, 245+x, 267+y);
    line(285+x, 80+y, 285+x, 220+y);
    

    //Horizontale Seiten
    line(130+x, 45+y, 250+x, 45+y)
    line(100+x, 85+y, 280+x, 85+y)
    line(80+x, 125+y, 300+x, 125+y)
    line(80+x, 163+y, 300+x, 163+y)
    line(100+x, 200+y, 280+x, 200+y)
    line(110+x, 240+y, 260+x, 240+y)
    

    //Ball
    fill(100)
    circle(230+x,150+y,60)
  }