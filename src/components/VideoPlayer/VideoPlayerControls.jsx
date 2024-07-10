import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const VideoPlayerControls = ({
  progress,
  isPaused,
  onPlayPause,
  size = 48,
  width = 3,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);
  return (
    <div className="relative flex justify-center items-center">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#aaaaaa"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#fff"
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute">
        <button
          className="group cursor-pointer flex justify-center items-center rounded-full bg-gray-900 text-white w-12 h-12 transition-all duration-300 ease-in-out hover:bg-gray-800"
          onClick={onPlayPause}
        >
          <div className="transition-all duration-300 ease-in-out transform group-hover:scale-110">
            {isPaused ? <FaPlay size={24} /> : <FaPause size={24} />}
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
