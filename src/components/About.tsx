import "./styles.css";
import { useState } from "react";
import aboutData from "../json/AboutData.json";

export const About = () => {
  const [activeLinkStr, setActiveLinkStr] = useState("Skills");

  const tabLinksArr: string[] = [
    "Skills",
    "Experience",
    "Education",
    "Certifications",
  ];

  const openTab = (data: string) => {
    setActiveLinkStr(data);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <h1 className="sub-title">About Me</h1>
            <img src="./images/user.jpg" alt="Namit Gupta" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              I'm a Computer Science 2023 Graduate from VIT University, Vellore.
              <br />
              Currently working as a Software Engineer at Qualcomm.
            </p>
            <div className="tab-titles">
              {tabLinksArr.map((data) => {
                return (
                  <p
                    className={
                      activeLinkStr === data
                        ? "tab-links active-link"
                        : "tab-links"
                    }
                    onClick={() => {
                      openTab(data);
                    }}
                    key={data}
                  >
                    {data}
                  </p>
                );
              })}
            </div>
            {aboutData.map((data) => {
              return (
                <div
                  className={
                    data.id === activeLinkStr
                      ? "tab-contents active-tab"
                      : "tab-contents"
                  }
                  id={data.id}
                  key={data.id}
                >
                  <ul>
                    {data.value.map((data2) => {
                      return (
                        <li key={data2.span}>
                          <span>{data2.span}</span>
                          <br />
                          {data2.value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
