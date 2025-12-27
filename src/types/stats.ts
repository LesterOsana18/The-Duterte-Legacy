export interface Statistic {
  label: string;
  value: string;
  source?: string;
}

export interface SectionData {
  title: string;
  description?: string;
  statistics: Statistic[];
}
