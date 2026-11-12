export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  /** Live site or repository. Omit to render the card without a link. */
  href?: string;
};
