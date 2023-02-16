import { styleIcon } from "./styled";
import { ReactComponent as GitHub } from "./icons/github.svg";
import { ReactComponent as LinkedIn } from "./icons/linkedin.svg";

export const socialsData = [
  {
    name: "GitHub",
    url: "https://github.com/adrianSACHA",
    Icon: styleIcon(GitHub),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adrian-sachajdakiewicz/",
    Icon: styleIcon(LinkedIn),
  },
];