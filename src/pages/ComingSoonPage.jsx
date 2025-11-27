import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/travelLoader.json";

const ComingSoonPage = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Set launch date (3 months from now)
  const launchDate = new Date();
  launchDate.setMonth(launchDate.getMonth() + 3);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log(`Subscribed: ${email}`);
      setIsSubscribed(true);
      setEmail("");

      // Reset subscription status after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  const features = [
    {
      id: 1,
      icon: "✨",
      title: "Tailored Experiences",
      description:
        "Every journey customized to your specific tastes, needs, and peace-seeking preferences.",
    },
    {
      id: 2,
      icon: "😇",
      title: "Mindful Itineraries",
      description:
        "Carefully crafted schedules that prioritize stillness and depth over rushed sightseeing.",
    },
    {
      id: 3,
      icon: "🙏",
      title: "Seamless Planning",
      description:
        "We handle everything so you can truly pause, breathe, and immerse in your journey.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-gold-dark mb-6">
            Something Beautiful is Coming
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our Website is currently under construction, but our services are
            fully Operational.
          </p>

          {/* Countdown Timer */}
          <div className="bg-grey-lite rounded-xl shadow-lg p-8 max-w-sm mx-auto mb-16">
            <Lottie animationData={animationData} />
            <h2 className="text-2xl mb-2">Launching Soon...</h2>
            {/* <div className="flex justify-center space-x-4 md:space-x-8">
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-6 w-20 md:w-24">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">
                    {days}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Days</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-6 w-20 md:w-24">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">
                    {hours}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Hours</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-6 w-20 md:w-24">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">
                    {minutes}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Minutes</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-6 w-20 md:w-24">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">
                    {seconds}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Seconds</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Features Preview Section */}

      {/* Footer */}
      <div className="bg-grey text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl text-gold font-serif mb-2">
            Sukoon Ek Safar
          </h3>
          <p className="text-white mb-4">Journey to Peace • Coming Soon</p>
          <div className="flex justify-center space-x-6 text-white">
            <a href="#" className="hover:text-white transition duration-300">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.815 3.75 13.664 3.75 12.367s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.807-2.026 1.297-3.323 1.297z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
          <div className="mt-6 text-white text-sm">
            <p>
              © {new Date().getFullYear()} Sukoon Ek Safar. A venture of Cherish
              Journeys. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Anchor for smooth scrolling */}
      <div id="email-subscription"></div>
    </div>
  );
};

export default ComingSoonPage;
