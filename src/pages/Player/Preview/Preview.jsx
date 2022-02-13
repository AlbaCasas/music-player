const Preview = ({ selectedResult }) => {
  return (
    <div className="player-preview">
      <div>
        <img
          src={selectedResult.artworkUrl60}
          key={selectedResult.trackId}
          alt={selectedResult.trackName}
        />
        <h1>{selectedResult.trackName}</h1>
        <h2>{selectedResult.artistName}</h2>
      </div>
    </div>
  );
};

export default Preview;
