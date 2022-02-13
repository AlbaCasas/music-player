import React, { useEffect, useState } from "react";
import { FaPlay, FaForward, FaBackward, FaPause } from "react-icons/fa";

const Actions = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const onPlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    } else {
      setIsPlaying(true);
      audio.play();
    }
  };

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  return (
    <div className="player-actions">
      <FaBackward className="player-actions__action player-actions__action--disabled" />
      {!isPlaying ? (
        <FaPlay
          onClick={onPlay}
          className="player-actions__action player-actions__action--main"
        />
      ) : (
        <FaPause onClick={onPlay} />
      )}
      <FaForward className="player-actions__action" />
    </div>
  );
};

export default Actions;
