import React, { useState } from "react";
import { NavLink } from "react-router";
import sukoonLogo from "../assets/images/sukoon.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    // { name: "Destinations", path: "/destinations" },
    { name: "About Us", path: "/about" },
    { name: "India", path: "/india" },
    { name: "International", path: "/international" },
    { name: "Experiences", path: "/experiences" },
  ];

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
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
        <NavLink
          to="/"
          className="flex items-center group"
          onClick={handleNavClick}
        >
          <img
            src={sukoonLogo}
            alt="Logo"
            className="h-10 w-20 mr-2 rounded-full transition-transform duration-300 group-hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative font-light text-sm uppercase tracking-wider transition-colors duration-300 group ${
                  isActive
                    ? "text-white font-medium"
                    : "text-charcoal-300 hover:text-white"
                }`
              }
              onClick={handleNavClick}
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-white"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </>
              )}
            </NavLink>
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
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-2xl font-light uppercase tracking-wider transition-colors duration-300 relative ${
                    isActive
                      ? "text-gold font-medium"
                      : "text-white hover:text-gold"
                  }`
                }
                onClick={handleNavClick}
              >
                {item.name}
                {({ isActive }) =>
                  isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gold"></span>
                  )
                }
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
