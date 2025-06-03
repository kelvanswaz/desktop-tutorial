document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close all other open FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle the clicked FAQ item
            item.classList.toggle('active');
        });
    });

    // How It Works Tabs
    const vintageTab = document.querySelector('.vintage-tab');
    const classicTab = document.querySelector('.classic-tab');
    const vintageProcess = document.getElementById('vintage-process');
    const classicProcess = document.getElementById('classic-process');

    vintageTab.addEventListener('click', function() {
        // Activate vintage tab and show vintage process
        vintageTab.classList.add('tab-active');
        vintageTab.classList.remove('bg-white');
        classicTab.classList.remove('tab-active');
        classicTab.classList.add('bg-white');
        vintageProcess.classList.remove('hidden');
        classicProcess.classList.add('hidden');
    });

    classicTab.addEventListener('click', function() {
        // Activate classic tab and show classic process
        classicTab.classList.add('tab-active');
        classicTab.classList.remove('bg-white');
        vintageTab.classList.remove('tab-active');
        vintageTab.classList.add('bg-white');
        classicProcess.classList.remove('hidden');
        vintageProcess.classList.add('hidden');
    });
});


// FAQ

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling; // Get the next sibling, which is the content div

            // Toggle the 'active' class on the header for arrow rotation
            header.classList.toggle('active');

            // Check if the content is currently open
            if (content.classList.contains('open')) {
                // If it's open, close it
                content.style.maxHeight = "0";
                content.classList.remove('open'); // Remove 'open' class for visual state
            } else {
                // If it's closed, open it
                content.classList.add('open'); // Add 'open' class first
                // Temporarily set max-height to 'auto' to correctly calculate scrollHeight
                content.style.maxHeight = 'auto';
                const scrollHeight = content.scrollHeight;

                // Set max-height back to 0, then to scrollHeight for the transition
                content.style.maxHeight = '0px'; // Ensure it starts from 0 for animation
                // Use a small timeout to ensure the browser registers the 0px before animating
                requestAnimationFrame(() => {
                    content.style.maxHeight = scrollHeight + "px";
                });

                // After the transition, set max-height to 'auto' to ensure it adapts to content changes or window resizing
                const onTransitionEnd = () => {
                    content.removeEventListener('transitionend', onTransitionEnd);
                    if (content.classList.contains('open')) { // Only set to auto if still open
                        content.style.maxHeight = 'auto';
                    }
                };
                content.addEventListener('transitionend', onTransitionEnd);
            }
        });
    });
});
