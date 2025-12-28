import { useState, useEffect } from "react";
import { iccCase } from "../data/iccCase";

const ICCSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = document.getElementById("icc-section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when the section is in view.
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible.
    );

    if (section) {
      observer.observe(section);
    }

    // Cleanup the observer when the component unmounts.
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="icc-section"
      className="min-h-screen bg-black text-gray-200 px-8 py-32 border-t border-gray-800"
    >
      <div 
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16"
      >
        {/* Left Column: Text Content */}
        <div className={`${isInView ? "animate-slide-left opacity-100" : "opacity-0"}`}>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            {iccCase.title}
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
            {iccCase.description}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl">
            The data presented sheds light on the immense scale of this case—numbers that reflect lives, challenges, and the pursuit of justice on the international stage. They remind us that justice requires accountability.
          </p>
          <p 
            className="text-sm text-gray-500 max-w-3xl mb-6"
          >
            *All data are provided by authoritative sources and reflect the latest reports from the ICC.
          </p>
        </div>

        {/* Right Column: Statistics Table */}
        <div className={`flex flex-col ${isInView ? "animate-slide-right opacity-100" : "opacity-0"}`}>
          <ul className="divide-y divide-gray-800 bg-gray-900 shadow-lg rounded-lg mb-6">
            {iccCase.statistics.map((stat, index) => (
              <li
                key={index}
                className={`py-6 px-8 flex justify-between items-center transition-all ${
                  isInView ? `opacity-100 delay-${index * 100}` : "opacity-0"
                } ${index % 2 === 0 ? "bg-gray-950" : "bg-gray-900"}`}
              >
                {/* Left-Aligned Content */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-200">
                    {stat.label}
                  </h4>
                </div>

                {/* Right-Aligned Value */}
                <span 
                  className="font-bold text-lg text-red-600 animate-pulse"
                >
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
    </section>
  );
};

export default ICCSection;