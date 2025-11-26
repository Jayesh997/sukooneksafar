import React, { useState } from "react";
import { useNavigate } from "react-router";
import img from "../assets/images/aboutUs.jpg";

const Destinations = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  // Destination data
  const destinations = [
    {
      id: 1,
      title: "Kashmir",
      description:
        "The paradise on earth with stunning valleys and serene lakes",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mountains",
      featured: true,
    },
    {
      id: 2,
      title: "Goa",
      description: "Sun-kissed beaches and vibrant nightlife",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Beaches",
      featured: false,
    },
    {
      id: 3,
      title: "Rajasthan",
      description: "Royal heritage and desert landscapes",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: true,
    },
    {
      id: 4,
      title: "Kerala",
      description: "Lush backwaters and Ayurvedic retreats",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Backwaters",
      featured: false,
    },
    {
      id: 5,
      title: "Himachal Pradesh",
      description: "Majestic Himalayas and adventure sports",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mountains",
      featured: true,
    },
    {
      id: 6,
      title: "Andaman Islands",
      description: "Pristine beaches and coral reefs",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Beaches",
      featured: false,
    },
    {
      id: 7,
      title: "Varanasi",
      description: "Spiritual capital on the banks of Ganges",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Spiritual",
      featured: true,
    },
    {
      id: 8,
      title: "Mysore",
      description: "Royal palaces and sandalwood aromas",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: true,
    },
  ];

  // Filter categories
  const categories = [
    "All",
    "Mountains",
    "Beaches",
    "Heritage",
    "Backwaters",
    "Spiritual",
  ];

  // Filter destinations
  const filteredDestinations =
    activeFilter === "All"
      ? destinations
      : destinations.filter((dest) => dest.category === activeFilter);

  const handleCardClick = (destination) => {
    navigate(`/destination/${destination.id}`, { state: { destination } });
  };

  return (
    <div className="bg-[#f9f9f9] pt-40 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Discover India
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore breathtaking destinations curated by our travel experts
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gold text-white border-gold"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gold hover:text-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Destinations */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif text-gray-800 mb-8 pl-4 border-l-4 border-gold">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations
              .filter((dest) => dest.featured)
              .map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  onClick={handleCardClick}
                  featured={true}
                />
              ))}
          </div>
        </div>

        {/* All Destinations */}
        <div>
          <h2 className="text-2xl font-serif text-gray-800 mb-8 pl-4 border-l-4 border-gold">
            {activeFilter === "All" ? "All Destinations" : activeFilter}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={handleCardClick}
                featured={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Destination Card Component
const DestinationCard = ({ destination, onClick, featured }) => {
  return (
    <div
      className={`group cursor-pointer ${
        featured ? "lg:first:col-span-2 lg:first:row-span-1" : ""
      }`}
      onClick={() => onClick(destination)}
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg h-full">
        {/* Image */}
        <div className={`${featured ? "h-96" : "h-64"} overflow-hidden`}>
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h3
            className={`text-white font-serif ${
              featured ? "text-3xl" : "text-xl"
            } mb-2`}
          >
            {destination.title}
          </h3>
          <p className={`text-white/90 ${featured ? "text-lg" : "text-sm"}`}>
            {destination.description}
          </p>
          <div className="mt-4">
            <span className="inline-block px-3 py-1 bg-white text-black text-xs rounded-full mx-2">
              India
            </span>
            <span className="inline-block px-3 py-1 bg-gold text-white text-xs rounded-full">
              {destination.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
