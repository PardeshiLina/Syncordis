// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Button hover effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = "#dc1a4f"; // Change to a brighter red on hover
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = "#a4094c"; // Original color
    });
});

// Active section highlight on scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop - section.offsetHeight * 0.3 &&
            scrollPos < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.3
        ) {
            const currentId = section.getAttribute("id");
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    });
});

function removeAllActiveClasses() {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
    });
}

function addActiveClass(id) {
    const selector = `.nav-link[href="#${id}"]`;
    const link = document.querySelector(selector);
    if (link) link.classList.add("active");
}

// Example of a pop-up effect for specific elements (if using modals or pop-ups)
document.querySelectorAll(".service-box").forEach(box => {
    box.addEventListener("click", () => {
        alert("Service details clicked!"); // Replace with modal or actual pop-up content
    });
});
