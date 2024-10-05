"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (

  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            {/* <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    title: "Adedayo Adedamola",
    src: "/bg.png",
    content: "its crazy",
    body: `Before I met Victoire, I was really struggling in my classes. No
          matter how hard I tried, I just couldn’t keep up with the lessons, and
          my grades were always below average. I felt completely discouraged and
          started to believe that I just wasn’t good enough. But then everything
          changed when I started learning from Victoire. Their approach was
          different, patient, and tailored to my needs. Suddenly, concepts that
          seemed impossible started to make sense, and I found myself actually
          enjoying learning again! Thanks to their guidance, my grades improved,
          and I finally passed my exams. Victoire didn’t just help me improve
          academically—they helped me believe in myself again.`,
  },
  {
    title: "Olamide Olumide",
    src: "/bg.png",
    content: "its crazy",
    body: `Before I met Victoire, I was really struggling in my classes. No
          matter how hard I tried, I just couldn’t keep up with the lessons, and
          my grades were always below average. I felt completely discouraged and
          started to believe that I just wasn’t good enough. But then everything
          changed when I started learning from Victoire. Their approach was
          different, patient, and tailored to my needs. Suddenly, concepts that
          seemed impossible started to make sense, and I found myself actually
          enjoying learning again! Thanks to their guidance, my grades improved,
          and I finally passed my exams. Victoire didn’t just help me improve
          academically—they helped me believe in myself again.`,
  },
  {
    title: "John James",
    src: "/bg.png",
    content: "its crazy",
    body: `Before I met Victoire, I was really struggling in my classes. No
          matter how hard I tried, I just couldn’t keep up with the lessons, and
          my grades were always below average. I felt completely discouraged and
          started to believe that I just wasn’t good enough. But then everything
          changed when I started learning from Victoire. Their approach was
          different, patient, and tailored to my needs. Suddenly, concepts that
          seemed impossible started to make sense, and I found myself actually
          enjoying learning again! Thanks to their guidance, my grades improved,
          and I finally passed my exams. Victoire didn’t just help me improve
          academically—they helped me believe in myself again.`,
  },
  {
    title: "Carter Cartel",
    src: "/bg.png",
    content: "its crazy",
    body: `Before I met Victoire, I was really struggling in my classes. No
          matter how hard I tried, I just couldn’t keep up with the lessons, and
          my grades were always below average. I felt completely discouraged and
          started to believe that I just wasn’t good enough. But then everything
          changed when I started learning from Victoire. Their approach was
          different, patient, and tailored to my needs. Suddenly, concepts that
          seemed impossible started to make sense, and I found myself actually
          enjoying learning again! Thanks to their guidance, my grades improved,
          and I finally passed my exams. Victoire didn’t just help me improve
          academically—they helped me believe in myself again.`,
  },
];
