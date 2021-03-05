import blog from "../assets/blog.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";

export function Social() {
  return (
    <div className="socialIconContainer">
      <a
        target="_blank"
        without
        rel="noreferrer"
        href="https://www.linkedin.com/in/parthmakadiya007/"
      >
        <img className="socialIcon" src={linkedin} alt="Linkedin" />
      </a>
      <a
        target="_blank"
        without
        rel="noreferrer"
        href="https://github.com/parthmakadiya12"
      >
        <img className="socialIcon" src={github} alt="Github" />
      </a>
      <a target="_blank" without rel="noreferrer" href="http://blog.resumo.in/">
        <img className="socialIcon" src={blog} alt="Website" />
      </a>
      <a
        target="_blank"
        without
        rel="noreferrer"
        href="https://fb.me/parthmakadiya007"
      >
        <img className="socialIcon" src={facebook} alt="facebook" />
      </a>
    </div>
  );
}
