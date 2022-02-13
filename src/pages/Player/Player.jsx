import { useParams } from "react-router-dom";
import Actions from "./Actions/Actions";
import Preview from "./Preview";
import Social from "./Social/Social";

const Player = ({ results }) => {
  const { trackId } = useParams();
  const selectedResult = results.find(
    (song) => `${song.trackId}` === `${trackId}`
  );

  return (
    <div className="player">
      {selectedResult && <Preview selectedResult={selectedResult} />}
      <footer>
        <div />
        <Actions />
        <Social />
      </footer>
    </div>
  );
};

export default Player;
