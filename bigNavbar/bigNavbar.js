//Scroll

let prevScrollpos = window.pageYOffset; 


//Menu burger 
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

//Submenu


const navItem1 = document.querySelector("#nav-item1")
const navItem2 = document.querySelector("#nav-item2")
const navItem3 = document.querySelector("#nav-item3")
const navItem4 = document.querySelector("#nav-item4")
const subMenu = document.querySelector(".subMenu")

const arrowDown1 =document.querySelector(".arrowDown1")
const arrowDown2 =document.querySelector(".arrowDown2")
const arrowDown3 =document.querySelector(".arrowDown3")





navItem1.addEventListener("mouseenter", () =>{
    arrowDown1.classList.add("arrowActive")
})

navItem1.addEventListener("mouseleave", () =>{
    arrowDown1.classList.remove("arrowActive")
})

// _________

navItem2.addEventListener("mouseenter", () =>{
    arrowDown2.classList.add("arrowActive")
})

navItem2.addEventListener("mouseleave", () =>{
    arrowDown2.classList.remove("arrowActive")
})


// _________

navItem3.addEventListener("mouseenter", () =>{
    arrowDown3.classList.add("arrowActive")
})

navItem3.addEventListener("mouseleave", () =>{
    arrowDown3.classList.remove("arrowActive")
})



// Search 


























