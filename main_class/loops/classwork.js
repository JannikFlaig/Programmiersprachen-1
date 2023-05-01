// Stuff made in class

let n = 0;

while (n <= 10) {
    n++;
    console.log(n);
}

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

for(let i = 10; i >= 0; i--) {
    console.log(i);
}

let years = 0;
let balance = 100;
let goal = 500;
let intrestRate = 2;
let paymentAmount = 20;

while(balance < goal) {
    balance += paymentAmount;
    let intrest = balance * intrestRate/100;
    balance += intrest;
    years++;
}
console.log("years:", years);