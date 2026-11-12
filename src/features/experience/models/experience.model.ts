export type Experience = {
  period: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
  /** Marks the job you hold today; its timeline node pulses. */
  isCurrent?: boolean;
};
