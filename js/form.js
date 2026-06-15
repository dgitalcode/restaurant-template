/**
 * LUMIÈRE Restaurant Template — Forms
 * Copyright © 2026 D-GITALCODE
 */

const Forms = {
  init() {
    this.initReservationForm();
    this.initNewsletterForm();
    this.initMenuTabs();
  },

  initReservationForm() {
    const form = document.querySelector("#reservation-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const message = form.querySelector(".form-message");
      const formData = new FormData(form);

      const required = ["name", "email", "phone", "date", "time", "guests"];
      const isValid = required.every((field) => formData.get(field)?.toString().trim());

      if (!isValid) {
        this.showMessage(message, "Please fill in all required fields.", "error");
        return;
      }

      const email = formData.get("email").toString();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        this.showMessage(message, "Please enter a valid email address.", "error");
        return;
      }

      this.showMessage(
        message,
        "Thank you! Your reservation request has been received. We will confirm shortly.",
        "success"
      );
      form.reset();
    });
  },

  initNewsletterForm() {
    const form = document.querySelector("#newsletter-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const message = form.querySelector(".form-message");

      if (!input?.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        this.showMessage(message, "Please enter a valid email address.", "error");
        return;
      }

      this.showMessage(message, "Welcome to our inner circle! Check your inbox for confirmation.", "success");
      form.reset();
    });
  },

  initMenuTabs() {
    const tabs = document.querySelectorAll(".menu-tab");
    const panels = document.querySelectorAll(".menu-panel");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;

        tabs.forEach((t) => {
          t.classList.toggle("is-active", t === tab);
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
        });

        panels.forEach((panel) => {
          panel.classList.toggle("is-active", panel.id === `menu-${target}`);
        });
      });
    });
  },

  showMessage(element, text, type) {
    if (!element) return;
    element.textContent = text;
    element.className = `form-message is-${type}`;
    element.setAttribute("role", "alert");
  },
};

export default Forms;
