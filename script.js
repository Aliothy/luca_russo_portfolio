document.addEventListener("DOMContentLoaded", () => {
  // Navigation: event delegation
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest(".nav-link");
    if (link) {
      e.preventDefault();
      const targetSection = link.getAttribute("data-section");
      if (!targetSection) return;

      document.querySelectorAll(".section.active").forEach(section =>
        section.classList.remove("active")
      );
      const target = document.getElementById(targetSection);
      if (target) target.classList.add("active");
    }
  });

  // Project filter: event delegation
  document.body.addEventListener("click", (e) => {
    const button = e.target.closest(".filter-btn");
    if (button) {
      const filter = button.getAttribute("data-filter");
      if (!filter) return;

      document.querySelectorAll(".filter-btn.active").forEach(btn =>
        btn.classList.remove("active")
      );
      button.classList.add("active");

      document.querySelectorAll(".project-card").forEach(card => {
        card.style.display =
          filter === "all" || card.classList.contains(filter) ? "flex" : "none";
      });
    }
  });



  
