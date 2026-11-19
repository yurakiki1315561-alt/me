document.addEventListener("DOMContentLoaded", () => {
  const currentPage = document.body.dataset.page;
  const currentNav = document.querySelector(`[data-nav="${currentPage}"]`);

  if (currentNav) {
    currentNav.classList.add("is-active");
    currentNav.setAttribute("aria-current", "page");
  }

  document.querySelectorAll("[data-current-year]").forEach((year) => {
    year.textContent = new Date().getFullYear();
  });

  const header = document.querySelector(".site-header");
  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 4);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
});
