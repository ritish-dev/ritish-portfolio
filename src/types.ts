export type Project = {
  number: string;
  title: string;
  label: string;
  description: string;
  tags: readonly string[];
  metric: string;
  metricLabel: string;
  challenge: string;
  approach: string;
  role: string;
  impact: string;
};

// Named tuples preserve the existing data layout and rendering order.
export type Experience = readonly [
  period: string,
  role: string,
  company: string,
  summary: string
];

export type WorkflowStep = readonly [
  number: string,
  title: string,
  description: string
];

export type TechCategory = {
  title: string;
  technologies: readonly string[];
};
