// Get modal elements
const modal = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-btn');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Open modal
loginBtn.onclick = function() {
    modal.style.display = 'block';
}

// Close modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle login form submission
loginForm.onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Dummy login validation
    if (email === 'admin@example.com' && password === 'password') {
        loginMessage.textContent = 'Login successful!';
        loginMessage.style.color = 'green';
        setTimeout(() => {
            modal.style.display = 'none';
            loginMessage.textContent = '';
        }, 2000);
    } else {
        loginMessage.textContent = 'Invalid credentials. Try admin@example.com / password';
        loginMessage.style.color = 'red';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission (dummy)
document.querySelector('#contact form').onsubmit = function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
}

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});


