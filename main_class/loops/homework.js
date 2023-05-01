//homework: draws triangles and gives them a random color, except for the triangles that are located at positions that are part of the Fibonacci sequence, which are colored white.

let width = 500;
let height = 500;
let size = 50;
let x = 0;
let y = 0;
let counter = 1;

let colors = ['#FF0000', '#FF8800', '#FFFF00', '#00FF00', '#0088FF', '#0000FF'];
let color;

function setup(){
    createCanvas(width, height);
    malen();
} 



let n = 13;
let fibonacci = [0, 1];
// For-Loop, um die Fibonacci-Reihe zu berechnen
for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}



function malen() {
    for(let i = 0; i < width; i += size) {
        for(let k = 0; k < height; k += size) {
            if(fibonacci.includes(counter)) {
                color = 'white';
            } else {
                color = colors[Math.floor(Math.random() * colors.length)]; //randomizing color for each triangle
            }
            fill(color);
            triangle(x,y,   x+size,y,    x+(size/2),y+size);
            counter ++;
            x += size;
        }
        x = 0;
        y += size;
    }
}
