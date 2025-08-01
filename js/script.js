// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links (FIXED VERSION)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only prevent default for anchor links (starting with #)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // For other links (like index.html, publications.html), let them work normally
        });
    });

    // Download CV functionality
    const downloadBtn = document.querySelector('.download-cv');
    downloadBtn.addEventListener('click', function() {
        const cvUrl = 'assets/Bhaswata_Kaushik_Resume.pdf';                    // ← Your CV file path
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Bhaswata_Kaushik_Resume.pdf';               // ← Name for downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });


    // Typing animation for the intro text
    const introText = "Hi, I'm Bhaswata";
    const introElement = document.querySelector('.intro h2');
    let index = 0;

    function typeWriter() {
        if (index < introText.length) {
            introElement.textContent = introText.slice(0, index + 1);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing animation after page load
    setTimeout(typeWriter, 500);
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    const moonIconClass = 'fa-moon';
    const sunIconClass = 'fa-sun';

    // Load saved dark mode preference from localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-theme');
        toggleBtn.querySelector('i').classList.remove(moonIconClass);
        toggleBtn.querySelector('i').classList.add(sunIconClass);
    }

    // Toggle dark mode on button click
    toggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        let icon = toggleBtn.querySelector('i');

        if (body.classList.contains('dark-theme')) {
            // Switch to sun icon in dark mode
            icon.classList.remove(moonIconClass);
            icon.classList.add(sunIconClass);
            localStorage.setItem('darkMode', 'enabled');
        } else {
            // Switch to moon icon in light mode
            icon.classList.remove(sunIconClass);
            icon.classList.add(moonIconClass);
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});