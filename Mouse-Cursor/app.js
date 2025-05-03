const cursor = document.getElementById("cursor");
const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) =>{
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";

    glow.style.left = e.x -125 + "px";
    glow.style.top = e.y -125 + "px";
})

