import "./styles.css";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <Nav />
        <div className="row">
          <div className="header-text">
            <p>Software Engineer</p>
            <h1>
              Hi, I'm <span>Namit</span>
              <br />
              from India.
            </h1>
          </div>
          <div className="header-col-1">
            <img src="./images/main_gif.webp" alt="GIF of working on computer."/>
          </div>
        </div>
      </div>
    </div>
  );
};
