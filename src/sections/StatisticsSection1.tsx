const StatisticsSection1 = () => {
  const handleScroll = () => {
    document
      .getElementById("statistics-section-two")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="statistics-section-one"
      className="min-h-screen bg-[#111] w-full grid grid-cols-1 md:grid-cols-2 relative">
      
      {/* Left: Text Content */}
      <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-lg mx-auto">
        <h2 className="text-4xl mb-4 text-white font-bold">
          The War on Drugs: Statistics
        </h2>
        <p className="text-gray-400 mb-4 text-sm">
          Graphic statistics from the bloody anti-drug campaign.
        </p>

        {/* Stats Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-4xl text-red-600 font-bold">
              12
            </h3>
            <p className="text-gray-300 mt-4 text-sm">
              people killed in anti-drug operations on <strong>July 1, 2016</strong>, the
              first full day of Duterte's presidency.
            </p>
          </div>

          <div>
            <h3 className="text-4xl text-red-600 font-bold">
              5,000+
            </h3>
            <p className="text-gray-300 mt-4 text-sm">
              deaths reported across the country by <strong>December 2016</strong>,
              including <span className="text-red-400 font-bold">2,041 drug suspects</span> killed in
              police operations, based on Al Jazeera data.
            </p>
          </div>

          <div>
            <h3 className="text-4xl text-red-600 font-bold">
              7,000
            </h3>
            <p className="text-gray-300 mt-4 text-sm">
              deaths in police operations officially reported during Duterte's presidency by 2022,
              with <strong>an additional 30,000</strong> estimated by human rights groups.
            </p>
          </div>
        </div>

        {/* Source aligned side by side */}
        <div className="flex items-center space-x-1 mt-6">
          <p className="text-xs text-gray-500">Source:</p>
          <a
            href="https://www.aljazeera.com/news/2025/3/11/arrested-on-icc-warrant-what-was-dutertes-war-on-drugs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read the Al Jazeera Report on Duterte's War on Drugs"
            className="text-xs text-gray-500 hover:underline transition"
          >
            Al Jazeera
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative w-full h-full">
        <img
          src="/images/scene-two.png"
          alt="Police night operation"
          className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
        />
      </div>

      {/* Arrow Down Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleScroll}
          aria-label="Continue Reading"
          className="
            p-2 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default StatisticsSection1;