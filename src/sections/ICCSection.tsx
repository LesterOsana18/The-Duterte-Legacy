import { iccCase } from "../data/iccCase";

const ICCSection = () => {
  return (
    <section className="min-h-screen bg-black text-gray-200 px-6 py-20 border-t border-gray-700">
      <h2 className="text-3xl font-semibold mb-6">
        {iccCase.title}
      </h2>

      <p className="max-w-2xl text-gray-400 mb-12">
        {iccCase.description}
      </p>

      <ul className="space-y-4 max-w-xl">
        {iccCase.statistics.map((stat, index) => (
          <li
            key={index}
            className="flex justify-between border-b border-gray-700 pb-2"
          >
            <span>{stat.label}</span>
            <span className="font-semibold">{stat.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ICCSection;
