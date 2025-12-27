const StatisticsSection3 = () => {
  return (
    <section className="min-h-screen bg-[#111] relative">
      {/* Frosted glass effect with a blueish gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-red-900 via-gray-900 to-black opacity-75 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Section Header */}
        <h3 className="text-5xl text-white mb-16 font-bold tracking-wide uppercase">
          Who Were Killed
        </h3>

        <div className="grid md:grid-cols-3 gap-18">
          {/* Card 1: Urban Poor */}
          <div className="group flex flex-col items-center">
            <img
              src="/images/scene-four.png"
              className="mb-6 w-96 h-72 object-cover grayscale hover:grayscale-0 transition duration-500 rounded-lg shadow-lg"
              alt="Urban poor communities"
            />
            <h4 className="text-2xl text-red-600 mb-2 font-semibold group-hover:underline">
              Urban Poor
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Majority of victims came from low-income communities.
            </p>
          </div>

          {/* Card 2: Night Raids */}
          <div className="group flex flex-col items-center">
            <img
              src="/images/scene-five.png"
              className="mb-6 w-96 h-72 object-cover grayscale hover:grayscale-0 transition duration-500 rounded-lg shadow-lg"
              alt="Nighttime arrests"
            />
            <h4 className="text-2xl text-red-600 mb-2 font-semibold group-hover:underline">
              Night Raids
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Most killings occurred during nighttime police operations.
            </p>
          </div>

          {/* Card 3: Families Left Behind */}
          <div className="group flex flex-col items-center">
            <img
              src="/images/scene-six.png"
              className="mb-6 w-96 h-72 object-cover grayscale hover:grayscale-0 transition duration-500 rounded-lg shadow-lg"
              alt="Families of victims"
            />
            <h4 className="text-2xl text-red-600 mb-2 font-semibold group-hover:underline">
              Families Left Behind
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Thousands of families were left without due process or justice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection3;