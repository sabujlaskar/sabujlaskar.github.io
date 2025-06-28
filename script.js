// script.js - Optional interactivity

// Scroll to top button (future enhancement)
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerText = "⬆️ Top";
    scrollBtn.id = "scrollTopBtn";
    scrollBtn.style.display = "none";
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "20px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.padding = "0.5rem 1rem";
    scrollBtn.style.backgroundColor = "#003366";
    scrollBtn.style.color = "white";
    scrollBtn.style.border = "none";
    scrollBtn.style.borderRadius = "4px";
    scrollBtn.style.cursor = "pointer";
  
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    document.body.appendChild(scrollBtn);
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
  });
  