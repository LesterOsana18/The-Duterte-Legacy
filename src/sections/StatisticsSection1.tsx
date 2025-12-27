const StatisticsSection1 = () => {
  return (
    <section className="min-h-screen bg-[#111] grid md:grid-cols-2">
      {/* Left: Text Content */}
      <div className="flex flex-col justify-center px-6 md:px-12 max-w-175 mx-auto">
        <h2 className="text-5xl mb-4 text-white">
          The War on Drugs
        </h2>
        <p className="text-gray-400 mb-6">
          Official figures vs independent investigations
        </p>

        <h3 className="text-6xl text-red-600 font-bold">
          6,252
        </h3>
        <p className="text-gray-300 mt-2">
          officially acknowledged deaths in police operations
        </p>

        <p className="text-xs text-gray-500 mt-4">
          Source: Philippine National Police
        </p>
      </div>

      {/* Right: Image */}
      <div className="relative">
        <img
          src="/images/scene-two.png"
          alt="Police night operation"
          className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
        />
      </div>
    </section>
  );
};

export default StatisticsSection1;