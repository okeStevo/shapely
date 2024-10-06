import React from "react";
import BackgroundLinesDemo from "@/components/BackgroundLines";
import { BentoGridDemo } from "@/components/BentoGrid";
import { AccordionDemo } from "@/components/Accordion";
import { MarqueeDemo } from "@/components/marqueepreview";
import { SignupFormDemo } from "@/components/signform";

export default function Page() {
  return (
    <>
      <BackgroundLinesDemo />
      <BentoGridDemo />
      <AccordionDemo />
      <MarqueeDemo />,
      <SignupFormDemo />
    </>
  );
}
