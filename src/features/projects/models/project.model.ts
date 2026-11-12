export type Project = {
  title: string;
  category: string;
  description: string;
  /** Leave empty when the stack cannot be shared. */
  tech: string[];
  /** Internal company work: the card says details are confidential instead of listing the stack. */
  isConfidential?: boolean;
  /** Live site or repository. Omit to render the card without a link. */
  href?: string;
  /** Screenshot shown at the top of the card. Cards with an image are laid out full width. */
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};
