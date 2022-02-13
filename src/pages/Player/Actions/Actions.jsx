import React from "react";
import { FaPlay, FaForward, FaBackward } from "react-icons/fa";

const Actions = () => {
  return (
    <div className="player-actions">
      <FaBackward className="player-actions__action player-actions__action--disabled" />
      <FaPlay className="player-actions__action player-actions__action--main" />
      <FaForward className="player-actions__action" />
    </div>
  );
};

export default Actions;
