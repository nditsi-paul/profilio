 document.addEventListener("DOMContentLoaded", function(){

  let menu = document.getElementById("bars");
  let nav = document.querySelector(".nav");
    if(menu){
      menu.addEventListener("click", function(){
        nav.classList.toggle("active");
        menu.classList.toggle('fa-xmark');
      })
    }

    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        nav.classList.remove("active");
        menu.classList('fa-bars')
      })
    })})