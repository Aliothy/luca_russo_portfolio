// change the section
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


function toggleText(textId) {
    var textElement = document.getElementById(textId);
    if (textElement.style.display === "block") {
        textElement.style.display = "none";
    } else {
        textElement.style.display = "block";
    }
}


// // JavaScript to Handle Modal
// document.addEventListener('DOMContentLoaded', () => {
//     const modalDescription = document.getElementById('modal content');
//     const closeModal = document.getElementById('close modal');
  
//     // Add click event to all clickable images
//     document.querySelectorAll('.clickable').forEach(image => {
//       image.addEventListener('click', () => {
//         const src = image.getAttribute('src');
//         const description = image.getAttribute('data-description');
  
//         modalImage.src = src;
//         modalDescription.textContent = description;
  
//         // Show the modal
//         modal.style.display = 'block';
//       });
//     });
  
//     // Close the modal when the close button is clicked
//     closeModal.addEventListener('click', () => {
//       modal.style.display = 'none';
//     });
  
//     // Close the modal when clicking outside of the modal content
//     window.addEventListener('click', event => {
//       if (event.target === modal) {
//         modal.style.display = 'none';
//       }
//     });
//   });

