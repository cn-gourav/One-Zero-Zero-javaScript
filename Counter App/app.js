const counter = document.getElementById("counter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
const reset = document.getElementById("reset");
let count = 0;


plus.addEventListener("click" , increament);
minus.addEventListener("click" , decreament);
reset.addEventListener("click" , resetcounter);

function increament() {
    count++;
    counter.innerHTML = count;
}

function decreament() {
    if(count != 0){
        count--;
        counter.innerHTML = count;
    }
}

function resetcounter() {
    count = 0;
    counter.innerHTML = count;
}