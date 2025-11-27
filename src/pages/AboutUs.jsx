import React from "react";
import aboutUs from "../assets/images/aboutUs.jpg"; // Adjust the path as necessary
import sukoonLogo from "../assets/images/sukoonlogo.png";
const AboutUs = () => {
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
    <div className="bg-white">
      {/* Hero Section */}
      {/* <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src={aboutUs} // Replace with your about us hero image
          alt="Cherish Journeys Team"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-gold">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Crafting unforgettable journeys since our inception
          </p>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-28 py-16">
        {/* Mission Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src={sukoonLogo} // Replace with your image
                alt="Sukoon Ek Safar"
                className="rounded-lg "
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif text-gold-dark mb-2">
                Sukoon Ek Safar
              </h2>
              <p className="text-xl md:text-xl text-gold-dark max-w-3xl mx-auto ">
                13 years of travel experience Recognised by ministry of Tourism
              </p>
              <p className="text-xl md:text-xl text-gold-dark max-w-3xl mx-auto mb-6">
                A Unit of Cherish Journeys
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At Sukoon Ek Safar, we believe travel is more than just moving
                from one destination to another. It’s about creating space to
                breathe, to pause, and to reconnect with yourself. In a world
                that never slows down, we design journeys that do. Every
                experience with Sukoon is meant to help you Pause. Breathe.
                Travel., turning travel into a soulful escape rather than a
                checklist of places. From serene mountain retreats to tranquil
                beaches, from quiet heritage trails to soulful escapes abroad,
                every trip we craft focuses on peace, comfort, and mindful
                experiences. And the best part? You don’t have to do a thing. We
                take care of everything - planning, bookings, itineraries, and
                every detail in between, so all you need to do is pause from
                your life and immerse yourself in the journey.
              </p>
              <p className="text-lg text-gray-600">
                What sets Sukoon apart is its essence — while most tours chase
                speed and sightseeing, we bring you stillness and depth. Our
                focus is not on covering the most, but on feeling the most.
                Sukoon Ek Safar is proud a venture of Cherish Journeys, a
                trusted inbound travel company. Guided by a founder with over 13
                years of experience in the travel industry, we bring
                professional expertise and heartfelt vision to create journeys
                that prioritize peace, comfort, and mindful travel, helping
                every traveller truly stop, pause, and relax
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20 bg-gray-50 p-12 rounded-xl">
          <h2 className="text-3xl font-serif text-center text-gold-dark mb-12">
            Why Choose Sukoon Ek Safar
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-gold text-7xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">
                Tailored Experiences
              </h3>
              <p className="text-gray-600">
                Every vacation is customized to your specific tastes, needs, and
                budget with our personal touch.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-gold text-7xl mb-4">😇</div>
              <h3 className="text-xl font-semibold mb-3">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                No hidden costs - we're upfront about what's included and
                excluded in your tour package.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-gold text-7xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold mb-3">Quality Partners</h3>
              <p className="text-gray-600">
                We work only with the best transport companies, qualified
                guides, hotels, and restaurants.
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

        <section className="mb-20">
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
        </section>

        {/* CTA Section */}
        <section className="bg-grey text-gold rounded-xl p-12 text-center">
          <h2 className="text-3xl font-serif mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us craft the perfect travel experience tailored exactly to your
            desires.
          </p>
          <button className="bg-white text-gold-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us Today
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
