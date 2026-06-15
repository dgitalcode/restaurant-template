/**
 * LUMIÈRE Restaurant Template — Gallery & Lightbox
 * Copyright © 2026 D-GITALCODE
 */

const Gallery = {
  lightbox: null,
  lightboxImage: null,
  lightboxCaption: null,
  images: [],
  currentIndex: 0,

  init() {
    this.lightbox = document.querySelector(".lightbox");
    this.lightboxImage = document.querySelector(".lightbox__image");
    this.lightboxCaption = document.querySelector(".lightbox__caption");
    this.images = Array.from(document.querySelectorAll(".gallery-item"));

    if (!this.lightbox || this.images.length === 0) return;

    this.bindEvents();
  },

  bindEvents() {
    this.images.forEach((item, index) => {
      item.addEventListener("click", () => this.open(index));
      item.setAttribute("tabindex", "0");
      item.setAttribute("role", "button");
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.open(index);
        }
      });
    });

    this.lightbox.querySelector(".lightbox__close")?.addEventListener("click", () => this.close());
    this.lightbox.querySelector(".lightbox__prev")?.addEventListener("click", () => this.navigate(-1));
    this.lightbox.querySelector(".lightbox__next")?.addEventListener("click", () => this.navigate(1));

    this.lightbox.addEventListener("click", (e) => {
      if (e.target === this.lightbox) this.close();
    });

    document.addEventListener("keydown", (e) => {
      if (!this.lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") this.close();
      if (e.key === "ArrowLeft") this.navigate(-1);
      if (e.key === "ArrowRight") this.navigate(1);
    });
  },

  open(index) {
    this.currentIndex = index;
    this.updateImage();
    this.lightbox.classList.add("is-open");
    this.lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    this.lightbox.querySelector(".lightbox__close")?.focus();
  },

  close() {
    this.lightbox.classList.remove("is-open");
    this.lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  },

  navigate(direction) {
    this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
    this.updateImage();
  },

  updateImage() {
    const item = this.images[this.currentIndex];
    const img = item.querySelector("img");
    if (!img) return;

    this.lightboxImage.src = img.src;
    this.lightboxImage.alt = img.alt;
    this.lightboxCaption.textContent = img.alt;
  },
};

export default Gallery;
