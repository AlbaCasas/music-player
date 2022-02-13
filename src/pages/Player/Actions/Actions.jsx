import React from "react";
import { FaPlay, FaForward, FaBackward, FaPause } from "react-icons/fa";
import usePlayerActions from "../../../hooks/usePlayerActions";

const Actions = ({ selectedResult, results, audio }) => {
  const {
    onPlay,
    onPreviousSong,
    onNextSong,
    isPrevSongDisabled,
    isNextSongDisabled,
    isPlaying,
  } = usePlayerActions({ selectedSong: selectedResult, audio, results });
  return (
    <div className="player-actions">
      <FaBackward
        onClick={onPreviousSong}
        className={`player-actions__action ${
          isPrevSongDisabled && "player-actions__action--disabled"
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
          isNextSongDisabled && "player-actions__action--disabled"
        }`}
      />
    </div>
  );
};

export default Actions;
