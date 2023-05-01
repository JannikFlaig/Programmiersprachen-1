function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(200);
    rect(200,200,200,500);
    if(mouseY < 350){
        fill('red');
    }
    circle(300,300,130);
    fill(200);

    if(mouseY > 350 && mouseY < 490) {
        fill('yellow');
    }
    circle(300,450,130);
    fill(200);
    
    if(mouseY > 490) {
        fill('green');
    }
    circle(300,600,130);
    fill(200);
   
}


