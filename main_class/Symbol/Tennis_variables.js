
//Variablen machen es hier komplizierter. Siehe Original

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
   

    //vertikale Seiten
    let vertx = 95;
    line(vertx, 90, vertx, 210);
    vertx = vertx + 33;
    line(vertx, 42, vertx, 258);
    vertx = vertx + 37;
    line(vertx, 21, vertx, 279);
    vertx = vertx + 40;
    line(vertx, 19, vertx, 280);
    vertx = vertx + 40;
    line(vertx, 35, vertx, 267);
    vertx = vertx + 40;
    line(vertx, 80, vertx, 220);
    

    //horizontale Seiten
    let hory = 45;
    line(130, hory, 250, hory);
    hory = hory + 40;
    line(100, hory, 280, hory);
    hory = hory + 40;
    line(80, hory, 300, hory);
    hory = hory + 40;
    line(80, hory, 300, hory);
    hory = hory + 40;
    line(100, hory, 280, hory);
    hory = hory + 40;
    line(110, hory, 260, hory);

    
    //ball
    fill(100)
    circle(230,150,60)
  }