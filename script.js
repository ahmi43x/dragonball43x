// NAVBAR SECTION JS
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust offset for fixed navbar
                behavior: 'smooth'
            });
        });
    });
});

// HOME SECTION JS
document.addEventListener('DOMContentLoaded', () => {
    const homeBackground = document.querySelector('.home-background');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        homeBackground.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
});

// ABOUT SECTION  JS
document.addEventListener('DOMContentLoaded', () => {
    const aboutImage = document.querySelector('.about-image img');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        aboutImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});
// SEASON SECTION JS
document.addEventListener('DOMContentLoaded', () => {
    // Add any JavaScript functionality if needed
    const seasonCards = document.querySelectorAll('.season-card');
    
    seasonCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.querySelector('.card-image img').style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseout', () => {
            card.querySelector('.card-image img').style.transform = 'scale(1)';
        });
    });
});
// CARD SECTION JS
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'rotateY(180deg)';
        });
        
        card.addEventListener('mouseout', () => {
            card.style.transform = 'rotateY(0deg)';
        });
    });
});
// CHARACTER SECTION JS
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.character-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.querySelector('.character-card-inner').style.transform = 'rotateY(180deg)';
        });
        
        card.addEventListener('mouseout', () => {
            card.querySelector('.character-card-inner').style.transform = 'rotateY(0deg)';
        });
    });
});
// REVIEW SECTION JS
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.review-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.querySelector('.review-card-inner').style.transform = 'rotateY(180deg)';
        });
        
        card.addEventListener('mouseout', () => {
            card.querySelector('.review-card-inner').style.transform = 'rotateY(0deg)';
        });
    });
});
// CONTACT SECTION JS
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation (more can be added as needed)
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }
        
        // Example of form data being logged (replace with actual form handling)
        console.log('Form Submitted:', { name, email, message });
        
        // Reset the form after submission
        contactForm.reset();
        alert('Thank you for your message! We will get back to you soon.');
    });
});
// FOOTER SECTION JAVASCRIPT
document.addEventListener('DOMContentLoaded', () => {
    const footerLinks = document.querySelectorAll('.footer-links a');

    footerLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust offset for fixed navbar
                behavior: 'smooth'
            });
        });
    });
});
