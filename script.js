/* ═══════════════════════════════════════════════════════
   PROMISE DAY WEBSITE - JAVASCRIPT
   Features: Scroll animations, auto year
   ═══════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────
// AUTO YEAR IN FOOTER
// ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

// ─────────────────────────────────────────────────────
// SCROLL-BASED FADE-IN ANIMATIONS
// Using Intersection Observer for smooth reveals
// ─────────────────────────────────────────────────────
const observerOptions = {
    threshold: 0.2,  // Trigger when 20% of element is visible
    rootMargin: '0px 0px -50px 0px'  // Slight offset for better timing
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        // When element comes into view, add 'visible' class
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// ─────────────────────────────────────────────────────
// OBSERVE ALL ELEMENTS WITH FADE-IN-SCROLL CLASS
// ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// ─────────────────────────────────────────────────────
// SMOOTH SCROLL BEHAVIOR (Optional enhancement)
// ─────────────────────────────────────────────────────
document.documentElement.style.scrollBehavior = 'smooth';
