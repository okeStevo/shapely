import React from "react";
import BackgroundLinesDemo from "@/components/BackgroundLines";
import { BentoGridDemo } from "@/components/BentoGrid";
import Card from "@/components/Card";
import { AppleCardsCarouselDemo } from "@/components/AceCard";
import Contact from "@/components/Login";
import { AccordionDemo } from "@/components/Accordion";
import { MarqueeDemo } from "@/components/marqueepreview";
import { SignupFormDemo } from "@/components/signform";

export default function Page() {
  return (
    <>
      <BackgroundLinesDemo />
      <BentoGridDemo />
      {/* <AppleCardsCarouselDemo /> */}
      <AccordionDemo />
      <MarqueeDemo />,
      {/* <Contact /> */}
      <SignupFormDemo />
    </>
  );
}
