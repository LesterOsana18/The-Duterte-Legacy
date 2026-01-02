import { useState } from "react";
import ArrowButton from "../components/ArrowButton";

const slides = [
  {
    title: "The Most Infamous Case During Duterte's War on Drugs",
    content:
      "This case became a turning point, exposing the deadly realities of the War on Drugs. Conflicts between official accounts and forensic evidence revealed state violence, with Kian's death standing as a symbol of injustice and the failure to protect the innocent.",
  },
  {
    title: "Who Was Kian Delos Santos?",
    content:
      "Kian delos Santos was a 17-year-old Grade 11 student from Caloocan City, Metro Manila, Philippines.",
    image: "/images/kian-1.png",
  },
  {
    title: "What Happened?",
    content:
      "Although he wasn't the intended target, he was killed during a police operation. He was shot point-blank despite footage showing him pleading for his life.",
    image: "/images/kian-2.png",
  },
  {
    title: "When Did It Happen?",
    content:
      "Kian's tragic death occurred on August 16, 2017. His killing sparked national outrage and highlighted the brutal realities of the war on drugs.",
    image: "/images/kian-3.png",
  },
  {
    title: "Where Did It Happen?",
    content:
      "The incident took place in a dark alley near his home. His death became a symbol of the widespread violence and human rights abuses during that era.",
    image: "/images/kian-4.png",
  },
  {
    title: "Why Is Kian's Case Significant?",
    content:
      "Kian's death was a critical turning point that exposed the public to the devastating consequences of the War on Drugs. The killing of an innocent student ignited nationwide condemnation of the administration's campaign.",
  },
];

const StatisticsSection2 = () => {
  const handleScroll = () => {
    document
      .getElementById("statistics-section-three")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="statistics-section-two"
      className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/scene-three.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content Card */}
      <div className="relative max-w-5xl w-full mx-4 sm:mx-6 px-6 sm:px-8 md:px-12 py-8 sm:py-12 md:py-14 rounded-xl bg-black/80 shadow-lg shadow-black">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-red-600 text-center">
          Remembering Kian Delos Santos
        </h2>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* Previous Slide Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="
              absolute left-0 sm:left-4 md:left-8 p-2 sm:p-3 rounded-full 
              bg-gray-700 hover:bg-gray-600 hover:scale-110 transition-transform focus:outline-none
              z-10"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide Content */}
          <div
            key={activeSlide}
            className="w-full px-12 sm:px-16 md:w-3/4 md:px-0 mx-auto text-center animate-card-fade-in"
          >
            {/* Image or Placeholder */}
            {slides[activeSlide].image ? (
              <div className="mb-4 sm:mb-6 h-40 sm:h-72 flex items-center justify-center">
                <img
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].title}
                  className="max-h-40 sm:max-h-72 w-auto rounded-md border border-white/10 shadow-lg"
                />
              </div>
            ) : (
              <div className="mb-4 sm:mb-6 w-full">
                <div className="h-0.5 bg-gray-700 w-full" />
              </div>
            )}

            {/* Title and Content */}
            <h3 className="text-base sm:text-lg md:text-2xl font-bold">
              {slides[activeSlide].title}
            </h3>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
              {slides[activeSlide].content}
            </p>
          </div>

          {/* Next Slide Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="
              absolute right-0 sm:right-4 md:right-8 p-2 sm:p-3 rounded-full 
              bg-gray-700 hover:bg-gray-600 hover:scale-110 transition-transform focus:outline-none
              z-10"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "w-3 h-3 sm:w-4 sm:h-4 bg-red-600 scale-125"
                  : "w-2 h-2 sm:w-3 sm:h-3 bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <ArrowButton handleScroll={handleScroll} />
    </section>
  );
};

export default StatisticsSection2;