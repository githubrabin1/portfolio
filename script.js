function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return false; 
    }

    alert("Your message has been sent." + name );
    
    document.querySelector("form").reset();

    return false; 
}

// Simple approach - always go to top on reload
window.addEventListener('load', function() {
    if (window.location.hash) {
        window.location.href = window.location.pathname;
    }
});

// DARK THEME FUNCTIONALITY
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    // Toggle dark theme class
    body.classList.toggle('dark-theme');
    
    // Update button text/icon
    if (body.classList.contains('dark-theme')) {
        if(themeToggle) themeToggle.innerHTML = '☀️';
        if(themeToggleMobile) themeToggleMobile.innerHTML = '☀️';
        // Save preference to localStorage
        localStorage.setItem('theme', 'dark');
    } else {
        if(themeToggle) themeToggle.innerHTML = '🌙';
        if(themeToggleMobile) themeToggleMobile.innerHTML = '🌙';
        // Save preference to localStorage
        localStorage.setItem('theme', 'light');
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    // IMPORTANT: Always start in light mode by default
    // Remove any existing dark-theme class first
    body.classList.remove('dark-theme');
    
    // Check for saved theme preference ONLY if it exists
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        // Only apply dark theme if user previously selected it
        body.classList.add('dark-theme');
        if(themeToggle) themeToggle.innerHTML = '☀️';
        if(themeToggleMobile) themeToggleMobile.innerHTML = '☀️';
    } else {
        // Default to light mode
        body.classList.remove('dark-theme');
        if(themeToggle) themeToggle.innerHTML = '🌙';
        if(themeToggleMobile) themeToggleMobile.innerHTML = '🌙';
    }
    
    // Add event listeners to both theme toggle buttons
    if(themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if(themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
});