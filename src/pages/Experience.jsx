import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const Experience = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0); // Track scroll position
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

  // Duplicate items for infinite carousel effect
  const carouselItems = [...experiences, ...experiences];

  useEffect(() => {
    const carousel = carouselRef.current;
    let lastTimestamp = 0;
    const speed = 0.5; // Slower speed for better control

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused && carousel) {
        // Update position based on time for smooth animation
        scrollPositionRef.current += (speed * deltaTime) / 16;

        // Reset to start when reaching the end for seamless loop
        if (scrollPositionRef.current >= carousel.scrollWidth / 2) {
          scrollPositionRef.current = 0;
        }

        carousel.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleCardClick = (experience) => {
    navigate(`/experience/${experience.id}`, { state: { experience } });
  };

  return (
    <div className="bg-white pt-40 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-4">
          Our Experiences
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Discover handcrafted journeys that create lifelong memories
        </p>

        <h2 className="text-2xl font-serif text-gray-800 mb-8 pl-4 border-l-4 border-gold">
          Featured Experiences
        </h2>
        {/* Single Carousel */}
        <div
          className="mb-20 py-3 px-3 overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={carouselRef}
            className="flex justify-center"
            style={{
              willChange: "transform",
              // Initialize position
              transform: `translateX(-${scrollPositionRef.current}px)`,
            }}
          >
            {carouselItems.map((item, index) => (
              <ExperienceCard
                key={`carousel-${index}`}
                item={item}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-gray-800 mb-8 pl-4 border-l-4 border-gold">
            All Experiences
          </h2>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={handleCardClick}
                featured={false}
              />
            ))}
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6">
            {experiences.map((item, index) => (
              <ExperienceCard
                key={`static-${index}`}
                item={item}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
