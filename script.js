function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;

    if (mobileMenu.classList.contains('active')) {
        // Close menu
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
    } else {
        // Open menu
        mobileMenu.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        toggleMenu();
    }
});

// Counter Animation
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Animation duration in milliseconds

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        
        const updateCount = () => {
            const increment = target / speed;
            
            if (count < target) {
                count += increment;
                counter.innerText = Math.floor(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    // Intersection Observer to trigger counter animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}); 