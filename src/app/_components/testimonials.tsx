"use client";

import React from "react";
import { User } from "lucide-react";

// Tipe data ulasan
type Review = {
  name: string;
  username: string;
  body: string;
};

// Data dummy ulasan
const reviews: Review[] = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
];

// Komponen utama
export default function Testimonials() {
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
          What people are saying
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          See how Pixora empowers users and businesses of all sizes. Here's what
          real people are saying on Twitter.
        </p>
      </div>

      <div className="relative space-y-6">
        <Marquee pauseOnHover className="mb-4">
          {firstRow.map((review, index) => (
            <TestimonialCard key={`first-${index}`} review={review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover>
          {secondRow.map((review, index) => (
            <TestimonialCard key={`second-${index}`} review={review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

// Komponen marquee dengan animasi scroll kiri/kanan
const Marquee = ({
  children,
  reverse = false,
  pauseOnHover = false,
  className = "",
}: {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`group flex overflow-hidden py-2 ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={`flex shrink-0 gap-4 whitespace-nowrap ${
          reverse ? "animate-scroll-right" : "animate-scroll-left"
        } ${pauseOnHover ? "group-hover-paused" : ""}`}
      >
        {children}
      </div>
      <div
        className={`flex shrink-0 gap-4 whitespace-nowrap ${
          reverse ? "animate-scroll-right" : "animate-scroll-left"
        } ${pauseOnHover ? "group-hover-paused" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

const TestimonialCard = ({ review }: { review: Review }) => {
  return (
    <div className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] max-w-xs flex-shrink-0 p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
          <User className="w-5 h-5 text-black dark:text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base">
            {review.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {review.username}
          </p>
        </div>
      </div>
      <blockquote className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-1 text-ellipsis">
        "{review.body}"
      </blockquote>
    </div>
  );
};