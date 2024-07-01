import { ComponentProps } from "react";
import IconChevron from "./chrevron";
import IconCross from "./cross";
import IconFacebook from "./facebook";
import IconInstagram from "./instagram";
import IconX from "./x";

type IconProps = ComponentProps<"svg"> & {
  filename: string;
};

export default function Icon({ filename, ...props }: IconProps) {
  switch (filename) {
    case "chevron":
      return <IconChevron {...props} />;
    case "cross":
      return <IconCross {...props} />;
    case "facebook":
      return <IconFacebook {...props} />;
    case "instagram":
      return <IconInstagram {...props} />;
    case "x":
      return <IconX {...props} />;
    default:
      break;
  }
}
