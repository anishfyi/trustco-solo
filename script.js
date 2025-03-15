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