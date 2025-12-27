import { ejkStats } from "../data/ejkStats";

const StatisticsSection = () => {
  return (
    <section
      id="statistics"
      className="min-h-screen bg-neutral-900 text-gray-100 px-6 py-20"
    >
      <h2 className="text-3xl font-semibold border-l-4 border-blood pl-4 mb-6">
        {ejkStats.title}
      </h2>

      <p className="max-w-2xl text-gray-400 mb-12">
        {ejkStats.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ejkStats.statistics.map((stat, index) => (
          <div
            key={index}
            className="bg-neutral-800 p-6 rounded"
          >
            <div className="text-3xl font-bold text-blood">
              {stat.value}
            </div>
            <div className="mt-2 text-sm">{stat.label}</div>
            {stat.source && (
              <div className="mt-2 text-xs text-gray-500">
                {stat.source}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
