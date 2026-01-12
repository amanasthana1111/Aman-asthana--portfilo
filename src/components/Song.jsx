import React, { useState, useRef, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import music from "../assets/music.mp3";

const Song = () => {
  const [playing, setPlaying] = useState(null);
  const playerRef = useRef(null);


  const togglePlay = () => {
    const audio = playerRef.current?.audioEl?.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };




  return (
    <div>
      <ReactAudioPlayer
        src={music}
        ref={playerRef}
        preload="auto"
        controls={false}
      />

      <h3 className="fixed bottom-21 right-4 z-50 text-[10px] text-white">
        Enjoy Some <span className="text-orange-400">Music</span>
      </h3>

      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 bg-[#171717] backdrop-blur-md border border-white/20 text-red-500 p-4 rounded-full shadow-lg hover:scale-105 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
      >
        {playing ? (
          // Pause Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
          </svg>
        ) : (
          // Play Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-4.586-2.65A1 1 0 009 9.382v5.236a1 1 0 001.166.964l4.586-2.65a1 1 0 000-1.764z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Song;
