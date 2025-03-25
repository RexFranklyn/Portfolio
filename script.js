document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle navigation menu
    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        navToggle.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Highlight active menu item on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});