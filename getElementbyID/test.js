let item;
let add;
let text;

function addItem() {
    item = document.getElementById("item");
    add = document.createElement("li");
    text = document.createTextNode(item.value);

    add.appendChild(text);

    document.getElementById("list").appendChild(add);
}
