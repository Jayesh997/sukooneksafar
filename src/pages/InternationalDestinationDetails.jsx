import { useParams } from "react-router";
import { statesData } from "../assets/internationalStatesData";
import ImageCarousel from "../components/ImageCarousel";

// ---------- Reusable Sections ----------
const BulletSection = ({ title, items }) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="font-serif text-xl text-gray-900 mb-3">{title}</h3>
      <ul className="list-disc pl-5 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ParagraphSection = ({ title, paragraphs }) => {
  if (!Array.isArray(paragraphs) || paragraphs.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="font-serif text-xl text-gray-900 mb-3">{title}</h3>
      <div className="space-y-3 text-gray-700">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

// ---------- Main Component ----------
const InternationalDestinationDetail = () => {
  const { id } = useParams();
  const destination = statesData[id];

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbfbfb]">
        <p className="text-gray-600 text-lg">Destination not found.</p>
      </div>
    );
  }

  const {
    title,
    tagline,
    images,
    highlights,
    famousFor,
    description,
    bestSuitedFor,
    experiences,
    ctaText,
  } = destination;

  return (
    <div className="bg-[#fbfbfb] min-h-screen pt-8">
      <div className="max-w-5xl mx-auto py-10 md:py-16 px-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-serif text-gray-800 mb-2 pl-4 border-l-4 border-gold">
          {title}
        </h1>

        {tagline && <p className="text-gray-600 italic mb-6 pl-4">{tagline}</p>}

        {/* 🔥 Image Carousel */}
        <ImageCarousel images={images} />

        {/* Content Card */}
        <div className="bg-white border-2 border-gold p-6 md:p-8 rounded-xl shadow-sm">
          <BulletSection title="State Highlights" items={highlights} />
          <BulletSection
            title="Why This Destination Is Famous For"
            items={famousFor}
          />
          <ParagraphSection title={`About ${title}`} paragraphs={description} />
          <BulletSection title="Best Suited For" items={bestSuitedFor} />
          <BulletSection title="Experiences We Curate" items={experiences} />

          {ctaText && (
            <div className="mt-10">
              <button className="bg-gold text-white px-8 py-3 rounded-full hover:bg-gold-dark transition">
                {ctaText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternationalDestinationDetail;
