import { useState } from "react";

const ImageCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(images) || images.length === 0) return null;

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mb-10">
      {/* Image */}
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="w-full h-[260px] md:h-[400px] object-cover rounded-xl shadow-md"
      />

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              index === current ? "bg-gold" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
