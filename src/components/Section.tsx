import type { SectionData } from "../types/stats";
import StatBlock from "./StatBlock";

interface Props {
  data: SectionData;
}

const Section = ({ data }: Props) => {
  return (
    <section className="section">
      <h2>{data.title}</h2>
      {data.description && <p className="description">{data.description}</p>}

      <div className="stats-grid">
        {data.statistics.map((stat, index) => (
          <StatBlock key={index} stat={stat} />
        ))}
      </div>
    </section>
  );
};

export default Section;
