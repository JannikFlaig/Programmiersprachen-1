let res = 0;
let ges = 0;

function calculate() {
    let select = document.querySelector("#select").value;
    let n = document.querySelector("#n").value;
    console.log("select:", select);
    console.log("n:", n);
    if(select == 1) {
        let m = n; 
        for(let i = 0; i < n; i++) {
            // console.log(i);
            // console.log(m);
            ges = m * m;
            console.log(ges);
            text = document.createTextNode(ges);
            br = document.createElement('br');
            document.getElementById("outcome").appendChild(text);
            document.getElementById("outcome").appendChild(br);
            m = m - 1;
        }
    } else if(select == 2) {
        let F1 = 1;
        for(i = 1; i < n; i++) {
            F1 = F1 * 2;
        }
        res = F1;
    } else if(select == 3) {
        let a = 0;
        let b = 1;
        
        // For-Loop, um die Fibonacci-Reihe zu berechnen und auszugeben
        for (let i = 0; i < n; i++) {
          console.log(a);
          const next = a + b;
          a = b;
          b = next;
        }
    } else if(select == 4) {
        //in working
    }

    // console.log(res);
}









//while schleife die schaut ob die n-te zahl gefunden ist. Darin eine for-schleife die:
//1. ab zwei anfängt zu zählen
//2. primzahlen rausfindet und für jede primzahl k + 1 rechnnet(while)