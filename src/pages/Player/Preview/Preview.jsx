const Preview = ({ selectedResult }) => {
  return (
    selectedResult && (
      <div className="player-preview">
        <img
          className="player-preview__image"
          src={selectedResult.artworkUrl100}
          key={selectedResult.trackId}
          alt={selectedResult.trackName}
        />
        <h1 className="player-preview__trackName">
          {selectedResult.trackName}
        </h1>
        <h2>{selectedResult.artistName}</h2>
      </div>
    )
  );
};

export default Preview;
