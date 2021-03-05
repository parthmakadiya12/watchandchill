import ReactPlayer from "react-player/youtube";

export function YTPlayer({ url, muted, setReady, volume }) {
  return (
    <div className="container">
      <div className="videoWrapper">
        <ReactPlayer
          className="player"
          url={url}
          muted={muted}
          volume={volume}
          onPlay={() => setReady(false)}
          onStart={() => setReady(false)}
          onBuffer={() => setReady(true)}
          onClickPreview={() => console.log("click preview")}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                disablekb: 1,
                showInfo: 0,
                controls: 0,
                playinline: 1,
                rel: 0,
              },
              attributes: {
                preload: "none",
              },
            },
          }}
          controls={false}
          playing={true}
          autoPlay={true}
        ></ReactPlayer>
      </div>
    </div>
  );
}
