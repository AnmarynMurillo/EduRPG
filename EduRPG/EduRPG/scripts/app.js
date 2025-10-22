// scripts/app.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Modal login functionality
    const loginModal = document.getElementById('loginModal');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButton = document.getElementById('closeModal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            loginModal.style.display = 'block';
        });
    });

    closeModalButton.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Intersection Observer for animations on scroll
    const cards = document.querySelectorAll('.feature-card');
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});