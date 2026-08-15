// components/NavBar.jsx
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import sukoonLogo from "../assets/images/sukoon.png";
import { scrollToSection, scrollToTop } from "../utils/scrollToSection";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Define navigation items with their corresponding section IDs (for Home page)
  const navItems = [
    { name: "Home", path: "/", sectionId: "hero" },
    // { name: "Destinations", path: "/destinations", sectionId: "destinations" },
    // { name: "Experiences", path: "/experiences", sectionId: "experience" },
    { name: "India", path: "/india", sectionId: "india" },
    {
      name: "International",
      path: "/international",
      sectionId: "international",
    },
    { name: "Services", path: "/services", sectionId: "services" },
    { name: "About Us", path: "/about", sectionId: "about" },
  ];

  // const handleNavClick = (e, item) => {
  //   e.preventDefault();
  //   setMobileMenuOpen(false);

  //   // If we're already on the home page, scroll to section
  //   if (location.pathname === "/") {
  //     // If it's the Home link, scroll to top
  //     if (item.path === "/") {
  //       scrollToTop();
  //     } else {
  //       // Try to scroll to the section
  //       const scrolled = scrollToSection(item.sectionId);
  //       // If section doesn't exist on home page, navigate to the page
  //       if (!scrolled) {
  //         navigate(item.path);
  //       }
  //     }
  //   } else {
  //     // If on another page, navigate to the page
  //     // If it's the home page link, just go to home
  //     if (item.path === "/") {
  //       navigate("/");
  //       setTimeout(() => scrollToTop(), 100);
  //     } else {
  //       navigate(item.path);
  //       // If navigating to a page that has a matching section on home,
  //       // we'll scroll to it after navigation
  //       if (item.sectionId) {
  //         // Store the section ID to scroll to after navigation
  //         sessionStorage.setItem("scrollToSection", item.sectionId);
  //       }
  //     }
  //   }
  // };

  // Handle logo click

  // components/NavBar.jsx
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Store the section ID to scroll to
    const sectionId = item.sectionId || item.name.toLowerCase();

    if (location.pathname === "/" || location.pathname === item.path) {
      // If on home page or same path, just scroll
      if (item.name === "Home") {
        scrollToTop();
      } else {
        scrollToSection(sectionId);
      }
    } else {
      // Navigate to home and scroll to section
      sessionStorage.setItem("scrollToSection", sectionId);
      navigate("/");
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      scrollToTop();
    } else {
      navigate("/");
      // Scroll to top after navigation
      setTimeout(() => scrollToTop(), 100);
    }
  };

  return (
    <nav
      className="fixed w-full z-50 backdrop-blur-md bg-black/30 transition-colors duration-300"
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo - Left Side */}
        <a
          href="/"
          className="flex items-center group"
          onClick={handleLogoClick}
        >
          <img
            src={sukoonLogo}
            alt="Logo"
            className="h-10 w-20 mr-2 rounded-full transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={(e) => handleNavClick(e, item)}
              className={`
                relative font-light text-sm uppercase tracking-wider transition-colors duration-300 group
            
              `}
            >
              {item.name}
              {/* {(location.pathname === item.path ||
                (location.pathname === "/" && item.path === "/")) && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-white"></span>
              )} */}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Right Side */}
        <button
          className="md:hidden text-charcoal-300 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed h-screen inset-0 bg-black/90 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`
                  text-2xl font-light uppercase tracking-wider transition-colors duration-300 relative
                  
                `}
              >
                {item.name}
                {/* {(location.pathname === item.path ||
                  (location.pathname === "/" && item.path === "/")) && (
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gold"></span>
                )} */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
