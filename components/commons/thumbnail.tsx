"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

interface YouTubeThumbnailProps {
  url: string;
}

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const extractVideoId = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.substring(1);
    } else if (parsedUrl.hostname.includes("youtube.com")) {
      return parsedUrl.searchParams.get("v");
    }
    return null;
  } catch {
    return null;
  }
};

const YouTubeThumbnail: React.FC<YouTubeThumbnailProps> = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = extractVideoId(url);

  if (!videoId) return <p>Invalid YouTube URL</p>;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      {isPlaying ? (
        <div className="absolute inset-0 w-full h-full">
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            playing
            controls
            style={{ position: "absolute", inset: 0 }}
          />
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
          <Image
            src={thumbnailUrl}
            alt="YouTube Thumbnail"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="9 19 9 5 20 12 9 19" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeThumbnail;