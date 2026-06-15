/**
 * LUMIÈRE Restaurant Template — Scroll Animations
 * Copyright © 2026 D-GITALCODE
 */

const Animations = {
  init() {
    this.initReveal();
    this.initHeroParallax();
    this.initHeroLoad();
  },

  initReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (elements.length === 0) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  },

  initHeroParallax() {
    const hero = document.querySelector(".hero");
    const heroBg = document.querySelector(".hero__bg img");
    if (!hero || !heroBg) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    window.addEventListener(
      "scroll",
      () => {
        const scrolled = window.scrollY;
        const heroHeight = hero.offsetHeight;
        if (scrolled < heroHeight) {
          heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.3}px)`;
        }
      },
      { passive: true }
    );
  },

  initHeroLoad() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    window.addEventListener("load", () => {
      hero.classList.add("is-loaded");
    });
  },
};

export default Animations;
