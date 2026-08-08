import React from "react";
import bgImg from "../assets/images/paperBg.jpg"; // Adjust path as necessary

// ----- SVG Icon Components -----
const HeartIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.312-2.733C5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
    />
  </svg>
);

const CompassIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 6.75V15m6-6v8.25m.503-3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0l3.869-1.934c.381-.19.622-.58.622-1.006V9.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0z"
    />
  </svg>
);

const TreeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21v-6m0 0l-3-3m3 3l3-3m-6 6h6m-6 0H6m6 0h6M7.5 12.75l3-3m0 0l3 3m-3-3v6m-3 0h6"
    />
  </svg>
);

const LandmarkIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 21h18M3 10.5h18M5.25 10.5l-1.5 8.25m15 0l-1.5-8.25M4.5 7.5l7.5-3.75 7.5 3.75"
    />
  </svg>
);

const SpaIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21v-8.25M12 12.75c-3.75 0-6.75-3-6.75-6.75 0-3.75 3-6.75 6.75-6.75 3.75 0 6.75 3 6.75 6.75 0 3.75-3 6.75-6.75 6.75zM12 12.75c3.75 0 6.75-3 6.75-6.75 0-3.75-3-6.75-6.75-6.75-3.75 0-6.75 3-6.75 6.75 0 3.75 3 6.75 6.75 6.75z"
    />
  </svg>
);

const MountainIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l-6 12h12L12 3zM6 15h12l-3 6H9l-3-6z"
    />
  </svg>
);

const CameraIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
    />
  </svg>
);

const ChurchIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6m0 0v6m0-6h6m-6 0H6M3 21h18M9 3h6M9 3v3m0-3h-6m12 0v3m0-3h6"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const PeopleGroupIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
    />
  </svg>
);

// ----- Tooltip descriptions for each service -----
const serviceDescriptions = {
  "Romantic & Honeymoon Escapes":
    "Private villas, candlelit dinners, and curated experiences for two.",
  "Family & Leisure Journeys":
    "Kid-friendly activities, spacious accommodations, and fun for all ages.",
  "Wildlife & Safari Tours":
    "Expert-led game drives and immersive encounters with nature.",
  "Nature & Scenic Tours":
    "Breathtaking landscapes, serene trails, and peaceful retreats.",
  "Cultural & Heritage Tours":
    "Ancient traditions, architectural marvels, and living history.",
  "Wellness & Slow Journeys":
    "Yoga retreats, spa getaways, and mindful travel experiences.",
  "Adventure & Experiences":
    "Thrilling activities and unforgettable outdoor explorations.",
  "Lifestyle & Special Interest Tours":
    "Curated experiences for your unique passions and hobbies.",
  "Spiritual & Pilgrimage Tours":
    "Sacred sites, meditation, and soulful journeys of discovery.",
  "Senior & Relaxed Travel":
    "Comfortable pacing, easy accessibility, and thoughtful care.",
  "Group tours":
    "Shared adventures, group discounts, and memorable group experiences.",
};

// ----- Data with SVG icons -----
const servicesData = [
  { id: 1, title: "Romantic & Honeymoon Escapes", icon: <HeartIcon /> },
  { id: 2, title: "Family & Leisure Journeys", icon: <UsersIcon /> },
  { id: 3, title: "Wildlife & Safari Tours", icon: <CompassIcon /> },
  { id: 4, title: "Nature & Scenic Tours", icon: <TreeIcon /> },
  { id: 5, title: "Cultural & Heritage Tours", icon: <LandmarkIcon /> },
  { id: 6, title: "Wellness & Slow Journeys", icon: <SpaIcon /> },
  { id: 7, title: "Adventure & Experiences", icon: <MountainIcon /> },
  { id: 8, title: "Lifestyle & Special Interest Tours", icon: <CameraIcon /> },
  { id: 9, title: "Spiritual & Pilgrimage Tours", icon: <ChurchIcon /> },
  { id: 10, title: "Senior & Relaxed Travel", icon: <ClockIcon /> },
  { id: 11, title: "Group tours", icon: <PeopleGroupIcon /> },
];

// ----- Service Tooltip Component (with glass morphism) -----
const ServiceTooltip = ({ service }) => {
  const description =
    serviceDescriptions[service.title] ||
    "Discover this unique journey with Sukoon.";

  return (
    <div className="group relative">
      {/* Trigger element - glass morphism style */}
      <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gold/40 hover:bg-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md">
        <span className="text-gold group-hover:text-gold-dark transition-colors duration-300">
          {service.icon}
        </span>
        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium whitespace-nowrap">
          {service.title}
        </span>
      </div>

      {/* Tooltip popup - glass morphism style */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-64 pointer-events-none">
        <div className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gold/20 p-4">
          {/* Tooltip arrow */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/95 border-t border-l border-gold/20 transform rotate-45"></div>

          {/* Tooltip content */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gold">{service.icon}</span>
              <h4 className="text-sm font-semibold text-gray-800">
                {service.title}
              </h4>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              {description}
            </p>
            {/* <div className="mt-2 pt-2 border-t border-gray-100">
              <span className="text-[10px] uppercase tracking-wider text-gold/60 font-medium">
                Explore →
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// ----- Main Component (with paper background from AboutUs) -----
const OurServices = () => {
  return (
    <div
      className="bg-white pt-5 pb-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 pt-28 py-16">
        <section className="p-8 md:p-12 bg-[#f8f9fa] rounded-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            {/* <p className="text-sm uppercase tracking-[0.3em] text-gold font-medium mb-3">
              Discover Our Offerings
            </p> */}

            <h2 className="text-3xl md:text-4xl font-serif text-gold-dark mb-4">
              Our <span className="text-gold">Services</span>
            </h2>

            <div className="w-16 h-px bg-gold mx-auto mb-4"></div>

            <p className="text-gray-500 max-w-2xl mx-auto text-sm tracking-wide">
              Discover Our Offerings
            </p>
          </div>

          {/* Tooltip Grid */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
            {servicesData.map((service) => (
              <ServiceTooltip key={service.id} service={service} />
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4">
              <span className="w-12 h-px bg-gold/30"></span>
              <span className="text-xs text-gray-400 tracking-widest uppercase">
                Let's plan your journey
              </span>
              <span className="w-12 h-px bg-gold/30"></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurServices;
