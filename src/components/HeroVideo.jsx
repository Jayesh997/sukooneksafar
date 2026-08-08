// components/HeroVideo.tsx
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { NavLink } from "react-router";
import WebsiteFrontVideo from "../assets/videos/WebsiteFrontVideo1.mp4";
import aboutUsImage from "../assets/images/aboutUs.jpg"; // Import your about us image
import logo from "../assets/images/navLogo.png";
import WhatsAppButton from "../components/WhatsAppButton";

const HeroVideo = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const [isMuted, setIsMuted] = useState(true);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet/mobile breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Conditional rendering: Video for desktop, Image for mobile */}
      {isMobile ? (
        // Mobile: Show image instead of video
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutUsImage})` }}
        ></div>
      ) : (
        // Desktop: Show video
        <ReactPlayer
          src={WebsiteFrontVideo}
          playing
          loop
          muted={true}
          width="100%"
          height="100%"
          className="absolute inset-0 object-cover"
        />
      )}

      {/* Gradient Overlay (Luxury Style) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <img src={logo} alt="cherish" />
        <h1 className="text-5xl md:text-7xl font-serif mb-4 text-gold">
          Sukoon Ek Safar...
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Where Every Journey Begins With Comfort, Care & Trust
        </p>

        {/* <NavLink
          to="/about"
          className="bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Explore More
        </NavLink> */}

        <WhatsAppButton
          message={`Hi! I'm interested in Exploring More about Sukoon Ek Safar.`}
          buttonText={"Explore More"}
          className="bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
        />
      </div>
    </div>
  );
};

export default HeroVideo;
