
// ===============================
// Mobile Navigation
// ===============================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});





// Close menu after clicking link


document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});







// ===============================
// Typing Animation
// ===============================


const typingElement = document.getElementById("typing");


const words = [

    "Full Stack Developer",

    "AI/ML Developer",

    "Cloud Enthusiast",

    "DevOps Engineer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;




function typeEffect(){


    const currentWord = words[wordIndex];


    if(!deleting){


        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex++
        );


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }


    }

    else{


        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex--
        );



        if(charIndex < 0){


            deleting = false;

            wordIndex =
            (wordIndex + 1)
            %
            words.length;


        }


    }



    setTimeout(
        typeEffect,
        deleting ? 60 : 120
    );


}


typeEffect();








// ===============================
// Mouse Glow Effect
// ===============================


const glow =
document.querySelector(".cursor-glow");



document.addEventListener(
"mousemove",
(e)=>{


    glow.style.left =
    e.clientX + "px";


    glow.style.top =
    e.clientY + "px";


});








// ===============================
// Animated Counters
// ===============================


const counters =
document.querySelectorAll(
"[data-count]"
);



const counterObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



const counter =
entry.target;



const target =
Number(
counter.dataset.count
);



let current = 0;



const update = ()=>{


const increment =
Math.ceil(
target / 50
);



if(current < target){


current += increment;


counter.innerText =
current + "+";


setTimeout(
update,
40
);



}

else{


counter.innerText =
target + "+";


}


};



update();



counterObserver.unobserve(counter);



}



});



},
{
threshold:.6
});




counters.forEach(counter=>{

counterObserver.observe(counter);


});








// ===============================
// Scroll Reveal
// ===============================


ScrollReveal({

    distance:"60px",

    duration:1200,

    delay:200,

    reset:false

});




ScrollReveal().reveal(
".hero-content",
{
origin:"left"
}
);



ScrollReveal().reveal(
".hero-card",
{
origin:"right"
}
);



ScrollReveal().reveal(
".section-title",
{
origin:"top"
}
);



ScrollReveal().reveal(
".glass",
{
origin:"bottom",

interval:150

}
);


// ===============================
// 3D Project Card Tilt Effect
// ===============================


const projectCards =
document.querySelectorAll(
".project-card"
);



projectCards.forEach(card => {



card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;



const y =
e.clientY - rect.top;



const centerX =
rect.width / 2;



const centerY =
rect.height / 2;



const rotateX =
-(y-centerY) / 15;



const rotateY =
(x-centerX) / 15;



card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-15px)
`;



});






card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"";



});



});









// ===============================
// Contact Form
// ===============================


const contactForm =
document.querySelector(
".contact-form"
);



contactForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



const button =
contactForm.querySelector(
"button"
);



button.innerText =
"Message Sent ✓";



button.style.pointerEvents =
"none";



setTimeout(()=>{


button.innerText =
"Send Message";


button.style.pointerEvents =
"auto";


contactForm.reset();



},3000);



});









// ===============================
// Active Navigation Highlight
// ===============================


const sections =
document.querySelectorAll(
"section"
);


const navItems =
document.querySelectorAll(
".nav-links a"
);




window.addEventListener(
"scroll",
()=>{


let current = "";



sections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;



if(
window.scrollY >= sectionTop
){

current =
section.getAttribute("id");

}


});





navItems.forEach(link=>{


link.style.color =
"";



if(
link.getAttribute("href")
===
"#"+current
){


link.style.color =
"#ffffff";


}



});




});








// ===============================
// Smooth Image Loading
// ===============================


const images =
document.querySelectorAll(
"img"
);



images.forEach(img=>{


img.addEventListener(
"load",
()=>{


img.style.opacity = "1";


});


});








// ===============================
// Prevent Default Empty Links
// ===============================


document.querySelectorAll(
'a[href="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
(e)=>{

e.preventDefault();

});



});








// ===============================
// Page Load Animation
// ===============================


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"loaded"
);



});








// ===============================
// Console Branding
// ===============================


console.log(
`
%c Khushi Agarwal Portfolio

%c AI • Cloud • DevOps • Full Stack

`,
"font-size:25px;color:#8b5cf6;font-weight:bold;",
"font-size:15px;color:#06b6d4;"
);
