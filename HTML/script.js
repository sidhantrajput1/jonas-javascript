"use strict";

const content = document.getElementById("content");
const loader = document.getElementById("loader");

// Simulate adding content
function addContent() {
  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${content.children.length + 1}`;
    div.className = "item";
    content.appendChild(div);
  }
}

// Check if user scrolled to bottom
function isAtBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
}

// Listen to scroll event
window.addEventListener("scroll", () => {
  if (isAtBottom()) {
    loader.style.display = "block";
    setTimeout(() => {
      addContent();
      loader.style.display = "none";
    }, 1000); // simulate loading delay
  }
});

// Initial content
addContent();
