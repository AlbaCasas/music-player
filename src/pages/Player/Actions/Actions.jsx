import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaForward, FaBackward, FaPause } from "react-icons/fa";

const Actions = ({ audio, prevResult, nextResult }) => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  const onPlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    } else {
      setIsPlaying(true);
      audio.play();
    }
  };

  const onNextSong = () => {
    if (nextResult) {
      setIsPlaying(false);
      navigate(`/player/${nextResult.trackId}`);
    }
  };

  const onPreviousSong = () => {
    if (prevResult) {
      setIsPlaying(false);
      navigate(`/player/${prevResult.trackId}`);
    }
  };

  return (
    <div className="player-actions">
      <FaBackward
        onClick={onPreviousSong}
        className={`player-actions__action ${
          !prevResult && "player-actions__action--disabled"
        }`}
      />
      {!isPlaying ? (
        <FaPlay
          onClick={onPlay}
          className="player-actions__action player-actions__action--main"
        />
      ) : (
        <FaPause onClick={onPlay} className="player-actions__action" />
      )}
      <FaForward
        onClick={onNextSong}
        className={`player-actions__action ${
          !nextResult && "player-actions__action--disabled"
        }`}
      />
    </div>
  );
};

export default Actions;
