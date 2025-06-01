// This specific HTML structure is mostly for rendering a Canva embed,
// and it heavily relies on inline styles and class names that
// are likely managed by Canva's own JavaScript.
// There isn't much dynamic functionality exposed in the provided HTML snippet
// that would typically go into a script.js file for client-side interaction.

// If you plan to add custom functionality, such as:
// - Opening/closing the modal dynamically
// - Resizing the iframe based on certain conditions
// - Handling interactions with elements outside the Canva embed

// You would add your JavaScript code here.
// For example, a simple script to close the modal if clicked outside:

document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.querySelector('.modal-container');
    const modalContent = document.querySelector('.modal-content');

    if (modalContainer && modalContent) {
        modalContainer.addEventListener('click', (event) => {
            // If the click is on the container itself, but not on the content
            if (event.target === modalContainer) {
                // You would typically hide or remove the modal here
                // modalContainer.style.display = 'none'; // Example: Hide the modal
                console.log('Clicked outside the Canva embed modal.');
            }
        });
    }
});

// Any other custom scripts would go here.
