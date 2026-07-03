// utils/scrollToSection.js
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    return true;
  }
  return false;
};

// For scrolling to top
export const scrollToTop = (behavior = "smooth") => {
  window.scrollTo({
    top: 0,
    behavior,
  });
};
