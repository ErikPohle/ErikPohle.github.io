import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import Skills from "./skills/Skills";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";
import { educationInfo } from "../portfolio";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: true,
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: true });
  }
  changeTheme = () => {
    this.setState({ isDark: true });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Greeting />
          <Education />
          <Skills />
          <WorkExperience />
          <StackProgress />
          <StartupProject />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
