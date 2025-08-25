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


  