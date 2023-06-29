import "./styles.css";
// import { Nav } from "./Nav";
import { useState } from "react";

export const Nav = () => {
  const [rightStyleValue, setRightStyleValue] = useState("-200px");

  const navArr: { key: string; value: string }[] = [
    { key: "#header", value: "Home" },
    { key: "#about", value: "About" },
    { key: "#portfolio", value: "Portfolio" },
    { key: "#services", value: "Services" },
    { key: "#contact", value: "Contact" },
  ];

  const closeMenu = () => {
    setRightStyleValue("-200px");
  };
  const openMenu = () => {
    setRightStyleValue("0");
  };

  return (
    <nav>
      <img src="./images/logo.png" className="logo" alt="NG Logo"/>
      <ul id="sideMenu" style={{ right: rightStyleValue }}>
        {navArr.map((obj) => {
          return (
            <li key={obj.key}>
              <a href={obj.key}>{obj.value}</a>
            </li>
          );
        })}
        <i className="fas fa-times" onClick={closeMenu}></i>
      </ul>
      <i className="fas fa-bars" onClick={openMenu}></i>
    </nav>
  );
};
