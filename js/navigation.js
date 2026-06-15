/**
 * LUMIÈRE Restaurant Template — Navigation
 * Copyright © 2026 D-GITALCODE
 */

const Navigation = {
  header: null,
  menuToggle: null,
  mobileNav: null,
  navLinks: [],

  init() {
    this.header = document.querySelector(".header");
    this.menuToggle = document.querySelector(".menu-toggle");
    this.mobileNav = document.querySelector(".mobile-nav");
    this.navLinks = document.querySelectorAll(".nav__link, .mobile-nav__link");

    this.bindEvents();
    this.handleScroll();
    this.setActiveLink();
  },

  bindEvents() {
    window.addEventListener("scroll", () => this.handleScroll(), { passive: true });

    if (this.menuToggle) {
      this.menuToggle.addEventListener("click", () => this.toggleMobileMenu());
    }

    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (this.mobileNav?.classList.contains("is-open")) {
          this.toggleMobileMenu();
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.mobileNav?.classList.contains("is-open")) {
        this.toggleMobileMenu();
      }
    });
  },

  handleScroll() {
    if (!this.header) return;
    const scrolled = window.scrollY > 50;
    this.header.classList.toggle("is-scrolled", scrolled);
  },

  toggleMobileMenu() {
    const isOpen = this.mobileNav.classList.toggle("is-open");
    this.menuToggle.classList.toggle("is-active", isOpen);
    this.menuToggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  },

  setActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            this.navLinks.forEach((link) => {
              link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  },
};

export default Navigation;
