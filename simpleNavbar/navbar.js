
let prevScrollpos = window.pageYOffset; 

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


//Lorsque la classe .active rendant le menu visible est activée, on désactive la fonction onscroll avec le top 0. 
    if(hamburger.classList.contains("active")){
        console.log("good");
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos ) {
                document.querySelector(".navbar").style.top = "0";
            } 
            prevScrollpos = currentScrollPos;
        }
//Lorsque la classe active , n'est pas activé, on fait disparaître le menu en le remontant hors du flux. 
    
    } else {
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos ) {
                document.querySelector(".navbar").style.top = "0";
            } else {
                document.querySelector(".navbar").style.top = "-70px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
})








let windowScroll = window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos ) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;

}










