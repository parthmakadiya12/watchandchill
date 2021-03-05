import { useCallback, useEffect, useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import pause from "../assets/pause.svg";
import play from "../assets/play.svg";
import forward from "../assets/forward.svg";
import backward from "../assets/backward.svg";
import { getRandom } from "./utils";
import data from "../assets/radio_YT_data.json";

export function Radio({ city }) {
  const [isPaused, setIsPaused] = useState(true);
  const [radioUrls, setRadioUrls] = useState([]);
  const [volume, changeVolume] = useState(0.3);
  const [currentRadioUrl, setCurrentRadioUrl] = useState(
    "https://n03.radiojar.com/2p37c9au5qwtv?rj-ttl=5&rj-tok=AAABccOjvQMAtGP3FYpKeY27kA"
  );
  const ref = useRef();

  useEffect(() => {
    const cityList = Object.keys(data);
    cityList.map((i) => {
      if (i === city) {
        const urls = data[city].urls;
        setRadioUrls(urls);
        const url = urls[getRandom(0, urls.length - 1)];
        setCurrentRadioUrl(url);
      }
      return false;
    });
  }, [city]);

  const onPausePlay = useCallback(() => {
    setIsPaused(!isPaused);
  }, [isPaused]);

  const changeStation = (type) => {
    const index = radioUrls.indexOf(currentRadioUrl);
    if (type === "-") {
      const possibleIndex = index > 0 ? index - 1 : radioUrls.length - 1;
      setCurrentRadioUrl(radioUrls[possibleIndex]);
    } else {
      const possibleIndex = index < radioUrls.length - 1 ? index + 1 : 0;
      setCurrentRadioUrl(radioUrls[possibleIndex]);
    }
  };

  return (
    <div className="radioContainer componentContainer">
      <span className="titleHeader audioTitle">Radio Player</span>
      {isPaused ? (
        ""
      ) : (
        <ReactAudioPlayer
          className="hidden"
          volume={volume}
          src={currentRadioUrl}
          autoPlay
          allow="autoplay"
          controls
          ref={ref}
          muted={false}
        />
      )}
      <div className="controlWrapper">
        <img
          onClick={() => changeStation("-")}
          className="audioControlItem"
          src={backward}
          alt="backward"
        />
        <img
          onClick={() => setIsPaused(!isPaused) && onPausePlay()}
          className="audioControlItem"
          src={isPaused ? play : pause}
          alt="pause"
        />
        <img
          onClick={() => changeStation("+")}
          className="audioControlItem"
          src={forward}
          alt="forward"
        />
      </div>
      <input
        type="range"
        className="range"
        onChange={(e) => changeVolume(e.target.value / 100)}
        min="0"
        max="100"
      />
    </div>
  );
}
