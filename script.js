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


