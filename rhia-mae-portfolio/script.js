document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  // Automatically highlight the current page
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const target = link.getAttribute("href");
    if (target === current || (current === "" && target === "index.html")) {
      link.classList.add("active");
    }
  });

  // Document category filters
  const tabs = document.querySelectorAll(".doc-tab");
  const docs = document.querySelectorAll(".doc-card");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;
      docs.forEach(doc => {
        doc.hidden = filter !== "all" && doc.dataset.category !== filter;
      });
    });
  });

  // Dynamic year
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
