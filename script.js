// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
let mobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileMenu.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        mobileMenu.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// Smooth scroll to sections
function scrollToSection(id) {
    // Close mobile menu if open
    if (mobileMenuOpen) {
        toggleMobileMenu();
    }
    
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Newsletter form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const formWrapper = document.getElementById('newsletter-form-wrapper');
    const successDiv = document.getElementById('newsletter-success');
    const emailInput = document.getElementById('email');
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value;
            if (!email) return;
            
            // Disable form
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="btn-icon animate-spin" style="margin-right: 0.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="2" x2="12" y2="6"></line>
                    <line x1="12" y1="18" x2="12" y2="22"></line>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                    <line x1="2" y1="12" x2="6" y2="12"></line>
                    <line x1="18" y1="12" x2="22" y2="12"></line>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>
                Sending...
            `;
            
            // Simulate API call
            setTimeout(function() {
                formWrapper.style.display = 'none';
                successDiv.style.display = 'block';
                emailInput.value = '';
                submitBtn.disabled = false;
                submitBtn.innerHTML = `
                    Get Access
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                `;
            }, 1500);
        });
    }
});

function resetNewsletterForm() {
    const formWrapper = document.getElementById('newsletter-form-wrapper');
    const successDiv = document.getElementById('newsletter-success');
    
    successDiv.style.display = 'none';
    formWrapper.style.display = 'block';
}

// Add CSS for spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .animate-spin {
        animation: spin 1s linear infinite;
    }
`;
document.head.appendChild(style);
