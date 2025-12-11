// ====================== SET FOOTER YEAR ======================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


// ====================== BUTTON CLICK GLOW ======================
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
    btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});


// ====================== RIPPLE CLICK EFFECT ======================
document.addEventListener("click", (e) => {
  const ripple = document.createElement("span");
  ripple.classList.add("click-ripple");
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});


// ====================== PAGE TRANSITION ======================
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (!href.startsWith("#")) return;

    e.preventDefault();
    document.body.classList.remove("page-loaded");

    setTimeout(() => {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      document.body.classList.add("page-loaded");
    }, 300);
  });
});


// ====================== SCROLL ANIMATION ======================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

document.querySelectorAll(".animate").forEach((el) => observer.observe(el));


// ====================== PROJECT FILTER ======================
const filterBtns = document.querySelectorAll(".filter-btn");
const allProjects = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelector(".filter-btn.active")?.classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    allProjects.forEach(card => {
      const type = card.getAttribute("data-type");

      if (filter === "all" || filter === type) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});


// ====================== PROJECT SEARCH ======================
const searchInput = document.getElementById("projectSearch");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();

    allProjects.forEach(card => {
      const title = card.querySelector(".project-title").textContent.toLowerCase();
      const desc = card.querySelector(".project-desc").textContent.toLowerCase();

      if (title.includes(query) || desc.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}


// ====================== PROJECT MODAL ======================
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");

document.querySelectorAll(".view-details").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-project");

    modalTitle.textContent = "Project " + id;
    modalDesc.textContent = "Full detailed description for project " + id + " will go here…";
    modalLink.href = "#";

    modal.style.display = "flex";
  });
});

document.querySelector(".close-modal").onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
// ====================== EMAILJS CONTACT FORM ======================
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("statusMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusMsg.style.color = "#F86D09";
  statusMsg.innerText = "Sending...";

  emailjs.sendForm("service_pag2l5r", "template_t8f03sv", this)
    .then(() => {
      statusMsg.style.color = "#4CAF50";
      statusMsg.innerText = "Message sent successfully!";

      form.reset();
    })
    .catch(() => {
      statusMsg.style.color = "red";
      statusMsg.innerText = "Failed to send message. Try again!";
    });
});
// ---------- SUBTLE PROFESSIONAL CURSOR GLOW ----------
const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.top = e.clientY + "px";
  cursorGlow.style.left = e.clientX + "px";
});

// Cursor grows slightly when hovering over clickable items
const growSelectors = "a, button, .btn, .project-card, input, textarea";

document.querySelectorAll(growSelectors).forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursorGlow.style.transform = "translate(-50%, -50%) scale(1.8)";
    cursorGlow.style.background = "rgba(255,255,255,0.45)";
  });

  el.addEventListener("mouseleave", () => {
    cursorGlow.style.transform = "translate(-50%, -50%) scale(1)";
    cursorGlow.style.background = "rgba(255,255,255,0.35)";
  });
});
// ---------- VIEW RESUME COMING SOON POPUP ----------
document.getElementById("resumeBtn").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Resume Coming Soon!");
});

