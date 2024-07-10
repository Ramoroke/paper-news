import React, { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import AudioPlayer from "./AudioPlayer";

const AudioContainer = ({ audios }) => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  const story = audios[currentAudioIndex];
  return (
    <div className="container mx-auto px-4">
      <div className=" mx-auto max-h-96 bg-gray-900 text-white rounded-lg shadow-lg overflow-y-scroll">
        <div className="sticky top-1 z-5 mt-0 bg-gray-900 rounded-lg ">
          <div className="flex items-center p-4 border-b border-gray-700">
            <div>
              <h2 className="text-lg font-bold">Audio Player</h2>
              <p className="text-sm">Select an audio to play</p>
            </div>
          </div>
          <div className="p-4">
            <div>
              {currentAudioIndex !== null && <AudioPlayer story={story} />}
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Informative News Audios</h3>
          <ul>
            {audios.map((audio, index) => (
              <li
                key={index}
                className={`border-t border-gray-700 py-2 ${
                  currentAudioIndex === index ? "bg-gray-800" : ""
                }`}
              >
                <button
                  className="flex items-center w-full text-left"
                  onClick={() => setCurrentAudioIndex(index)}
                >
                  <p className="m-4">
                    <BsFillPlayCircleFill />
                  </p>
                  <div>
                    <p className="font-bold">{audio.title}</p>
                    <p className="text-xs text-gray-400">{audio.date}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AudioContainer;
