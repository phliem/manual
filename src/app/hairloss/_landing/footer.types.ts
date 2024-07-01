type FooterCategoryType = {
  title: string;
  layout: "flex-col" | "flex-row";
  links: FooterLinkType[];
};

type FooterLinkType = {
  type: "TEXT" | "ICON";
  label: string;
  href: string;
};

export type { FooterCategoryType, FooterLinkType };
