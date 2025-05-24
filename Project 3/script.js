var typed = new Typed('#element', {
  strings: ['Web developer', 'Web designer', 'FullStack_Webdeveloper'],
  typeSpeed: 50,
});

const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    contactForm.reset();
  });
}
