// ==========================================================================
// Roshine D - Personal Portfolio JavaScript
// Simple, clean vanilla JavaScript for interactions and accessibility
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    // 1. Automatically insert current year in the footer
    var yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Navigation Toggle
    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            var isExpanded = navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        });

        // Close mobile navigation when any link is clicked
        var links = navLinks.querySelectorAll('.nav-link');
        links.forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu if clicked outside
        document.addEventListener('click', function (event) {
            if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // 3. Contact Form Submission (Client-Side Static Feedback)
    var contactForm = document.getElementById('contact-form');
    var formFeedback = document.getElementById('form-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var nameInput = document.getElementById('contact-name');
            var visitorName = nameInput ? nameInput.value.trim() : '';

            // Display clean confirmation feedback
            formFeedback.className = 'form-feedback success';
            formFeedback.textContent = 'Thank you for reaching out' + (visitorName ? ', ' + visitorName : '') + '! Your message has been received.';

            // Reset form fields
            contactForm.reset();
        });
    }

    // 4. Highlight Active Navigation Link on Scroll
    var sections = document.querySelectorAll('section[id]');
    var navItems = document.querySelectorAll('.nav-link');

    function highlightNavOnScroll() {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(function (current) {
            var sectionHeight = current.offsetHeight;
            var sectionTop = current.offsetTop - 120;
            var sectionId = current.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navItems.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);
});
