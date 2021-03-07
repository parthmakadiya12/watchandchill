import "./App.css";
import "./Components/components.css";
import { useState } from "react";
import { Spinner } from "./Components/Spinner";
import { YTPlayer } from "./Components/YTPlayer";
import { SideControl } from "./Components/SideControl";

function App() {
  const [ready, setReady] = useState(true);
  const [muted] = useState(true);
  const [url, setYtUrl] = useState(
    "https://www.youtube.com/watch?v=7HaJArMDKgI"
  );
  return (
    <div className="App">
      <Spinner play={ready} />
      <YTPlayer url={url} muted={muted} setReady={setReady} volume={0.4} />
      <SideControl setYtUrl={setYtUrl} ytUrl={url} />
      <div className="badge">
        Please watch this on desktop for better experience
      </div>
    </div>
  );
}

export default App;
