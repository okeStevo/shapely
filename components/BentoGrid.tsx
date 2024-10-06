import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import bg from "@/app/public/exp2.svg"
import newLo from "@/app/public/push_the_button.jpeg"
import amaLo from "@/app/public/ama_loc.jpeg"
import join from "@/app/public/join.svg"
import sucStoty from "@/app/public/suc_stories.jpeg"
import Image from "next/image";
export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ logo }: any) => (
  <div className="flex flex-1 w-full bg-center h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image alt="ss" src={logo} loading="eager" width={100} height={100} className="w-full h-full" />
  </div>
);
const items = [
  {
    title: "New Location Just dropped",
    description:
      "We’ve added new hot spots for your business! Check them out and get ready to thrive!",
    header: <Skeleton logo={newLo} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Budget-Friendly Options Unveiled!",
    description:
      "Discover amazing locations that won’t break the bank! Your wallet will thank you",
    header: <Skeleton logo={amaLo} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Success Stories You Must Read!",
    description:

      "Hear from entrepreneurs who found their dream spots with us! Get inspired!",
    header: <Skeleton logo={sucStoty} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Personalized Learning",
    description:
      "Offer lessons that adapt to the learning pace and style of each child, helping them progress confidently.",
    header: <Skeleton logo={join} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Join out community today",
    description:
      "Connect with like-minded business enthusiasts and share your journey! Let’s grow together!",
    header: <Skeleton logo={sucStoty} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
