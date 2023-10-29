import quandifyApp from "@/constants/images/quandify_app.png";
import ConeStorm from "@/constants/images/cone-storm.png";
import { TFunction } from "i18next";

import { useIsMobile } from "@/hooks/isMobile";
import WorkMobileVersion from "./workMobileVersion";
import WorkNormalVersion from "./workNormalVersion";

export type WorkItem = {
  title: string;
  description: string;
  image: string;
  link?: string;
  button?: string;
};

const workItems: WorkItem[] = [
  {
    title: "project0.title",
    description: "project0.message",
    image: quandifyApp,
  },
  {
    title: "project1.title",
    description: "project1.message",
    button: "project1.button",
    link: "https://luminous-crepe-1e214d.netlify.app/",
    image: ConeStorm,
  },
  // {
  //   title: "project2.title",
  //   description: "project2.message",
  //   image: cssLogo,
  // },
  // {
  //   title: "project3.title",
  //   description: "project3.message",
  //   image: tsLogo,
  // },
];

type WorkProps = {
  t: TFunction;
};

const Work: React.FC<WorkProps> = ({ t }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <WorkMobileVersion workItems={workItems} t={t} />;
  }

  return <WorkNormalVersion workItems={workItems} t={t} />;
};

export default Work;
