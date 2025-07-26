// Toggle menu functionality
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Initialize EmailJS
emailjs.init("MkYE3mb1G3B5DE9bT"); // Your Public Key

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm("service_7d6c4ts", "template_gssts6t", this)
    .then(function (response) {
      alert("✅ Thanks for reaching out! We'll get back to you soon.");
      console.log("SUCCESS!", response.status, response.text);
    }, function (error) {
      alert("❌ Failed to send message. Please try again later.");
      console.error("FAILED...", error);
    });

  this.reset();
});
