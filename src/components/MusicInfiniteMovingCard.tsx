"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicQuotes = [
  {
    quote:
      "Music is the universal language of mankind, connecting hearts and souls together.",
    name: "Henry Wadsworth Longfellow",
    title: "Poet",
  },
  {
    quote: "The only truth is music.",
    name: "Jack Kerouac",
    title: "Novelist",
  },
  {
    quote:
      "Music expresses that which cannot be said and on which it is impossible to be silent.",
    name: "Victor Hugo",
    title: "Author",
  },
  {
    quote:
      "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
    name: "Plato",
    title: "Philosopher",
  },
  {
    quote: "Without music, life would be a mistake.",
    name: "Friedrich Nietzsche",
    title: "Philosopher",
  },
  {
    quote: "Music washes away from the soul the dust of everyday life.",
    name: "Berthold Auerbach",
    title: "Author",
  },
  {
    quote: "Music is the strongest form of magic.",
    name: "Marilyn Manson",
    title: "Musician",
  },
  {
    quote: "Music can change the world because it can change people.",
    name: "Bono",
    title: "Musician",
  },
  {
    quote:
      "Music is the divine way to tell beautiful, poetic things to the heart.",
    name: "Pablo Casals",
    title: "Cellist",
  },
  {
    quote: "Music is the shorthand of emotion.",
    name: "Leo Tolstoy",
    title: "Author",
  },
];

export default function MusicInfiniteMovingCard() {
  return (
    <div className=" ">
      <h2 className="text-cyan-700 text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={musicQuotes}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
