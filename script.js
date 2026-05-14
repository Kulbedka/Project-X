const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");
const contactItems = Array.from(document.querySelectorAll(".contact-item"));
const contactPrev = document.querySelector(".contact-arrow-left");
const contactNext = document.querySelector(".contact-arrow-right");

let activeContact = contactItems.findIndex((item) => item.classList.contains("is-active"));

if (activeContact === -1) {
  activeContact = 0;
  contactItems[activeContact]?.classList.add("is-active");
}

function setMenuOpen(isOpen) {
  header?.classList.toggle("is-open", isOpen);
  menuButton?.setAttribute("aria-expanded", String(isOpen));
}

function showContact(index) {
  if (!contactItems.length) return;

  activeContact = (index + contactItems.length) % contactItems.length;

  contactItems.forEach((item, itemIndex) => {
    item.classList.toggle("is-active", itemIndex === activeContact);
  });
}

menuButton?.addEventListener("click", () => {
  setMenuOpen(!header?.classList.contains("is-open"));
});

contactPrev?.addEventListener("click", () => {
  showContact(activeContact - 1);
});

contactNext?.addEventListener("click", () => {
  showContact(activeContact + 1);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    setMenuOpen(false);
  }
});
