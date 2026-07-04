import { useState, useEffect } from "react";

const ImageCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Preload the first image on mount
  useEffect(() => {
    if (images.length > 0) {
      // Preload first image
      const img = new Image();
      img.src = images[0];

      // Mark first image as loaded
      setLoadedImages((prev) => new Set(prev).add(0));
    }
  }, [images]);

  // Preload next image when current changes (for smoother transitions)
  useEffect(() => {
    if (images.length > 0) {
      const nextIndex = (current + 1) % images.length;
      if (!loadedImages.has(nextIndex)) {
        const img = new Image();
        img.src = images[nextIndex];
        img.onload = () => {
          setLoadedImages((prev) => new Set(prev).add(nextIndex));
        };
      }
    }
  }, [current, images, loadedImages]);

  if (!Array.isArray(images) || images.length === 0) return null;

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mb-10">
      {/* Image with conditional loading strategy */}
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="w-full h-[260px] md:h-[500px] object-cover rounded-xl shadow-md transition-opacity duration-300"
        loading={current === 0 ? "eager" : "lazy"} // First image eager, rest lazy
        decoding="async"
        style={{
          backgroundColor: "#f3f4f6",
          opacity: loadedImages.has(current) ? 1 : 0.6,
        }}
        onLoad={() => {
          // Mark as loaded when image loads
          setLoadedImages((prev) => new Set(prev).add(current));
        }}
      />

      {/* Show loading indicator for unloaded images */}
      {!loadedImages.has(current) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition z-10"
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition z-10"
            aria-label="Next image"
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
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              index === current ? "bg-gold" : "bg-gray-300"
            }`}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
