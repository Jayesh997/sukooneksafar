import { useLocation, useParams } from "react-router";

const ExperienceDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const experience = state?.experience || {};

  return (
    <div className="bg-[#fbfbfb] min-h-screen pt-8">
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-4">
        <h1 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 md:mb-8 pl-4 border-l-4 border-gold">
          {experience.title}
        </h1>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Image Section */}
          <div className="w-full">
            <img
              src={experience.image}
              alt={experience.title}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="w-full">
            <div className="bg-white border-2 border-gold p-4 md:p-6 rounded-lg">
              <h3 className="font-serif text-black text-xl md:text-2xl mb-3 md:mb-4">
                Experience Details
              </h3>
              <ul className="list-disc pl-5 space-y-2 pb-4 md:pb-5">
                <li className="text-black">
                  Explore the rich culture and history
                </li>
                <li className="text-black">
                  Visit iconic landmarks and hidden gems
                </li>
                <li className="text-black">
                  Enjoy local cuisine and experiences
                </li>
                <li className="text-black">Personalized travel itinerary</li>
              </ul>
              <button className="w-full md:w-auto bg-gold text-white px-6 py-3 rounded-full hover:bg-gold-dark transition">
                Book This Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
