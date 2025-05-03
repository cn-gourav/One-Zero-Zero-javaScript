const red = document.getElementById("Red");
const blue = document.getElementById("Blue");
const Green = document.getElementById("Green");
const body = document.querySelector("body");
const random = document.getElementById("Random-color")

red.addEventListener("click" , () =>{
    changeColor('red');
});


function changeColor(color) {
    body.style.backgroundColor = color;
}

random.addEventListener("click" , ()=>{
    randomColor();
})

function randomColor(params) {
    const red = Math.floor(Math.random() * 255 + 1);
    const green = Math.floor(Math.random() * 255 + 1);
    const blue = Math.floor(Math.random() * 255 + 1);

    const finalColor = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = finalColor;
}

