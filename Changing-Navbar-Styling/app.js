const nav = document.querySelector("#navbar");

document.addEventListener("scroll" , ()=>{
    if(window.scrollY > 0){
        nav.classList.add('navbar-scroll')
    }else{
        nav.classList.remove('navbar-scroll')
    }
});