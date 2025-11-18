// Main JavaScript for Cyber Security Networks Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        currentSlide = index;
        if (currentSlide >= testimonialSlides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = testimonialSlides.length - 1;
        }
        
        testimonialSlides[currentSlide].classList.add('active');
    }
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() {
            showSlide(currentSlide - 1);
        });
        
        nextButton.addEventListener('click', function() {
            showSlide(currentSlide + 1);
        });
        
        // Auto slide every 5 seconds
        setInterval(function() {
            showSlide(currentSlide + 1);
        }, 5000);
    }
    
    // Scroll Animations
    function checkScroll() {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // Add fade-in class to elements that should animate on scroll
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky header on scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Form validation for contact page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
});


// Additional JavaScript for All Pages

// FAQ Category Tabs
function initFaqTabs() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    if (categoryBtns.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Remove active class from all buttons and categories
                categoryBtns.forEach(b => b.classList.remove('active'));
                faqCategories.forEach(cat => cat.classList.remove('active'));
                
                // Add active class to clicked button and corresponding category
                this.classList.add('active');
                document.getElementById(category).classList.add('active');
            });
        });
    }
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // In a real application, you would send the email to a server here
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
}

// Service Detail Animations
function initServiceDetails() {
    const serviceDetails = document.querySelectorAll('.service-detail');
    
    serviceDetails.forEach(detail => {
        detail.classList.add('fade-in');
    });
}

// Course Card Animations
function initCourseCards() {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        card.classList.add('fade-in');
    });
}

// Blog Card Animations
function initBlogCards() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.classList.add('fade-in');
    });
}

// Contact Form Additional Validation
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function validateField(field) {
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
    }
    
    clearFieldError(field);
    return true;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ff4444';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('error');
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Initialize all page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Existing initialization code...
    
    // New initializations
    initFaqTabs();
    initNewsletterForm();
    initServiceDetails();
    initCourseCards();
    initBlogCards();
    initContactForm();
    
    // Add fade-in class to additional elements
    const additionalElements = document.querySelectorAll('.service-detail, .course-card, .blog-card, .team-member, .value-card');
    additionalElements.forEach(el => {
        el.classList.add('fade-in');
    });
});