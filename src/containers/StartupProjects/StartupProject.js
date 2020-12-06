import React, { useContext } from "react";
import "./StartupProjects.css";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
          </p>
          <div className="startup-projects-main">
            <div className="startup-project-text">
            </div>
            <div className="startup-project-image"></div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
