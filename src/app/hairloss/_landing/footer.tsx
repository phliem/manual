import Image from "next/image";
import type { FooterCategoryType, FooterLinkType } from "./footer.types";
import Icon from "../_icons/icon";

const FOOTER_LINKS: FooterCategoryType[] = [
  {
    title: "Product",
    layout: "flex-col",
    links: [
      {
        href: "#",
        label: "Popular",
        type: "TEXT",
      },
      {
        href: "#",
        label: "Trending",
        type: "TEXT",
      },
      {
        href: "#",
        label: "Guided",
        type: "TEXT",
      },
      {
        href: "#",
        label: "Products",
        type: "TEXT",
      },
    ],
  },
  {
    title: "Company",
    layout: "flex-col",
    links: [
      {
        href: "#",
        label: "Press",
        type: "TEXT",
      },
      {
        href: "#",
        label: "Mission",
        type: "TEXT",
      },
      {
        href: "#",
        label: "Strategy",
        type: "TEXT",
      },
      {
        href: "#",
        label: "About",
        type: "TEXT",
      },
    ],
  },
  {
    title: "Info",
    layout: "flex-col",
    links: [
      {
        href: "#",
        label: "Support",
        type: "TEXT",
      },
      {
        href: "#",
        label: "Customer Service",
        type: "TEXT",
      },
      {
        href: "#",
        label: "Get started",
        type: "TEXT",
      },
    ],
  },
  {
    title: "Follow us",
    layout: "flex-row",
    links: [
      {
        href: "https://www.facebook.com/MenofManual",
        label: "facebook",
        type: "ICON",
      },
      {
        href: "https://www.instagram.com/menofmanual/",
        label: "instagram",
        type: "ICON",
      },
      {
        href: "https://x.com/MenofManual",
        label: "x",
        type: "ICON",
      },
    ],
  },
];

export default async function Footer() {
  return (
    <footer className="bg-brand-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-12 items-start justify-between p-16">
          <a href="/">
            <Image src="/logo.svg" alt="Manual logo" width={75} height={75} />
          </a>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-2/3">
            {FOOTER_LINKS.map(
              ({ title, layout, links }: FooterCategoryType) => (
                <div key={title}>
                  <h4 className="text-xs font-bold uppercase">{title}</h4>
                  <div className={`flex ${layout} mt-5`}>
                    {links.map(({ label, type, href }: FooterLinkType) => {
                      return (
                        <span key={label}>
                          <a
                            href={href}
                            className="inline-block mb-5 me-5 hover:underline"
                            target={type === "ICON" ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                          >
                            {type === "ICON" ? (
                              <Icon
                                filename={label}
                                className="h-6 w-6 fill-red-900"
                                aria-label={`Link to the social network ${label}`}
                              />
                            ) : (
                              label
                            )}
                          </a>
                        </span>
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <hr className="text-brand-400" />
        <p className="text-sm text-brand-400 text-center p-6">
          © 2024 Manual. All rights reserverd
        </p>
      </div>
    </footer>
  );
}
