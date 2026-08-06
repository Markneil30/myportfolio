// Smooth scrolling effect

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


// Navbar shadow habang nag-scroll

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.boxShadow = 
        "0 5px 20px rgba(0,0,0,.4)";

    }else{

        nav.style.boxShadow = "none";

    }

});


// Simple welcome message

console.log(
"Welcome to Neil Mark Portfolio 🚀"
);