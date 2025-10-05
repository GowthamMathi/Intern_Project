// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('main-nav').classList.remove('active');
        }
    });
});

// Booking buttons functionality
document.querySelectorAll('.btn-book, .btn-primary, .btn-outline').forEach(button => {
    button.addEventListener('click', function() {
        alert('Booking system would open here. Redirecting to booking page...');
        // In a real implementation, this would redirect to a booking page
        // window.location.href = '/booking';
    });
});

// Login/Signup buttons functionality
document.querySelector('.btn-login').addEventListener('click', function() {
    alert('Login modal would open here.');
});

document.querySelector('.btn-signup').addEventListener('click', function() {
    alert('Signup modal would open here.');
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.destination-card, .feature');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(position < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.querySelectorAll('.destination-card, .feature').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease';
});

// Newsletter form validation
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        
        if (validateEmail(emailInput.value)) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Email validation function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Add a simple image slider for destinations (optional enhancement)
function initDestinationSlider() {
    // This would be implemented if we wanted a slider instead of static cards
    console.log('Destination slider initialization would happen here');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initDestinationSlider();
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    // Initial check on page load
    animateOnScroll();
});