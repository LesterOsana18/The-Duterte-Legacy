const StatisticsSection3 = () => {
  const handleScroll = () => {
    document
      .getElementById("icc-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="statistics-section-three"
      className="min-h-screen bg-[#111] relative"
    >
      {/* Frosted glass effect with a blood-color gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-red-800 via-red-900 to-black opacity-80 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
        {/* Section Header */}
        <h3 className="text-5xl text-white mb-16 font-bold tracking-wide uppercase">
          Who Were Killed
        </h3>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-18">
          {/* Card 1: Urban Poor */}
          <a
            href="https://www.amnesty.org/en/latest/news/2017/02/war-on-drugs-war-on-poor/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center hover:no-underline hover:scale-110 transition-transform duration-300"
            aria-label="Learn more about the impact on urban poor communities"
          >
            <img
              src="/images/scene-four.png"
              className="mb-6 w-96 h-72 object-cover grayscale hover:grayscale-0 transition duration-500 rounded-lg shadow-lg"
              alt="Urban poor communities"
            />
            <h4 className="text-2xl text-red-600 mb-2 font-semibold group-hover:underline">
              Urban Poor
            </h4>
            <p className="text-gray-400 leading-relaxed text-center">
              Majority of victims came from low-income communities.
            </p>
          </a>

          {/* Card 2: Night Raids */}
          <a
            href="https://www.hrw.org/news/2017/03/02/killing-squads-inside-philippines-war-drugs"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center hover:no-underline hover:scale-110 transition-transform duration-300"
            aria-label="Learn more about nighttime police operations"
          >
            <img
              src="/images/scene-five.png"
              className="mb-6 w-96 h-72 object-cover grayscale hover:grayscale-0 transition duration-500 rounded-lg shadow-lg"
              alt="Nighttime arrests"
            />
            <h4 className="text-2xl text-red-600 mb-2 font-semibold group-hover:underline">
              Night Raids
            </h4>
            <p className="text-gray-400 leading-relaxed text-center">
              Most killings occurred during nighttime police operations.
            </p>
          </a>

          {/* Card 3: Families Left Behind */}
          <a
            href="https://www.hrw.org/report/2020/05/27/our-happy-family-gone/impact-war-drugs-children-philippines"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center hover:no-underline hover:scale-110 transition-transform duration-300"
            aria-label="Learn more about families left behind"
          >
            <img
              src="/images/scene-six.png"
              className="mb-6 w-96 h-72 object-cover grayscale hover:grayscale-0 transition duration-500 rounded-lg shadow-lg"
              alt="Families of victims"
            />
            <h4 className="text-2xl text-red-600 mb-2 font-semibold group-hover:underline">
              Families Left Behind
            </h4>
            <p className="text-gray-400 leading-relaxed text-center">
              Thousands of families were left without due process or justice.
            </p>
          </a>
        </div>
      </div>

      {/* Arrow Down Button */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={handleScroll}
          aria-label="Continue Reading"
          className="
            p-2 rounded-full bg-red-600 hover:bg-red-700 hover:scale-110 transition-all duration-300
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
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

export default StatisticsSection3;