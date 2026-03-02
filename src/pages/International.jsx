import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import bgImg from "../assets/images/paperBg.jpg";

const INITIAL_COUNT = 16;
const STORAGE_KEY = "selectedRegion";

// ---------------- REGIONS WITH IMAGE ----------------
const REGIONS = [
  {
    label: "Africa",
    value: "Africa",
    imageUrl: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
  },
  {
    label: "America",
    value: "America",
    imageUrl: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
  },
  {
    label: "Asia",
    value: "Asia",
    imageUrl: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
  },
  {
    label: "Australia & New Zealand",
    value: "Australia & New Zealand",
    imageUrl: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
  },
  {
    label: "China",
    value: "China",
    imageUrl: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
  },
  {
    label: "Antarctica",
    value: "Antarctica",
    imageUrl: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
  },
  {
    label: "Middle East",
    value: "Middle East",
    imageUrl: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
  },
  {
    label: "Europe",
    value: "Europe",
    imageUrl: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
  },
];

const International = () => {
  const navigate = useNavigate();

  // Initialize state from localStorage or default to first region
  const [activeRegion, setActiveRegion] = useState(() => {
    const savedRegion = localStorage.getItem(STORAGE_KEY);
    // Check if saved region exists and is valid (exists in REGIONS array)
    if (savedRegion && REGIONS.some((region) => region.value === savedRegion)) {
      return savedRegion;
    }
    return REGIONS[0].value; // Default to first region (Africa)
  });

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Save to localStorage whenever activeRegion changes
  useEffect(() => {
    if (activeRegion) {
      localStorage.setItem(STORAGE_KEY, activeRegion);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [activeRegion]);

  // Reset visible count when region changes
  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [activeRegion]);

  // ---------------- DESTINATIONS ----------------
  const destinations = [
    // Africa Region Destinations
    {
      id: "kenya",
      region: "Africa",
      title: "Kenya",
      description:
        "Safari luxury, wildlife, and timeless Africa with world-renowned wildlife experiences and luxury lodges",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Safari",
      featured: true,
    },
    {
      id: "tanzania",
      region: "Africa",
      title: "Tanzania",
      description:
        "Untouched wilderness and exclusive safaris with vast national parks and ultra-luxury lodges",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Safari",
      featured: true,
    },
    {
      id: "south-africa",
      region: "Africa",
      title: "South Africa",
      description:
        "Wildlife, wine, and luxury experiences with diverse landscapes, world-class vineyards, and thrilling safaris",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mixed",
      featured: true,
    },
    {
      id: "morocco",
      region: "Africa",
      title: "Morocco",
      description:
        "Exotic culture, heritage, and boutique luxury with historic cities, vibrant souks, and serene desert camps",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: false,
    },
    {
      id: "egypt",
      region: "Africa",
      title: "Egypt",
      description:
        "Ancient wonders and timeless luxury with iconic pyramids, grand temples, and serene Nile cruises",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: true,
    },

    // Europe Region Destinations
    {
      id: "france",
      region: "Europe",
      title: "France",
      description:
        "Romance, art, and timeless luxury with iconic cities, world-renowned culture, and elegant landscapes",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: true,
    },
    {
      id: "italy",
      region: "Europe",
      title: "Italy",
      description:
        "Art, heritage, and la dolce vita with ancient ruins, Renaissance masterpieces, and indulgent cuisine",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: true,
    },
    {
      id: "switzerland",
      region: "Europe",
      title: "Switzerland",
      description:
        "Alpine beauty, scenic luxury, and pristine landscapes with snow-capped mountains and world-class resorts",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Scenic",
      featured: true,
    },
    {
      id: "spain",
      region: "Europe",
      title: "Spain",
      description:
        "Vibrant culture, historic charm, and coastal leisure with lively cities and Mediterranean beaches",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mixed",
      featured: true,
    },
    {
      id: "greece",
      region: "Europe",
      title: "Greece",
      description:
        "Ancient heritage, idyllic islands, and Mediterranean luxury with turquoise waters and historic ruins",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Island",
      featured: true,
    },
    {
      id: "austria",
      region: "Europe",
      title: "Austria",
      description:
        "Imperial heritage, scenic Alps, and refined luxury with historic cities and classical music traditions",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: false,
    },
    {
      id: "germany",
      region: "Europe",
      title: "Germany",
      description:
        "History, modern luxury, and scenic landscapes with iconic castles, vineyards, and vibrant cities",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mixed",
      featured: false,
    },
    {
      id: "netherlands",
      region: "Europe",
      title: "Netherlands",
      description:
        "Canals, tulips, and urban elegance with picturesque cities and scenic countryside",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: false,
    },
    {
      id: "belgium",
      region: "Europe",
      title: "Belgium",
      description:
        "Historic charm, chocolate, and European elegance with medieval towns and culinary delights",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: false,
    },
    {
      id: "czech-republic",
      region: "Europe",
      title: "Czech Republic",
      description:
        "Historic cities, castles, and timeless charm with fairy-tale architecture and rich heritage",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: false,
    },
    {
      id: "hungary",
      region: "Europe",
      title: "Hungary",
      description:
        "Historic elegance, thermal baths, and scenic beauty with grand architecture and relaxing spas",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Wellness",
      featured: false,
    },
    {
      id: "portugal",
      region: "Europe",
      title: "Portugal",
      description:
        "Coastal charm, history, and refined leisure with scenic beaches and vibrant cities",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Coastal",
      featured: true,
    },
    {
      id: "iceland",
      region: "Europe",
      title: "Iceland",
      description:
        "Nature, adventure, and luxury escapes with dramatic landscapes and unique natural phenomena",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Adventure",
      featured: true,
    },
    {
      id: "norway",
      region: "Europe",
      title: "Norway",
      description:
        "Fjords, scenic luxury, and natural wonders with majestic landscapes and coastal beauty",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Scenic",
      featured: true,
    },
    {
      id: "sweden",
      region: "Europe",
      title: "Sweden",
      description:
        "Scandinavian luxury, nature, and urban charm with modern design and pristine wilderness",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mixed",
      featured: false,
    },
    {
      id: "finland",
      region: "Europe",
      title: "Finland",
      description:
        "Nature, wellness, and Scandinavian elegance with Arctic landscapes and serene lakes",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Wellness",
      featured: false,
    },
    {
      id: "ireland",
      region: "Europe",
      title: "Ireland",
      description:
        "Emerald landscapes, history, and refined leisure with rolling hills and charming towns",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Scenic",
      featured: false,
    },
    {
      id: "united-kingdom",
      region: "Europe",
      title: "United Kingdom",
      description:
        "Heritage, luxury, and iconic experiences with historic cities and royal landmarks",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: true,
    },
    {
      id: "monaco",
      region: "Europe",
      title: "Monaco",
      description:
        "Glamour, luxury, and Mediterranean elegance with world-famous casinos and yachts",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Luxury",
      featured: true,
    },
    {
      id: "scotland",
      region: "Europe",
      title: "Scotland",
      description:
        "Castles, Highlands, and romantic luxury with majestic landscapes and historic estates",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Scenic",
      featured: true,
    },

    // Middle East Region Destinations
    {
      id: "uae",
      region: "Middle East",
      title: "United Arab Emirates",
      description:
        "Ultra-luxury and iconic experiences with world-famous architecture, premium hotels, and desert adventures in Dubai and Abu Dhabi",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Luxury",
      featured: true,
    },
    {
      id: "oman",
      region: "Middle East",
      title: "Oman",
      description:
        "Desert luxury, coastal beauty, and heritage with scenic deserts, pristine beaches, and authentic culture",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mixed",
      featured: false,
    },
    {
      id: "qatar",
      region: "Middle East",
      title: "Qatar",
      description:
        "Modern luxury, culture, and iconic experiences with ultra-modern skyline, cultural landmarks, and premium hospitality in Doha",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Luxury",
      featured: false,
    },
    {
      id: "saudi-arabia",
      region: "Middle East",
      title: "Saudi Arabia",
      description:
        "Heritage, luxury, and cultural exploration with historic landmarks, Red Sea coastline, and traditional Arabian hospitality",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: false,
    },
    {
      id: "jordan",
      region: "Middle East",
      title: "Jordan",
      description:
        "Heritage, adventure, and luxury exploration with ancient Petra, dramatic Wadi Rum deserts, and Dead Sea wellness resorts",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: true,
    },

    //asia

    {
      id: "thailand",
      region: "Asia",
      title: "Thailand",
      description:
        "Tropical beaches, culture, and easy luxury with beautiful islands, rich heritage, vibrant cities, and world-class hospitality",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Beaches",
      featured: true,
    },
    {
      id: "bali",
      region: "Asia",
      title: "Bali",
      description:
        "Island serenity, culture, and wellness luxury with lush rice terraces, sacred temples, pristine beaches, and holistic retreats",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Wellness",
      featured: true,
    },
    {
      id: "maldives",
      region: "Asia",
      title: "Maldives",
      description:
        "Ultimate island luxury and romance with crystal-clear waters, overwater villas, private islands, and exceptional marine adventures",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Beaches",
      featured: true,
    },
    {
      id: "sri-lanka",
      region: "Asia",
      title: "Sri Lanka",
      description:
        "Heritage, nature, and timeless charm with ancient temples, tea plantations, wildlife safaris, and pristine beaches",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: false,
    },
    {
      id: "vietnam",
      region: "Asia",
      title: "Vietnam",
      description:
        "Culture, landscapes, and modern elegance with dramatic bays, historic cities, vibrant street life, and world-famous cuisine",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: false,
    },
    {
      id: "singapore",
      region: "Asia",
      title: "Singapore",
      description:
        "Urban luxury and world-class experiences with modern skyline, iconic attractions, luxury shopping, and global dining",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Luxury",
      featured: true,
    },
    {
      id: "malaysia",
      region: "Asia",
      title: "Malaysia",
      description:
        "Urban energy, nature, and cultural harmony with modern cities, tropical rainforests, scenic highlands, and rich cultural diversity",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mixed",
      featured: false,
    },
    {
      id: "japan",
      region: "Asia",
      title: "Japan",
      description:
        "Tradition, technology, and refined luxury with ancient temples, ultra-modern cities, scenic landscapes, and world-class hospitality",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: true,
    },
    {
      id: "south-korea",
      region: "Asia",
      title: "South Korea",
      description:
        "Modern cities, culture, and scenic beauty with vibrant urban life, rich heritage, K-culture, and stunning natural landscapes",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mixed",
      featured: false,
    },
    {
      id: "bhutan",
      region: "Asia",
      title: "Bhutan",
      description:
        "Happiness, heritage, and Himalayan serenity with peaceful landscapes, spiritual traditions, and exclusive luxury experiences",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: false,
    },
    {
      id: "nepal",
      region: "Asia",
      title: "Nepal",
      description:
        "Spiritual serenity, Himalayan beauty, and timeless culture with majestic mountains, ancient temples, and soulful experiences",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Cultural",
      featured: false,
    },
    {
      id: "turkey",
      region: "Asia",
      title: "Turkey",
      description:
        "Timeless history, cultural richness, and scenic elegance with grand mosques, ancient ruins, Cappadocia, and vibrant bazaars",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: true,
    },

    // China Region
    {
      id: "china",
      region: "China",
      title: "China",
      description:
        "Ancient civilization, modern luxury, and cultural grandeur with iconic landmarks, imperial heritage, and futuristic skylines",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: true,
    },

    // Antarctica Region
    {
      id: "antarctica",
      region: "Antarctica",
      title: "Antarctica",
      description:
        "Ultimate expedition, silence, and ultra-luxury with pristine ice landscapes, glaciers, wildlife, and exclusive polar experiences",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Expedition",
      featured: true,
    },
    //australia and new zealand
    {
      id: "australia",
      region: "Australia & New Zealand",
      title: "Australia",
      description:
        "Iconic cities, nature and refined luxury with world-class cities, scenic coastlines, and the Great Barrier Reef",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mixed",
      featured: true,
    },
    {
      id: "new-zealand",
      region: "Australia & New Zealand",
      title: "New Zealand",
      description:
        "Scenic landscapes and experiential luxury with dramatic fjords, pristine lakes, and luxury lodges in remote landscapes",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Nature",
      featured: true,
    },

    // America Region Destinations
    {
      id: "usa",
      region: "America",
      title: "United States of America",
      description:
        "Iconic cities, nature and premium experiences with world-famous destinations from New York to California's scenic coastlines",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mixed",
      featured: true,
    },
    {
      id: "canada",
      region: "America",
      title: "Canada",
      description:
        "Scenic beauty, urban comfort and nature luxury with majestic mountains, tranquil lakes and cosmopolitan cities",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Nature",
      featured: true,
    },
    {
      id: "mexico",
      region: "America",
      title: "Mexico",
      description:
        "Culture, beaches and boutique luxury with ancient Mayan ruins, vibrant traditions and luxury beach resorts",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Beaches",
      featured: false,
    },
    {
      id: "brazil",
      region: "America",
      title: "Brazil",
      description:
        "Vibrant culture, nature and iconic luxury with lively cities, rainforests, waterfalls and golden beaches",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Mixed",
      featured: true,
    },
    {
      id: "peru",
      region: "America",
      title: "Peru",
      description:
        "Ancient heritage and experiential luxury with iconic Machu Picchu, historic Cusco and scenic Sacred Valley",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Heritage",
      featured: true,
    },
    {
      id: "caribbean",
      region: "America",
      title: "Caribbean",
      description:
        "Tropical luxury and island indulgence with pristine beaches, turquoise waters and premium island resorts",
      image: new URL("../assets/images/aboutUs.jpg", import.meta.url).href,
      category: "Beaches",
      featured: false,
    },
  ];

  // ---------------- FILTERING ----------------
  const filteredDestinations = destinations.filter(
    (dest) => activeRegion && dest.region === activeRegion,
  );

  const featuredDestinations = filteredDestinations.filter(
    (dest) => dest.featured,
  );

  const handleCardClick = (destination) => {
    navigate(`/International/${destination.id}`, {
      state: { destination },
    });
  };

  const handleClearRegion = () => {
    setActiveRegion(null);
    // localStorage will be cleared via the useEffect
  };

  return (
    <div
      className="bg-[#f9f9f9] pt-40 pb-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Discover {activeRegion || "the World"}
          </h1>
          <p className="text-xl text-gray-600">
            Choose a region to explore curated destinations
          </p>
        </div>

        {/* ---------------- REGIONS WITH TOOLTIP ---------------- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {REGIONS.map((region) => (
            <div key={region.value} className="relative group">
              <button
                onClick={() => setActiveRegion(region.value)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  activeRegion === region.value
                    ? "bg-gold text-white border-gold"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gold hover:text-gold"
                }`}
              >
                {region.label}
              </button>

              {/* Tooltip Bubble */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 hidden group-hover:block z-50">
                <div className="bg-white rounded-xl shadow-xl p-2 w-48">
                  <img
                    src={region.imageUrl}
                    alt={region.label}
                    className="w-full h-28 object-cover rounded-lg"
                  />
                  <p className="text-center text-sm mt-2 text-gray-700">
                    {region.label}
                  </p>
                </div>

                {/* Bubble Arrow */}
                <div className="w-3 h-3 bg-white rotate-45 absolute -top-1 left-1/2 -translate-x-1/2 shadow-sm"></div>
              </div>
            </div>
          ))}

          {/* {activeRegion && (
            <button
              onClick={handleClearRegion}
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500"
            >
              Clear Region
            </button>
          )} */}
        </div>

        {/* ---------------- FEATURED ---------------- */}
        {/* {activeRegion && featuredDestinations.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-serif text-gray-800 mb-8 pl-4 border-l-4 border-gold">
              Featured in {activeRegion}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  onClick={handleCardClick}
                  featured
                />
              ))}
            </div>
          </div>
        )} */}

        {/* ---------------- ALL DESTINATIONS ---------------- */}
        {activeRegion && (
          <>
            <h2 className="text-2xl font-serif text-gray-800 mb-8 pl-4 border-l-4 border-gold">
              {activeRegion} Destinations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDestinations
                .slice(0, visibleCount)
                .map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    onClick={handleCardClick}
                  />
                ))}
            </div>

            {filteredDestinations.length > INITIAL_COUNT && (
              <div className="flex justify-center mt-10">
                {visibleCount < filteredDestinations.length ? (
                  <button
                    onClick={() =>
                      setVisibleCount((prev) => prev + INITIAL_COUNT)
                    }
                    className="px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-white"
                  >
                    View More
                  </button>
                ) : (
                  <button
                    onClick={() => setVisibleCount(INITIAL_COUNT)}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gold hover:text-gold"
                  >
                    View Less
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// ---------------- CARD ----------------
const DestinationCard = ({ destination, onClick, featured }) => {
  return (
    <div className="group cursor-pointer" onClick={() => onClick(destination)}>
      <div className="relative overflow-hidden rounded-xl shadow-lg h-full">
        <div className={`${featured ? "h-96" : "h-64"} overflow-hidden`}>
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h3 className="text-white font-serif text-xl mb-2">
            {destination.title}
          </h3>
          <p className="text-white/90 text-sm">{destination.description}</p>
        </div>
      </div>
    </div>
  );
};

export default International;
