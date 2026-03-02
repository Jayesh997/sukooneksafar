import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import bgImg from "../assets/images/paperBg.jpg";

const INITIAL_COUNT = 16;
const India = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset when filter changes
    setVisibleCount(INITIAL_COUNT);
  }, [activeFilter]);

  // Destination data
  const destinations = [
    {
      id: "kerala",
      title: "Kerala",
      subtitle: "God’s Own Country",
      description:
        "Serene backwaters, wellness retreats, lush hills, and tropical beauty",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Backwaters",
      featured: false,
    },
    {
      id: "rajasthan",
      title: "Rajasthan",
      subtitle: "Land of Royals & Timeless Grandeur",
      description:
        "Majestic forts, royal palaces, desert landscapes, and heritage luxury",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: true,
    },
    {
      id: "goa",
      title: "Goa",
      subtitle: "Coastal Charm & Relaxed Luxury",
      description:
        "Sun-kissed beaches, boutique resorts, vibrant culture, and leisure travel",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Beaches",
      featured: false,
    },
    {
      id: "himachal",
      title: "Himachal Pradesh",
      subtitle: "Mountains, Mist & Quiet Retreats",
      description:
        "Snow-clad mountains, peaceful hill towns, forest retreats, and scenic valleys",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mountains",
      featured: true,
    },
    {
      id: "kashmir",
      title: "Kashmir",
      subtitle: "Paradise on Earth",
      description:
        "Snow-covered peaks, tranquil lakes, alpine meadows, and scenic beauty",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mountains",
      featured: true,
    },
    {
      id: "uttarakhand",
      title: "Uttarakhand",
      subtitle: "Spiritual Calm & Himalayan Serenity",
      description:
        "Sacred rivers, yoga retreats, peaceful hill towns, and Himalayan landscapes",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Spiritual",
      featured: false,
    },
    {
      id: "tamilNadu",
      title: "Tamil Nadu",
      subtitle: "Temples, Traditions & Timeless Culture",
      description:
        "Ancient temples, classical arts, spiritual heritage, and scenic hill stations",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: false,
    },
    {
      id: "karnataka",
      title: "Karnataka",
      subtitle: "Heritage, Hills & Modern Charm",
      description:
        "Historic ruins, royal palaces, coffee plantations, and vibrant cities",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: false,
    },
    {
      id: "maharashtra",
      title: "Maharashtra",
      subtitle: "City Glamour & Natural Diversity",
      description:
        "Urban energy, heritage caves, hill stations, and scenic coastlines",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Diverse",
      featured: true,
    },
    {
      id: "assam",
      title: "Assam",
      subtitle: "Tea Gardens, Rivers & Tranquil Landscapes",
      description:
        "Vast tea estates, river cruises, wildlife, and rich cultural traditions",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Nature",
      featured: false,
    },
    {
      id: "punjab",
      title: "Punjab",
      subtitle: "Royal Hospitality & Vibrant Culture",
      description:
        "Spiritual landmarks, lively traditions, rich cuisine, and warm hospitality",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: false,
    },
    {
      id: "ladakh",
      title: "Ladakh",
      subtitle: "High Himalayas & Adventure Luxury",
      description:
        "Dramatic landscapes, alpine lakes, monasteries, and adventure experiences",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Adventure",
      featured: true,
    },
    {
      id: "jharkhand",
      title: "Jharkhand",
      subtitle: "Forests, Waterfalls & Tribal Heritage",
      description:
        "Dense forests, scenic waterfalls, wildlife, and tribal culture",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Nature",
      featured: false,
    },
    {
      id: "manipur",
      title: "Manipur",
      subtitle: "Lakes, Culture & Tranquil Landscapes",
      description:
        "Serene lakes, lush valleys, traditional dance, and peaceful travel",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: false,
    },
    {
      id: "mizoram",
      title: "Mizoram",
      subtitle: "Hills, Rivers & Serene Escapes",
      description:
        "Rolling hills, tribal traditions, clear rivers, and quiet retreats",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Nature",
      featured: false,
    },
    {
      id: "nagaland",
      title: "Nagaland",
      subtitle: "Mountains, Culture & Festivals",
      description:
        "Vibrant tribal culture, scenic hills, festivals, and offbeat travel",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: false,
    },
    {
      id: "tripura",
      title: "Tripura",
      subtitle: "Palaces, Culture & Scenic Beauty",
      description:
        "Royal palaces, tribal traditions, scenic hills, and peaceful escapes",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: false,
    },
    {
      id: "delhi",
      title: "Delhi",
      subtitle: "Heritage, Culture & Urban Luxury",
      description:
        "Historic monuments, vibrant markets, museums, and luxury city stays",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Urban",
      featured: true,
    },
    {
      id: "puducherry",
      title: "Puducherry",
      subtitle: "French Charm & Coastal Calm",
      description:
        "Colonial heritage, tranquil beaches, cafés, and wellness retreats",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Coastal",
      featured: false,
    },
    {
      id: "dadraNagarHaveli",
      title: "Dadra & Nagar Haveli",
      subtitle: "Tranquil Nature & Tribal Heritage",
      description:
        "Forests, rivers, tribal villages, and eco-friendly retreats",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Nature",
      featured: false,
    },
    {
      id: "damandiu",
      title: "Daman & Diu",
      subtitle: "Coastal Charm & Heritage Retreats",
      description:
        "Pristine beaches, Portuguese forts, and relaxed coastal travel",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Beaches",
      featured: false,
    },
    {
      id: "odisha",
      title: "Odisha",
      subtitle: "Temples, Coastlines & Artistic Heritage",
      description:
        "Sacred temples, scenic beaches, lakes, and rich artistic traditions",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: false,
    },
    {
      id: "chhattisgarh",
      title: "Chhattisgarh",
      subtitle: "Forests, Waterfalls & Tribal Heritage",
      description:
        "Dense forests, waterfalls, tribal culture, and eco-travel experiences",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Nature",
      featured: false,
    },
    {
      id: "bihar",
      title: "Bihar",
      subtitle: "Spiritual Roots & Ancient Learning",
      description:
        "Buddhist heritage, ancient universities, and sacred pilgrimage sites",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Spiritual",
      featured: false,
    },
    {
      id: "westBengal",
      title: "West Bengal",
      subtitle: "Culture, Hills & Coastal Charm",
      description:
        "Colonial heritage, tea gardens, mangroves, and cultural depth",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Diverse",
      featured: true,
    },
    {
      id: "sikkim",
      title: "Sikkim",
      subtitle: "Himalayan Serenity & Spiritual Bliss",
      description:
        "Peaceful monasteries, mountain views, and calm Himalayan travel",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mountains",
      featured: false,
    },
    {
      id: "meghalaya",
      title: "Meghalaya",
      subtitle: "Waterfalls, Hills & Living Roots",
      description:
        "Misty hills, waterfalls, living root bridges, and scenic beauty",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Nature",
      featured: false,
    },
    {
      id: "arunachalPradesh",
      title: "Arunachal Pradesh",
      subtitle: "Untouched Himalayas & Tribal Culture",
      description:
        "Remote valleys, monasteries, tribal traditions, and pristine nature",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Offbeat",
      featured: false,
    },
    {
      id: "andamanNicobar",
      title: "Andaman & Nicobar Islands",
      subtitle: "Tropical Paradise & Pristine Beaches",
      description:
        "White sand beaches, coral reefs, island luxury, and marine life",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Islands",
      featured: true,
    },
    {
      id: "lakshadweep",
      title: "Lakshadweep",
      subtitle: "Turquoise Waters & Island Luxury",
      description:
        "Crystal-clear lagoons, coral islands, and serene tropical escapes",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Islands",
      featured: false,
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
    navigate(`/india/${destination.id}`, { state: { destination } });
  };

  return (
    <div
      className="bg-[#f9f9f9] pt-40 pb-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
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
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        </div> */}

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
            {filteredDestinations.slice(0, visibleCount).map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={handleCardClick}
                featured={false}
              />
            ))}
          </div>
        </div>
        {filteredDestinations.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            {visibleCount < filteredDestinations.length ? (
              <button
                onClick={() => setVisibleCount((prev) => prev + INITIAL_COUNT)}
                className="px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-white transition-all"
              >
                View More
              </button>
            ) : (
              <button
                onClick={() => setVisibleCount(INITIAL_COUNT)}
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gold hover:text-gold transition-all"
              >
                View Less
              </button>
            )}
          </div>
        )}
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

export default India;
