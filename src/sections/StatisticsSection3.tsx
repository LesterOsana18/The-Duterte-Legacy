import ArrowButton from "../components/ArrowButton";

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
      <div className="absolute inset-0 bg-linear-to-b from-red-800 via-red-900 to-black opacity-80 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-center">
        {/* Section Header */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl text-white mb-12 sm:mb-14 md:mb-16 font-bold tracking-wide uppercase">
          Who Were Killed
        </h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Card 1 */}
          <a
            href="https://www.amnesty.org/en/latest/news/2017/02/war-on-drugs-war-on-poor/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center hover:no-underline hover:scale-105 transition-transform duration-300"
            aria-label="Learn more about the impact on urban poor communities"
          >
            <img
              src="/images/scene-four.png"
              className="mb-4 sm:mb-6 w-full sm:w-80 md:w-96 h-56 sm:h-64 md:h-72 object-cover grayscale hover:grayscale-0 transition duration-500 rounded-lg shadow-lg"
              alt="Urban poor communities"
            />
            <h4 className="text-xl sm:text-2xl text-red-600 mb-1 sm:mb-2 font-semibold group-hover:underline">
              Urban Poor
            </h4>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-center">
              Majority of victims came from low-income communities.
            </p>
          </a>

          {/* Card 2 */}
          <a
            href="https://www.hrw.org/news/2017/03/02/killing-squads-inside-philippines-war-drugs"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center hover:no-underline hover:scale-105 transition-transform duration-300"
            aria-label="Learn more about nighttime police operations"
          >
            <img
              src="/images/scene-five.png"
              className="mb-4 sm:mb-6 w-full sm:w-80 md:w-96 h-56 sm:h-64 md:h-72 object-cover grayscale hover:grayscale-0 transition duration-500 rounded-lg shadow-lg"
              alt="Nighttime arrests"
            />
            <h4 className="text-xl sm:text-2xl text-red-600 mb-1 sm:mb-2 font-semibold group-hover:underline">
              Night Raids
            </h4>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-center">
              Most killings occurred during nighttime police operations.
            </p>
          </a>

          {/* Card 3 */}
          <a
            href="https://www.hrw.org/report/2020/05/27/our-happy-family-gone/impact-war-drugs-children-philippines"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center hover:no-underline hover:scale-105 transition-transform duration-300"
            aria-label="Learn more about families left behind"
          >
            <img
              src="/images/scene-six.png"
              className="mb-4 sm:mb-6 w-full sm:w-80 md:w-96 h-56 sm:h-64 md:h-72 object-cover grayscale hover:grayscale-0 transition duration-500 rounded-lg shadow-lg"
              alt="Families of victims"
            />
            <h4 className="text-xl sm:text-2xl text-red-600 mb-1 sm:mb-2 font-semibold group-hover:underline">
              Families Left Behind
            </h4>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-center">
              Thousands of families were left without due process or justice.
            </p>
          </a>
        </div>
      </div>

      <ArrowButton handleScroll={handleScroll} />
    </section>
  );
};

export default StatisticsSection3;