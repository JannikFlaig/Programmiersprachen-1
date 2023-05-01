let f = false;
let r = false;
let v = false; 

function setup () {
    createCanvas (1000,1000);
}
function draw() {
    background(200);
    fill(10000);
    circle(400,200,80);
    if (mouseX > 360 && mouseX < 440 && mouseY > 160 && mouseY < 240) {
        f = true;
    }
    if (f == true) {
        circle(600,200,80);
    }
    if(mouseX > 560 && mouseX < 640 && mouseY > 160 && mouseY < 240 && f == true) {
        r = true;
    }
    if(r == true) {
        circle(500, 300, 200);
    }
    if(mouseX > 400 && mouseX < 600 && mouseY > 200 && mouseY <400 && r == true) {
        v = true;
    }
    if(v == true) {
        fill(200);
        ellipse(500,320, 40,20);    
        circle(450,275,20);
        circle(550,275,20);
        fill('magenta');
        circle(400,200,40);
        circle(600,200,40);
    }

}

