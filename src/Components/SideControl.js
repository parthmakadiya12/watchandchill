import { useEffect, useState } from "react";
import { Radio } from "./Radio";
import { Social } from "./Social";
import { getRandom } from "./utils";
import hide from "../assets/hide.svg";

import data from "../assets/radio_YT_data.json";
import { VideoCredits } from "./VideoCredits";

export function SideControl({ changeVolume, setYtUrl, ytUrl }) {
  const [city, setCity] = useState("New York");
  const [showHide, setShowHide] = useState(true);

  useEffect(() => {
    const cityList = Object.keys(data);
    const city = cityList[getRandom(0, cityList.length - 1)];
    setCity(city);
    setYtUrl(data[city].yt);
  }, [setYtUrl]);
  return (
    <>
      <img
        className="hideIcon"
        src={hide}
        alt="hide"
        onClick={() => setShowHide(!showHide)}
      />
      <div className={`controlContainer ${showHide ? "" : "hidden"}`}>
        <h1 className="header">Watch & Chill </h1>
        <div className="videoContainer componentContainer">
          <span className="titleHeader">List of Videos</span>
          <ul className="videolistContainer">
            {Object.keys(data).map((i, index) => (
              <li
                className={`videolistItem ${i === city && "activeItem"}`}
                key={`${i}_${index}`}
                value={i}
                onClick={(e) => setYtUrl(data[e.target.innerHTML].yt)}
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
        <Radio city={city} setCity={setCity} changeVolumeRange={changeVolume} />
        <Social />
        <VideoCredits url={ytUrl} />
      </div>
    </>
  );
}
