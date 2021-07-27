const hamburger =document.querySelector(".navi");
const navLinks=document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

hamburger.addEventListener("click",()=> {
     navLinks.classList.toggle("open");
})