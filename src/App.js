import "./App.css";
import "./Components/components.css";
import React, { useState, useCallback } from "react";
import { Spinner } from "./Components/Spinner";
import { YTPlayer } from "./Components/YTPlayer";
import { SideControl } from "./Components/SideControl";
export const YtControl = React.createContext(null);

function App() {
  const [ready, setReady] = useState(true);
  const [speed, setYtSpeed] = useState(1);
  const [volume, setVolume] = useState(0);
  const [url, setYtUrl] = useState(
    "https://www.youtube.com/watch?v=7HaJArMDKgI"
  );

  const ytControl = useCallback((type, value) => {
    if (type === "volume") {
      setVolume(value);
    } else if ((type = "speed")) {
      setYtSpeed(value);
    }
  }, []);

  return (
    <div className="App">
      <Spinner play={ready} />
      <YTPlayer
        url={url}
        setReady={setReady}
        volume={volume}
        playbackRate={speed}
      />
      <YtControl.Provider value={ytControl}>
        <SideControl ytControl={ytControl} setYtUrl={setYtUrl} ytUrl={url} />
      </YtControl.Provider>
      <div className="badge">
        Please watch this on desktop for better experience
      </div>
    </div>
  );
}

export default App;
