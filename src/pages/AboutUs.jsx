import React from "react";
import aboutUs from "../assets/images/aboutUs.jpg"; // Adjust the path as necessary
import sukoonLogo from "../assets/images/sukoon.png";
import bgImg from "../assets/images/paperBg.jpg";
import WhatsAppButton from "../components/WhatsAppButton";
const AboutUs = () => {
  const name = "Sukoon Ek Safar";
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "Sukoon Journeys planned our dream honeymoon to Bali. Every detail was perfect - from the private villa to the customized excursions. We couldn't have asked for a more magical experience!",
      rating: 5,
    },
    {
      id: 2,
      name: "Raj Patel",
      location: "Mumbai, India",
      text: "The Golden Triangle tour exceeded all expectations. Our guide was incredibly knowledgeable and the hotels were luxurious. Will definitely use Sukoon Journeys for our next vacation!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Chen",
      location: "Singapore",
      text: "As a solo traveler, I was nervous about visiting India, but Sukoon Journeys made me feel safe and cared for throughout my entire journey. Their attention to detail is unmatched.",
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div
      className="bg-white pt-5 pb-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-28 py-16">
        {/* Enhanced Mission Section - Clean Version */}

        <section className="mb-50 group relative overflow-hidden rounded-2xl p-10 transition-all duration-700 ease-in-out hover:bg-white hover:shadow-xl">
          {/* Sliding background layer */}
          <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>

          {/* Content - keeps above background */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Image Container */}
              <div className="md:w-1/2 m-5">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={sukoonLogo}
                    alt="Sukoon Ek Safar"
                    className="w-full rounded-2xl p-10 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                {/* Label */}
                <p className="text-sm uppercase tracking-[0.3em] text-gold font-medium mb-2">
                  About Us
                </p>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-serif text-gold-dark mb-4">
                  Sukoon Ek Safar
                </h2>

                {/* Key info badges - clean and minimal */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="text-sm text-gold-dark font-medium">
                    ✦ 13+ Years
                  </span>
                  <span className="text-sm text-gray-400">|</span>
                  <span className="text-sm text-gold-dark font-medium">
                    ✦ Recognised by Ministry of Tourism
                  </span>
                  <span className="text-sm text-gray-400">|</span>
                  <span className="text-sm text-gold-dark font-medium">
                    ✦ A Unit of Cherish Journeys
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    At Sukoon Ek Safar, we believe travel is more than just
                    moving from one destination to another. It's about creating
                    space to breathe, to pause, and to reconnect with yourself.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    <span className="text-gold-dark font-medium">
                      "Pause. Breathe. Travel."
                    </span>{" "}
                    — turning travel into a soulful escape rather than a
                    checklist of places.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    From serene mountain retreats to tranquil beaches, from
                    quiet heritage trails to soulful escapes abroad, every trip
                    we craft focuses on peace, comfort, and mindful experiences.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    <span className="text-gold-dark font-medium">
                      "We take care of everything"
                    </span>{" "}
                    — planning, bookings, itineraries, and every detail in
                    between.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    What sets Sukoon apart is its essence — while most tours
                    chase speed and sightseeing, we bring you stillness and
                    depth. Our focus is not on covering the most, but on
                    <span className="text-gold-dark font-medium">
                      {" "}
                      feeling the most
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20 p-10 bg-[#f8f9fa] rounded-2xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gold font-medium mb-3">
              The Sukoon Difference
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-gold-dark">
              Why Choose Sukoon Ek Safar
            </h2>

            <div className="w-16 h-px bg-gold mx-auto mt-5"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 md:gap-5 w-full justify-items-center">
            {/* 1. Thoughtful Planning */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40 w-full max-w-[400px] sm:max-w-none sm:min-w-0">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>

              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <span className="text-xs sm:text-sm font-medium text-gold tracking-widest">
                  01
                </span>

                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white group-hover:rotate-6 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 break-words">
                Thoughtful Planning
              </h3>

              <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500 break-words">
                Every journey is carefully designed around your comfort, pace,
                and preferences.
              </p>
            </div>

            {/* 2. Curated Experiences */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40 w-full max-w-[400px] sm:max-w-none sm:min-w-0">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>

              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <span className="text-xs sm:text-sm font-medium text-gold tracking-widest">
                  02
                </span>

                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white group-hover:rotate-6 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 3l1.9 5.9h6.1l-4.95 3.6 1.9 5.9L12 15l-4.95 3.4 1.9-5.9L4 8.9h6.1L12 3z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 break-words">
                Curated Experiences
              </h3>

              <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500 break-words">
                Handpicked stays and meaningful experiences tailored just for
                you.
              </p>
            </div>

            {/* 3. Travel With Care */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40 w-full max-w-[400px] sm:max-w-none sm:min-w-0">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>

              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <span className="text-xs sm:text-sm font-medium text-gold tracking-widest">
                  03
                </span>

                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white group-hover:rotate-6 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 break-words">
                Travel With Care
              </h3>

              <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500 break-words">
                We plan every detail with responsibility, warmth, and genuine
                attention.
              </p>
            </div>

            {/* 4. Seamless Support */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40 w-full max-w-[400px] sm:max-w-none sm:min-w-0">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>

              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <span className="text-xs sm:text-sm font-medium text-gold tracking-widest">
                  04
                </span>

                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white group-hover:rotate-6 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M18 10c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 16v5m-3 0h6M9 10h.01M15 10h.01"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 break-words">
                Seamless Support
              </h3>

              <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500 break-words">
                From planning to return, we're with you at every step of the
                journey.
              </p>
            </div>

            {/* 5. Personal Attention */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40 w-full max-w-[400px] sm:max-w-none sm:min-w-0">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>

              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <span className="text-xs sm:text-sm font-medium text-gold tracking-widest">
                  05
                </span>

                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white group-hover:rotate-6 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m6-10a4 4 0 100-8 4 4 0 000 8zm10 10v-2a4 4 0 00-3-3.87m-1-8a4 4 0 110 7.75"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 break-words">
                Personal Attention
              </h3>

              <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500 break-words">
                Dedicated guidance and customized solutions for every traveler.
              </p>
            </div>

            {/* 6. Global Expertise */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40 w-full max-w-[400px] sm:max-w-none sm:min-w-0">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>

              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <span className="text-xs sm:text-sm font-medium text-gold tracking-widest">
                  06
                </span>

                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white group-hover:rotate-6 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
                    <path
                      strokeLinecap="round"
                      strokeWidth="1.5"
                      d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 break-words">
                Global Expertise
              </h3>

              <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500 break-words">
                Deep destination knowledge backed by years of travel experience.
              </p>
            </div>

            {/* 7. Stress-Free Travel */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40 w-full max-w-[400px] sm:max-w-none sm:min-w-0">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>

              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <span className="text-xs sm:text-sm font-medium text-gold tracking-widest">
                  07
                </span>

                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white group-hover:rotate-6 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 break-words">
                Stress-Free Travel
              </h3>

              <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500 break-words">
                Smooth arrangements so you can simply relax and enjoy.
              </p>
            </div>

            {/* 8. Authentic Connections */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40 w-full max-w-[400px] sm:max-w-none sm:min-w-0">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"></div>

              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <span className="text-xs sm:text-sm font-medium text-gold tracking-widest">
                  08
                </span>

                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white group-hover:rotate-6 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m7-5a4 4 0 11-8 0 4 4 0 018 0zm4-2a3 3 0 10-6 0"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 break-words">
                Authentic Connections
              </h3>

              <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500 break-words">
                Meaningful local experiences that help you connect with the
                people and places you visit.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-center text-gold-dark mb-12">
            Our Commitment
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Client Satisfaction First
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our team of professionals does everything possible to ensure
                your holiday in India or abroad is perfectly arranged. Years of
                careful research go into creating the right balance of quality
                and adventure that best suits our travellers.
              </p>
              <p className="text-lg text-gray-600">
                Wherever you need us, we're always there for you - via email,
                phone, or social media. We're honored to have you as part of our
                travel community.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src={aboutUs} // Replace with your team image
                alt="Our Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>
        {/* <section className="mb-20">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">
            What Our Travelers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {renderStars(testimonial.rating)}
                <blockquote className="text-gray-600 italic mb-6">
                  "{testimonial.text}"
                </blockquote>
                <div className="text-center">
                  <p className="font-serif text-gray-800 font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section> */}
        {/* CTA Section */}
        <section className="bg-grey text-gold rounded-xl p-12 text-center">
          <h2 className="text-3xl font-serif mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us craft the perfect travel experience tailored exactly to your
            desires.
          </p>
          {/* <button className="bg-white text-gold-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us Today
          </button> */}
          <div className="flex justify-center px-8 py-3 transition">
            <WhatsAppButton
              message={`Hi! I'm interested in learning more about ${name}.`}
              buttonText={"Contact Us"}
              className="!bg-white hover:!bg-gray-100 !text-gold-dark"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
