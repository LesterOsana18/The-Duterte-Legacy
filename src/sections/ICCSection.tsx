import { iccCase } from "../data/iccCase";

const ICCSection = () => {
  return (
    <section className="min-h-screen bg-black text-gray-200 px-8 py-32 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column: Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-6">
            {iccCase.title}
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4 max-w-3xl">
            {iccCase.description}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4 max-w-3xl">
            The data presented sheds light on the immense scale of this case—numbers that reflect lives, challenges, and the pursuit of justice on the international stage. They remind us that justice requires accountability.
          </p>
          <p className="text-sm text-gray-500 max-w-3xl mb-4">
            *All data are provided by authoritative sources and reflect the latest reports from the ICC.
          </p>

          {/* Image at the Bottom of Left Column */}
          <div>
            <img
              src="/images/duterte.jpg"
              alt="Rodrigo Duterte"
              className="rounded-lg shadow-lg mx-auto"
            />
            <p className="text-xs text-gray-500 mt-4 text-center">
              File photo of former President Rodrigo Roa Duterte during 
              his initial appearance at the International Criminal Court on March 14, 2025, in The Hague.
            </p>
          </div>
        </div>

        {/* Right Column: Statistics Table */}
        <div>
          <ul className="divide-y divide-gray-800 overflow-hidden rounded-lg bg-gray-900 shadow-lg mb-4">
            {iccCase.statistics.map((stat, index) => (
              <li
                key={index}
                className="py-6 px-8 flex justify-between items-start hover:bg-gray-800 transition"
              >
                {/* Left-Aligned Content */}
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {"No additional details available."}
                  </p>
                </div>
                {/* Right-Aligned Value */}
                <span className="font-bold text-lg text-red-600 text-right">
                  {stat.value}
                </span>
              </li>
            ))}
          </ul>
            <a
              href="https://www.icc-cpi.int/philippines/duterte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:underline transition block text-center"
            >
              Source: International Criminal Court
            </a>
        </div>
      </div>
    </section>
  );
};

export default ICCSection;