// components/ScrollToSectionOnLoad.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";
import { scrollToSection } from "../utils/scrollToSection";

const ScrollToSectionOnLoad = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a section to scroll to
    const sectionId = sessionStorage.getItem("scrollToSection");
    if (sectionId && location.pathname === "/") {
      // Small delay to ensure DOM is rendered
      setTimeout(() => {
        scrollToSection(sectionId);
        sessionStorage.removeItem("scrollToSection");
      }, 300);
    }
  }, [location]);

  return null;
};

export default ScrollToSectionOnLoad;
