let res = 0;
let ges = 0;

function calculate() {
    let select = document.getElementById("select").value;
    let n = document.getElementById("n").value;

    if(select == 1) {
        series1 = document.createTextNode("Fn = n * n; F1 = 1");
        document.getElementById("outcome").appendChild(series1);
        br = document.createElement('br');
        document.getElementById("outcome").appendChild(br);
    } else if(select == 2) {
        series2 = document.createTextNode("Fn = Fn-1 * 2; F1 = 1")
        document.getElementById("outcome").appendChild(series2);
        br = document.createElement('br');
        document.getElementById("outcome").appendChild(br);
    } else if(select == 3){
        series3 = document.createTextNode("Fn = Fn-1 + Fn-2; F1 = F2 = 1");
        document.getElementById("outcome").appendChild(series3);
        br = document.createElement('br');
        document.getElementById("outcome").appendChild(br);
    } else if(select == 4) {
        series4 = document.createTextNode("Fn = nth prime number; F1 = 2");
        document.getElementById("outcome").appendChild(series4);
        br = document.createElement('br');
        document.getElementById("outcome").appendChild(br);
    }

    console.log("select:", select);
    console.log("n:", n);
    if(select == 1) {
        for(let i = 1; i <= n; i++) {
            ges = i * i;
            text = document.createTextNode(ges);
            br = document.createElement('br');
            document.getElementById("outcome").appendChild(text);
            document.getElementById("outcome").appendChild(br);
        }

    } else if(select == 2) {
        let F1 = 1;
        for(i = 0; i < n; i++) {
            text = document.createTextNode(F1);
            br = document.createElement('br');
            document.getElementById("outcome").appendChild(text);
            document.getElementById("outcome").appendChild(br);            
            F1 = F1 * 2;
        }

    } else if(select == 3) {
        let a = 0;
        let b = 1;
        
        for (let i = 0; i < n; i++) {
          text = document.createTextNode(b);
          br = document.createElement('br');
          document.getElementById("outcome").appendChild(text);
          document.getElementById("outcome").appendChild(br);          
          const next = a + b;
          a = b;
          b = next;
        }



    } else if(select == 4) {
        nthPrime();
        let nth = nthPrime(n);
        text = document.createTextNode(nth);
        br = document.createElement('br');
        document.getElementById("outcome").appendChild(text);
        document.getElementById("outcome").appendChild(br);
    }
    br = document.createElement('br');
    document.getElementById("outcome").appendChild(br);
}

function prime(num) { 
    //testing number if prime
    for(let i = 2; i < num; i++) {
      if(num % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  function nthPrime(n) {
//searcching for nth prime number
    let count = 0;
    let num = 2;
    while(count < n) {
      if(prime(num) == true) {
        count++;
        if(count == n) {
          return num; //nth prime number
        }
        text = document.createTextNode(num);
        br = document.createElement('br');
        document.getElementById("outcome").appendChild(text);
        document.getElementById("outcome").appendChild(br); 
      }
      num++;
    }
  }