// THEME TOGGLE
document.querySelector(".theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// SKILL BAR ANIMATION
window.addEventListener("load", () => {
    document.querySelectorAll(".fill").forEach(fill => {
        fill.style.width = fill.dataset.width;
    });
});

// BACK TO TOP BUTTON
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// IMAGE SLIDER
const images = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
let index = 0;
const slideImg = document.getElementById("slide-img");

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    slideImg.src = images[index];
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    slideImg.src = images[index];
});

// CONTACT FORM (WITH LOCAL STORAGE)
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Fetch form fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Create object to store
    let formData = {
        name: name,
        email: email,
        message: message,
        time: new Date().toLocaleString()
    };

    // Save to Local Storage
    localStorage.setItem("contactData", JSON.stringify(formData));

    alert("Form submitted & saved to Local Storage!");
});
