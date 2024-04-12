document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".question");

    button.addEventListener("click", () => {
      const content = item.querySelector(".answer");
      const isOpen = content.style.display === "block";

      faqItems.forEach((otherItem) => {
        otherItem.querySelector(".answer").style.display = "none";
      });

      if (isOpen) {
        content.style.display = "none";
        this.setAttribute("src", "assets/images/icon-minus.svg");
      } else {
        content.style.display = "block";
      }
    });
  });

  const toggleIcons = document.querySelectorAll(".toggle-icon");

  toggleIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const faqItem = this.closest(".faq-item");
      const answer = faqItem.querySelector(".answer");

      faqItem.classList.toggle("active");

      if (faqItem.classList.contains("active")) {
        this.setAttribute("src", "assets/images/icon-minus.svg");
        const content = item.querySelector(".answer");
        const isOpen = content.style.display === "block";
      } else {
        this.setAttribute("src", "assets/images/icon-plus.svg");
      }
    });
  });

  toggleIcons.forEach((icon) => {
    icon.addEventListener("keypress", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        this.click();
      }
    });
  });
});
