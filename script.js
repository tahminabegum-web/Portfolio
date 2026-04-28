// Smooth scroll for navbar links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const sectionTop = sec.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if(sectionTop < screenPosition){
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});


// Apply initial hidden style
sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all 0.6s ease";
});
