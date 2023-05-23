//examples from the lecture
let result;
let result2;
function average(x, y) {
    return (x+y)/2;
}
result = average(55,66);
result2 = average(2,4);
// console.log('result 1 =', result, '\nresult 2 =', result2);



//task 1
function setup() {
    createCanvas(1000,1000);
    grid(15,5,40);
}
let x = 0;
let y = 0;
let colors = ['#FF0000', '#FF8800', '#FFFF00', '#00FF00', '#0088FF', '#0000FF'];
function grid(numX, numY, size) {
    for(let i = 0; i < numX; i++) {
        for(let k = 0; k < numY; k++) {            
            let color = colors[Math.floor(Math.random() * colors.length)];
            fill(color);
            rect(x,y,size)
            y += size;
        }
        x += size;
        y = 0; 
    }
}
    
