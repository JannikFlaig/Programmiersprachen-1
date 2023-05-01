let item;
let add;
let text;
let check;

function addItem() {
    item = document.getElementById("item");
    add = document.createElement("li");
    text = document.createTextNode(item.value);

    add.appendChild(text);

    document.getElementById("list").appendChild(add);

    check = document.createElement("input");
    check.type = 'checkbox'
    document.getElementById("lehr").appendChild(check);
}
