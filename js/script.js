document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Get the section ID from the data-section attribute
            const targetSection = link.getAttribute("data-section");

            // Remove 'active' class from all sections
            sections.forEach(section => section.classList.remove("active"));

            // Add 'active' class to the target section
            document.getElementById(targetSection).classList.add("active");
        });
    });
});
