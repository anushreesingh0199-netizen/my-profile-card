
const themeToggle = document.getElementById("themeToggle");
const contactBtn = document.getElementById("contactBtn");
const typingText = document.getElementById("typingText");
const particles = document.getElementById("particles");

// Light and dark theme
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
});

// Animated typing effect
const roles = [
  "Web Developer",
  "IT Student",
  "Creative Thinker",
  "Hackathon Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  typingText.textContent = currentRole.substring(0, charIndex);

  if (!deleting) {
    charIndex++;

    if (charIndex > currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    charIndex--;

    if (charIndex < 0) {
      charIndex = 0;
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();

// Floating background particles
for (let i = 0; i < 24; i++) {
  const particle = document.createElement("span");

  particle.classList.add("particle");
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDuration = (7 + Math.random() * 12) + "s";
  particle.style.animationDelay = (-Math.random() * 15) + "s";
  particle.style.opacity = 0.2 + Math.random() * 0.5;

  const size = 2 + Math.random() * 4;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particles.appendChild(particle);
}

// Contact button
// Contact button click event
contactBtn.addEventListener("click", () => {
    window.location.href = "mailto:anushreesingh0199@gmail.com";
});