import type { Statistic } from "../types/stats";

interface Props {
  stat: Statistic;
}

const StatBlock = ({ stat }: Props) => {
  return (
    <div className="stat-block">
      <h3>{stat.value}</h3>
      <p>{stat.label}</p>
      {stat.source && <span className="source">{stat.source}</span>}
    </div>
  );
};

export default StatBlock;
