document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeIcon = document.getElementById('darkMode-icon');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    }
    
    darkModeIcon.addEventListener('click', () => {
        body.toggleAttribute('data-theme');
        const isDark = body.hasAttribute('data-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        if (isDark) {
            darkModeIcon.classList.replace('bx-moon', 'bx-sun');
        } else {
            darkModeIcon.classList.replace('bx-sun', 'bx-moon');
        }
    });
    
    // Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
    
    // Scroll sections active link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    window.addEventListener('scroll', () => {
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
            
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Scroll reveal animation
    const scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        delay: 200,
        reset: true
    });
    
    scrollReveal.reveal('.home-content, .section-heading', { origin: 'top' });
    scrollReveal.reveal('.home-img, .about-img, .skills-box, .portfolio-box, .contact-form', { origin: 'bottom' });
    scrollReveal.reveal('.home-content h1, .about-content', { origin: 'left' });
    scrollReveal.reveal('.home-content p, .about-description', { origin: 'right' });
});