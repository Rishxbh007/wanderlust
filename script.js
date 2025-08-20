// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the hero explore button
    const exploreBtn = document.getElementById('explore-btn');
    
    // Get all booking buttons
    const bookBtns = document.querySelectorAll('.book-btn');
    
    // Array of travel inspiration messages
    const travelMessages = [
        "🌍 The world is waiting for you to explore it!",
        "✈️ Adventure is out there - are you ready?",
        "🗺️ Every journey begins with a single step!",
        "🏖️ Paradise is calling your name!",
        "⛰️ Mountains, beaches, cities - what's your next destination?",
        "🎒 Pack your bags and let's make memories!"
    ];
    
    // Counter for explore button clicks
    let exploreClicks = 0;
    
    // Hero button functionality
    exploreBtn.addEventListener('click', function() {
        exploreClicks++;
        
        // Get random travel message
        const randomIndex = Math.floor(Math.random() * travelMessages.length);
        const message = travelMessages[randomIndex];
        
        // Show inspiring alert
        alert(${message}\n\nYou've explored ${exploreClicks} time${exploreClicks !== 1 ? 's' : ''}! Ready to book?);
        
        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Scroll to destinations after first click
        if (exploreClicks === 1) {
            setTimeout(() => {
                document.getElementById('destinations').scrollIntoView({
                    behavior: 'smooth'
                });
            }, 500);
        }
    });
    
    // Booking button functionality
    bookBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const packageName = this.getAttribute('data-package');
            const packagePrice = this.closest('.package-card').querySelector('.price').textContent;
            
            // Show booking confirmation
            const confirmed = confirm(
                🎉 Book ${packageName} Package?\n\n +
                Price: ${packagePrice}\n\n +
                Click OK to proceed with booking or Cancel to continue browsing.
            );
            
            if (confirmed) {
                alert(
                    ✅ Booking Confirmed!\n\n +
                    Package: ${packageName}\n +
                    Price: ${packagePrice}\n\n +
                    Thank you for choosing WanderLust! Our travel expert will contact you soon with detailed itinerary and payment options.
                );
                
                // Change button text temporarily
                const originalText = this.textContent;
                this.textContent = 'Booked! ✓';
                this.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                }, 3000);
            } else {
                alert("No problem! Take your time to explore our other amazing packages. 😊");
            }
            
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover animations to destination cards
    const destinationCards = document.querySelectorAll('.destination-card');
    
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Welcome message
    setTimeout(() => {
        console.log("🌍 Welcome to WanderLust Travel!");
        console.log("✈️ Ready to explore amazing destinations? Click the buttons to start your journey!");
    }, 1000);
});

// Utility function for custom travel alerts
function showTravelAlert(destination, message) {
    alert(🌍 ${destination}\n\n${message});
}