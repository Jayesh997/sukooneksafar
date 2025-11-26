import { useLocation, useParams } from "react-router";

const DestinationDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  // You can use either the ID to fetch data or use the location state
  const destination = state?.destination || {}; // Fallback to empty object

  return (
    <div className="bg-[#fbfbfb] min-h-screen pt-8">
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-4">
        <h1 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 md:mb-8 pl-4 border-l-4 border-gold">
          {destination.title}
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src={destination.image}
              alt={destination.title}
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div>
            {/* <p className="text-xl mb-4">{destination.description}</p> */}
            <div className="bg-white border-2 border-gold p-6 rounded-lg">
              <h3 className="font-serif text-black text-2xl mb-4">
                Tour Highlights
              </h3>
              <ul className="list-disc pl-5 pb-5">
                <li className="text-black">
                  Explore the rich culture and history
                </li>
                <li className="text-black">
                  Visit iconic landmarks and hidden gems
                </li>
                <li className="text-black">
                  Enjoy local cuisine and experiences
                </li>
                <li className="text-black">Personalized travel itinerary</li>{" "}
              </ul>
              {/* Add your destination-specific content here */}

              <button className="bg-gold text-white px-6 py-3 rounded-full hover:bg-gold-dark transition">
                Book This Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
