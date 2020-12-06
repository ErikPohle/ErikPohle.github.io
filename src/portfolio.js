
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Erik Pohle",
  title: "Hi all, I'm Erik",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://docs.google.com/document/d/1tt10gcBBZxWYzK72jyyyZmqSKYTKGQF5JftwbCpMq8s/edit?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/ErikPohle",
  linkedin: "https://www.linkedin.com/in/erik-pohle/",
  gmail: "erik.m.pohle@gmail.com"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

const educationInfo = {
  viewEducation: true,
  schools: [
    {
      schoolName: "University of Colorado at Boulder",
      logo: require("./assets/images/cuboulder.jpg"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "September 2017 - May 2021",
      desc: "GPA: 3.5",
      descBullets: [
      ]
    }
  ]
}

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ]
};

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Cloud Systems and Solutions Part Time",
      company: "Seagate",
      companylogo: require("./assets/images/seagate.png"),
      date: "August 2020 – Present",
      desc: "",
      descBullets: [
        "Continue to work on the Cloud Team to enhance device simulations for testing, development, and sales purposes.",
        "Integrating the device simulations app with the testing suite."
      ]
    },
    {
      role: "Cloud Systems and Solutions Intern",
      company: "Seagate",
      companylogo: require("./assets/images/seagate.png"),
      date: "May 2020 – August 2020",
      desc: "",
      descBullets: [
        "Worked on the Cloud Team to enhance device simulations for testing, development, and sales purposes.",
        "Created a web app from the ground up with Vue JS, Express, and Node.js."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Windward",
      companylogo: require("./assets/images/windward.png"),
      date: "Sept 2018 – Apr 2020",
      desc: "",
      descBullets: [
        "Use JIRA, Visual Studio Online, Git, and other tools for software development.",
        "As a developer, my work includes bug fixes, code reviews, git-management, occasional QA test work, and creating new features/improvements."
      ]
    },
  ]
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences};
