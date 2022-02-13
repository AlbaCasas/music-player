import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usePlayerActions = ({ selectedSong, audio, results }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = useNavigate();
  const prevSong = results[results.indexOf(selectedSong) - 1];
  const nextSong = results[results.indexOf(selectedSong) + 1];

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
    if (nextSong) {
      setIsPlaying(false);
      navigate(`/player/${nextSong.trackId}`);
    }
  };

  const onPreviousSong = () => {
    if (prevSong) {
      setIsPlaying(false);
      navigate(`/player/${prevSong.trackId}`);
    }
  };

  const isPrevSongDisabled = !prevSong;
  const isNextSongDisabled = !nextSong;

  return {
    onPlay,
    onPreviousSong,
    onNextSong,
    isPrevSongDisabled,
    isNextSongDisabled,
    isPlaying,
  };
};

export default usePlayerActions;
