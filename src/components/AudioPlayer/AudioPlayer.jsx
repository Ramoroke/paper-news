import React, { useRef, useEffect, useState } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillStopCircleFill,
} from "react-icons/bs";

const AudioPlayer = ({ story }) => {
  const clickRef = useRef();
  const audioElem = useRef(null);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(story.audioSrc);

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const stopAudio = () => {
    if (audioElem.current) {
      audioElem.current.pause();
      audioElem.current.currentTime = 0;
      setisplaying(false);
    }
  };

  const audioPlayer = () => {
    return (
      <div className="w-full flex flex-col items-center justify-between p-4 border rounded-xl bg-blue-500 m-2">
        <div className="text-black">
          <p className="text-sm">{story.title}</p>
        </div>
        <div className="w-full">
          <div
            className="h-2 rounded-3xl bg-white cursor-pointer"
            onClick={checkWidth}
            ref={clickRef}
          >
            <div
              className="w-0 h-full bg-black rounded-3xl"
              style={{ width: `${currentSong.progress + "%"}` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center text-2xl">
          {isplaying ? (
            <BsFillPauseCircleFill
              className="cursor-pointer text-2xl ml-4 hover:divide-amber-400 pp"
              onClick={PlayPause}
            />
          ) : (
            <BsFillPlayCircleFill
              className="cursor-pointer text-2xl ml-4 hover:divide-amber-400 pp"
              onClick={PlayPause}
            />
          )}
          <BsFillStopCircleFill
            className="cursor-pointer text-2xl ml-4 hover:divide-amber-400"
            onClick={stopAudio}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <audio
        src={story.audioSrc}
        ref={audioElem}
        onTimeUpdate={onPlaying}
        type="audio/mpeg"
      />
      {audioPlayer()}
    </>
  );
};

export default AudioPlayer;
