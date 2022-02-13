import { useParams } from "react-router-dom";
import Actions from "./Actions/Actions";
import Preview from "./Preview/Preview";
import Social from "./Social/Social";

const Player = ({ results }) => {
  const params = useParams();
  const selectedResult = results.find(
    (song) => `${song.trackId}` === `${params.trackId}`
  );
  const audio = new Audio(selectedResult.previewUrl);

  return (
    <div className="player">
      <Preview selectedResult={selectedResult} />
      <footer>
        <div />
        <Actions audio={audio} />
        <Social />
      </footer>
    </div>
  );
};

export default Player;
