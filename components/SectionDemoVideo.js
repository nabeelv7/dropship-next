"use client";

import { useState } from "react";
import Image from "next/image";

export default function SectionDemoVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video">
      {showVideo ? (
        <video
          className="w-full h-full object-cover md:rounded-md shadow-lg rounded-none"
          controls
          autoPlay
          playsInline
          preload="none"
        >
          <source src="/videos/massage-chair-demo.mp4" type="video/mp4" />
          <source src="/videos/massage-chair-demo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="w-full h-full relative cursor-pointer"
          onClick={() => setShowVideo(true)}
        >
          <Image
            src="/images/massage-chair-demo-thumbnail.webp"
            alt="Massage Chair Demo"
            fill
            className="object-cover md:rounded-md shadow-lg rounded-none"
            priority
          />
          {/* Optional Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary opacity-80 rounded-full p-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l12 6-12 6V4z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
