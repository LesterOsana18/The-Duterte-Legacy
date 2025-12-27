import type { SectionData } from "../types/stats";

export const ejkStats: SectionData = {
  title: "Extrajudicial Killings During the Drug War (2016–2022)",
  description:
    "Official government figures and independent investigations present significantly different accounts of the death toll resulting from the anti-drug campaign.",

  statistics: [
    {
      label: "Officially Reported Deaths (Police Operations)",
      value: "6,200+",
      source: "Philippine National Police"
    },
    {
      label: "Estimated Total Deaths (Independent Groups)",
      value: "12,000 – 30,000",
      source: "Human Rights Watch, Amnesty International"
    },
    {
      label: "Reported Killings in First 6 Months",
      value: "7,000+",
      source: "Amnesty International"
    },
    {
      label: "Children Killed",
      value: "150+",
      source: "Human rights documentation"
    },
    {
      label: "Drug-Related Arrests",
      value: "327,000+",
      source: "PNP records (2022)"
    }
  ]
};
