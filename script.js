const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const purchaseDialog = document.querySelector(".purchase-dialog");

if (purchaseDialog instanceof HTMLDialogElement) {
  document.querySelectorAll("[data-purchase-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      purchaseDialog.showModal();
    });
  });

  const continueLink = purchaseDialog.querySelector(".purchase-dialog-continue");
  if (continueLink) {
    continueLink.addEventListener("click", () => purchaseDialog.close());
  }
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
      mainNav.classList.remove("is-open");
    }
  });
}
