/**
 * LUMIÈRE Restaurant Template — Main Entry Point
 * Copyright © 2026 D-GITALCODE
 */

import Navigation from "./navigation.js";
import Gallery from "./gallery.js";
import Forms from "./form.js";
import Animations from "./animations.js";

document.addEventListener("DOMContentLoaded", () => {
  Navigation.init();
  Gallery.init();
  Forms.init();
  Animations.init();
});
