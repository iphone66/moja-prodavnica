/* =========================
   HEADER SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name || !phone || !message) {
        formMessage.textContent =
            "Molimo popunite sva polja.";
        return;
    }

    /*
        Ovdje se kasnije može povezati:
        - WhatsApp
        - Email
        - Viber
        - backend
        - CRM
    */

    const whatsappNumber = "387603800460";

    const text =
        `Pozdrav, ja sam ${name}.%0A%0A` +
        `Telefon: ${phone}%0A%0A` +
        `Poruka: ${message}`;

    window.open(
        `https://wa.me/${whatsappNumber}?text=${text}`,
        "_blank"
    );

    formMessage.textContent =
        "Otvaramo WhatsApp poruku...";

    contactForm.reset();

});


/* =========================
   YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".product-card, .feature, .about-content, .about-image, .contact-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});
