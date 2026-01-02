import { useState, useEffect } from "react";
import { iccCase } from "../data/iccCase";
import ArrowButton from "../components/ArrowButton";

const ICCSection = () => {
  const handleScroll = () => {
    document
      .getElementById("call-to-action-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = document.getElementById("icc-section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="icc-section"
      className="relative min-h-screen bg-black text-gray-200 px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-32 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
        {/* Left Panel: Text Content */}
        <div
          className={`${
            isInView ? "animate-slide-left opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            {iccCase.title}
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-6 max-w-3xl">
            {iccCase.description}
          </p>
          <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl">
            The data presented sheds light on the immense scale of this case—
            numbers that reflect lives, challenges, and the pursuit of justice
            on the international stage. They remind us that justice requires
            accountability.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 max-w-3xl mb-6">
            *All data are provided by authoritative sources and reflect the
            latest reports from the ICC.
          </p>
        </div>

        {/* Right Panel: Statistics Table */}
        <div
          className={`flex flex-col ${
            isInView ? "animate-slide-right opacity-100" : "opacity-0"
          }`}
        >
          <ul className="divide-y divide-gray-800 bg-gray-900 shadow-lg rounded-lg mb-6">
            {iccCase.statistics.map((stat, index) => (
              <li
                key={index}
                className={`py-4 sm:py-6 px-6 sm:px-8 flex justify-between items-center ${
                  index % 2 === 0 ? "bg-gray-950" : "bg-gray-900"
                } transition-all ${
                  isInView ? "opacity-100 delay-300" : "opacity-0"
                }`}
              >
                {/* Left-Aligned Label */}
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-200">
                    {stat.label}
                  </h4>
                </div>

                {/* Right-Aligned Value */}
                <span className="font-bold text-base sm:text-lg text-red-600 animate-pulse whitespace-nowrap">
                  {stat.value}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-center mt-2">
            <div className="flex items-center space-x-1">
              <p className="text-xs text-gray-500">Source:</p>
              <a
                href="https://www.icc-cpi.int/philippines/duterte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read Duterte's ICC Case Details"
                className="text-xs text-gray-500 hover:underline transition duration-300"
              >
                International Criminal Court (ICC)
              </a>
            </div>
          </div>
        </div>
      </div>
      <ArrowButton handleScroll={handleScroll} />
    </section>
  );
};

export default ICCSection;