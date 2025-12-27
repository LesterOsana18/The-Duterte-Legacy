const StatisticsSection2 = () => {
  return (
    <section 
      className="min-h-screen bg-cover bg-center flex items-center relative"
      style={{ backgroundImage: "url('/images/scene-three.png')" }}
    >
      {/* Frosted glass effect with blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative max-w-5xl mx-auto grid grid-cols-2 gap-4 text-center bg-black/70 px-8 py-12 rounded-lg items-center">
        {/* Left: Government Figures + Divider */}
        <div className="flex flex-col justify-center items-center border-r border-red-700 pr-8">
          <h4 className="uppercase text-gray-400 mb-2">
            Government Figures
          </h4>
          <p className="text-5xl font-bold text-white">6,252</p>
          <p className="text-gray-400 mt-2">
            deaths during police operations
          </p>
        </div>

        {/* Right: Independent Estimates */}
        <div className="flex flex-col justify-center items-center pl-8">
          <h4 className="uppercase text-gray-400 mb-2">
            Independent Estimates
          </h4>
          <p className="text-5xl font-bold text-red-600">
            27,000–30,000
          </p>
          <p className="text-gray-400 mt-2">
            suspected extrajudicial killings
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection2;