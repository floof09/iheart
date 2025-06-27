document.addEventListener('DOMContentLoaded', () => {
  // === Fade-in Scroll Animation ===
  const animatedElements = document.querySelectorAll('.animate-fade, .animate-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));

  // === Scroll to Top Button ===
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === Smooth internal page links ===
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // === Typing Animation ===
  const textArray = [
    "Empowering Kids.",
    "Supporting Families.",
    "Building Futures."
  ];
  let textIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typed-text");

  function type() {
    if (charIndex < textArray[textIndex].length) {
      typingElement.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        typingElement.textContent = "";
        charIndex = 0;
        textIndex = (textIndex + 1) % textArray.length;
        type();
      }, 2000);
    }
  }

  if (typingElement) {
    type();
  }

  // === Dark Mode Toggle ===
  const darkToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
  }

  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });
  }

  // === Mobile Nav Toggle === ✅
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // Optional: Auto-close mobile nav when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
      }
    });
  });

  // === Custom Cursor (Optional aesthetic) ===
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
});
const toggle = document.getElementById("darkModeToggle");

// Apply dark mode based on toggle switch
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});

// Optional: Remember user choice using localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});
