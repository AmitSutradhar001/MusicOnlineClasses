"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Live Performance Updates",
    description:
      "Experience the thrill of real-time updates during live performances. Stay informed about any changes or additions to the lineup, ensuring you never miss a beat.",
    content: (
      <div className="h-full w-full  flex items-center justify-center  text-white">
        <Image
          src="/LivePerformanceUpdates.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Artist Roster Management",
    description:
      "Manage your artist roster effortlessly with our platform. Keep track of new signings, tour schedules, and promotional activities in real time, streamlining your agency's operations.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ArtistRosterManagement.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Event Schedule Tracking",
    description:
      "Track event schedules with ease. Our platform allows you to monitor changes in performance timings, venue details, and special guest appearances as they happen, ensuring seamless event coordination.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/EventScheduleTracking.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
