import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import bgImg from "../assets/images/paperBg.jpg";

// Experience Card Component
const ExperienceCard = ({ item, onClick }) => {
  return (
    <div
      className="flex-shrink-0 w-72 mx-3 cursor-pointer group"
      onClick={() => onClick(item)}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
        <div className="h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 line-clamp-2">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

// Individual Carousel Component with Controls
const Carousel = ({ items, onCardClick, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const itemsPerView = 3; // Number of items visible at once
  const totalItems = items.length;
  const duplicatedItems = [...items, ...items, ...items]; // Triple for seamless looping
  const startIndex = items.length; // Start from middle set

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Handle seamless looping
  useEffect(() => {
    if (currentIndex === 0) {
      // If at the beginning, jump to the middle set
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(startIndex);
        if (carouselRef.current) {
          carouselRef.current.style.transition = "none";
          const offset = -(startIndex * (288 + 24)); // 288px width + 24px gap
          carouselRef.current.style.transform = `translateX(${offset}px)`;
          // Force reflow
          carouselRef.current.offsetHeight;
          carouselRef.current.style.transition = "transform 500ms ease-in-out";
        }
      }, 500);
    } else if (currentIndex === duplicatedItems.length - 1) {
      // If at the end, jump to the middle set
      setTimeout(() => {
        setIsTransitioning(false);
        const newIndex = startIndex + (items.length - 1);
        setCurrentIndex(newIndex);
        if (carouselRef.current) {
          carouselRef.current.style.transition = "none";
          const offset = -(newIndex * (288 + 24));
          carouselRef.current.style.transform = `translateX(${offset}px)`;
          // Force reflow
          carouselRef.current.offsetHeight;
          carouselRef.current.style.transition = "transform 500ms ease-in-out";
        }
      }, 500);
    } else {
      // Normal transition complete
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  }, [currentIndex, startIndex, duplicatedItems.length, items.length]);

  // Update carousel position
  useEffect(() => {
    if (carouselRef.current && !isTransitioning) {
      const offset = -(currentIndex * (288 + 24)); // 288px width + 24px gap
      carouselRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex, isTransitioning]);

  // Initialize carousel position
  useEffect(() => {
    if (carouselRef.current) {
      const initialIndex = startIndex;
      setCurrentIndex(initialIndex);
      const offset = -(initialIndex * (288 + 24));
      carouselRef.current.style.transform = `translateX(${offset}px)`;
      carouselRef.current.style.transition = "transform 500ms ease-in-out";
    }
  }, []);

  return (
    <div className="mb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-serif text-gray-800 pl-4 border-l-4 border-gold">
          {title}
        </h2>
        {/* <div className="flex gap-3">
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="bg-gold hover:bg-gold-dark text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            aria-label="Previous"
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
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="bg-gold hover:bg-gold-dark text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            aria-label="Next"
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
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div> */}
      </div>

      <div className="relative overflow-hidden py-3 px-3">
        <div
          ref={carouselRef}
          className="flex"
          style={{
            willChange: "transform",
            transition: "transform 500ms ease-in-out",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <ExperienceCard
              key={`${item.id}-${index}`}
              item={item}
              onClick={onCardClick}
            />
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, index) => {
            // Calculate which dot should be active based on current position
            let isActive = false;
            const normalizedIndex =
              (((currentIndex - startIndex) % items.length) + items.length) %
              items.length;
            if (normalizedIndex === index) {
              isActive = true;
            }
            return (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    const targetIndex = startIndex + index;
                    setCurrentIndex(targetIndex);
                    setIsTransitioning(true);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive ? "bg-gold w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Main Experience Component
const Experience = () => {
  const navigate = useNavigate();

  // Sample data for experiences
  const experiences = [
    {
      id: 1,
      title: "Luxury Himalayan Retreat",
      description:
        "Experience breathtaking mountain views from our exclusive luxury lodges in the Himalayas.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 2,
      title: "Golden Triangle Tour",
      description:
        "Discover India's rich heritage with our curated Golden Triangle journey.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 3,
      title: "Kerala Backwaters Cruise",
      description:
        "Sail through serene backwaters in traditional houseboats with premium amenities.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 4,
      title: "Rajasthan Royal Experience",
      description:
        "Live like royalty in heritage palaces converted into luxury hotels.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 5,
      title: "Goa Beachfront Villas",
      description:
        "Private beach access with world-class service in our premium villas.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 6,
      title: "Wildlife Safari Adventure",
      description:
        "Luxury tented camps with exclusive wildlife viewing experiences.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
  ];

  const internationalExperiences = [
    {
      id: 7,
      title: "Swiss Alps Luxury",
      description:
        "Experience the finest alpine luxury with private chalets and ski access.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 8,
      title: "Maldives Overwater Villas",
      description:
        "Luxury overwater bungalows with direct access to crystal clear waters.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 9,
      title: "Bali Wellness Retreat",
      description:
        "Rejuvenate your mind and body at our exclusive wellness sanctuaries.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 10,
      title: "Santorini Sunset Cruise",
      description:
        "Sailing through stunning caldera views with premium service.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 11,
      title: "Safari in Tanzania",
      description: "Witness the great migration from our luxury safari camps.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
    {
      id: 12,
      title: "Japanese Cultural Journey",
      description:
        "Immersive cultural experiences with stays at traditional ryokans.",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
    },
  ];

  const handleCardClick = (experience) => {
    navigate(`/experience/${experience.id}`, { state: { experience } });
  };

  return (
    <div
      className="bg-[#f9f9f9] pt-20 pb-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-4">
          Signature Experiences
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Discover handcrafted journeys that create lifelong memories
        </p>

        {/* Indian Packages Carousel */}
        <Carousel
          items={experiences}
          onCardClick={handleCardClick}
          title="Popular Indian Packages"
        />

        {/* International Packages Carousel */}
        <Carousel
          items={internationalExperiences}
          onCardClick={handleCardClick}
          title="Popular International Packages"
        />
      </div>
    </div>
  );
};

export default Experience;
