import { useContext, useState, useCallback } from "react";
import { YtControl } from "../App";

export function VideoControl() {
  const ytControl = useContext(YtControl);
  const [volume, setVolume] = useState(0);
  const [speed, setSpeed] = useState(1.0);

  const setVideoControl = useCallback(
    (type, value) => {
      if (type === "volume") {
        setVolume(value);
      } else if ((type = "speed")) {
        setSpeed(value);
      }
      ytControl(type, value);
    },
    [ytControl]
  );

  return (
    <div className="componentContainer videoControl">
      <span className="titleHeader">Video Controls</span>
      <div className="controlWrapper">
        <div
          className={`controlBtn ${speed === 1 ? "active" : ""}`}
          onClick={() => setVideoControl("speed", 1)}
        >
          1x
        </div>
        <div
          className={`controlBtn ${speed === 1.5 ? "active" : ""}`}
          onClick={() => setVideoControl("speed", 1.5)}
        >
          1.5x
        </div>
        <div
          className={`controlBtn ${volume === 0 ? "active" : ""}`}
          onClick={() => setVideoControl("volume", 0)}
        >
          Mute
        </div>
        <div
          className={`controlBtn ${volume === 0.01 ? "active" : ""}`}
          onClick={() => setVideoControl("volume", 0.01)}
        >
          Background Sound
        </div>
      </div>
    </div>
  );
}
