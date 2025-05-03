const input = document.getElementById("field");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", addTodo);

function addTodo() {
  if (input.value != "") {
    const item = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    span.innerHTML = input.value;
    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click" , removeTask);
    item.appendChild(span);
    item.appendChild(delBtn);
    list.appendChild(item);

    input.value = "";
  }
}

function removeTask(event) {
    const item = event.target.parentElement;
    list.removeChild(item);
}
