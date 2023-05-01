
  let item;
  let add;
  let text;
  let check;
  let block;
  let neu;
  
  function addItem() {
    item = document.getElementById("item");
    if(item.value != "") {
    block = document.createElement("div"); 
    check = document.createElement("button");
    check.innerHTML = "Done!"
    check.classList.add("check")
    add = document.createElement("li");  

    text = document.createTextNode(item.value);

    add.appendChild(text);
    block.appendChild(check);
    block.appendChild(add);

    document.getElementById("list").appendChild(block);


    block.addEventListener("click", function() {
        move(event);
    });

    item.value = "";
    }
  }
  
  function move(event) {
    let button = event.target;
    if (button.classList.contains('check')) {
        let block = button.parentNode;
        block.parentNode.removeChild(block);
        document.getElementById("done").appendChild(block);
    }
  }