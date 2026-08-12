// ========================================
// SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ========================================
// NAVBAR EFFECT ON SCROLL
// ========================================

const nav = document.querySelector("nav");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        nav.style.boxShadow =
            "0 5px 30px rgba(0, 0, 0, 0.45)";

        nav.style.background =
            "rgba(2, 6, 23, 0.95)";

    } else {

        nav.style.boxShadow = "none";

        nav.style.background =
            "rgba(2, 6, 23, 0.85)";

    }

});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


// ========================================
// PROJECT CARD STAGGER ANIMATION
// ========================================

const cards =
    document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.08}s`;

});


// ========================================
// BUTTON CLICK EFFECT
// ========================================

document.querySelectorAll(".btn, .btn-project")
.forEach(button => {

    button.addEventListener("click", function() {

        this.style.transform =
            "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});


// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


// ========================================
// WELCOME MESSAGE
// ========================================

console.log(
    "Welcome to Neil Mark Portfolio 🚀"
);
