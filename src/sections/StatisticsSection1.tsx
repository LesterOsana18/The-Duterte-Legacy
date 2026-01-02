import ArrowButton from "../components/ArrowButton";

const StatisticsSection1 = () => {
  const handleScroll = () => {
    document
      .getElementById("statistics-section-two")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="statistics-section-one"
      className="min-h-screen bg-[#111] w-full grid grid-cols-1 md:grid-cols-2 relative"
    >
      {/* Left Panel: Text Content */}
      <div
        className="
          flex flex-col justify-center
          px-4 sm:px-6 md:px-12 lg:px-16
          max-w-none md:max-w-lg
          mx-auto
          py-8 md:py-0
          order-2 md:order-1
        "
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-white font-bold">
          The War on Drugs: Statistics
        </h2>

        <p className="text-gray-400 mb-6 text-xs sm:text-sm">
          Graphic statistics from the bloody anti-drug campaign.
        </p>

        {/* Statistics Content */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl sm:text-4xl text-red-600 font-bold">
              12
            </h3>
            <p className="text-gray-300 mt-3 text-xs sm:text-sm">
              people killed in anti-drug operations on <strong>July 1, 2016</strong>, the
              first full day of Duterte's presidency.
            </p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl text-red-600 font-bold">
              5,000+
            </h3>
            <p className="text-gray-300 mt-3 text-xs sm:text-sm">
              deaths reported across the country by <strong>December 2016</strong>,
              including <span className="text-red-400 font-bold">2,041 drug suspects</span> killed in
              police operations, based on Al Jazeera data.
            </p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl text-red-600 font-bold">
              7,000
            </h3>
            <p className="text-gray-300 mt-3 text-xs sm:text-sm">
              deaths in police operations officially reported by 2022,
              with <strong>an additional 30,000</strong> estimated by human rights groups.
            </p>
          </div>
        </div>

        {/* Source */}
        <div className="flex flex-row items-center gap-1 mt-8">
          <span className="text-[10px] sm:text-xs text-gray-500">Source:</span>
          <a
            href="https://www.aljazeera.com/news/2025/3/11/arrested-on-icc-warrant-what-was-dutertes-war-on-drugs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-xs text-gray-500 hover:underline transition"
          >
            Al Jazeera
          </a>
        </div>
      </div>

      {/* Right Panel: Image */}
      <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-full order-1 md:order-2">
        <img
          src="/images/scene-two.png"
          alt="Police night operation"
          className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
        />
      </div>

      <ArrowButton handleScroll={handleScroll} />
    </section>
  );
};

export default StatisticsSection1;