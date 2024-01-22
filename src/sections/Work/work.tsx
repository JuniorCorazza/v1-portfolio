import QuandifyApp from "@/constants/images/quandify_app.png";
import ConeStorm from "@/constants/images/cone-storm.png";
import ECommerce from "@/constants/images/e-commerce.png";
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
    title: "project2.title",
    description: "project2.message",
    button: "project2.button",
    link: "https://ecommerce-git-main-junior-corazzas-projects.vercel.app/",
    image: ECommerce,
  },
  {
    title: "project0.title",
    description: "project0.message",
    image: QuandifyApp,
  },
  {
    title: "project1.title",
    description: "project1.message",
    button: "project1.button",
    link: "https://luminous-crepe-1e214d.netlify.app/",
    image: ConeStorm,
  },
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
