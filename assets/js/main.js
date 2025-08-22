import { initializeCopyButtons } from "./modules/copy-handler.js";
import { initializeAutoTyping } from "./modules/text-scramble.js";
import { setDynamicYear } from "./modules/dynamic-year.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeCopyButtons();
  initializeAutoTyping();
  setDynamicYear();
  // Initialize any other modules or components here if needed
});
