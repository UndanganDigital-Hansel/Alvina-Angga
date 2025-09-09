"use client";

import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface MusicPlayerProps {
  start: boolean;
}

export default function MusicPlayer({ start }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Play blocked:", err);
      }
    }
  };

  // Mulai otomatis ketika start=true
  React.useEffect(() => {
    const audio = audioRef.current;
    if (start && audio) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [start]);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/music.mp3" type="audio/mpeg" />
        Browser tidak mendukung audio.
      </audio>

      {start && (
        <button
          onClick={togglePlay}
          className="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full shadow-lg  text-gray-600 hover:scale-110 transition"
        >
          {/* Lingkaran animasi CD */}
          <div
            className={`absolute w-10 h-10 rounded-full border-4 border-gray-600 ${
              isPlaying ? "animate-spin-slow" : ""
            }`}
          />
          {isPlaying ? <Pause size={15} /> : <Play size={15} />}
        </button>
      )}
    </>
  );
}
