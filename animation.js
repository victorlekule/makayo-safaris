// animation.js - Reusable Scroll Animation Engine
document.addEventListener("DOMContentLoaded", () => {
    // 1. Set up the observer options
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    // 2. Create the Observer
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'active' class to trigger the CSS transition
                entry.target.classList.add('active');
                
                // Optional: Stop observing once animated so it doesn't repeat every scroll
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // 3. Grab all elements we want to animate
    const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in');

    // 4. Tell the observer to watch them
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% is visible
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate in
                entry.target.classList.add('active');
            } else {
                // RESET animation when it leaves the screen (Scroll Up/Down fix)
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in');

    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
});