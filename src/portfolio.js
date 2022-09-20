
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Erik Pohle",
  title: "Hi, I'm Erik",

  // 
  subTitle: "I'm a passionate software developer with experience in building web applications with JavaScript / Vue.JS / React / Nodejs and some other cool libraries and frameworks.",
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
  title: "Skills",
  subTitle: "",
  skills: [
    "Experienced in both frontend and backend development.",
    "Capable in developing high-end, scalable web applications.",
    "Ability to perform integration of third party services such as AWS, Azure, Kubernetes, Docker."
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      desc: "GPA: 3.6 - Major GPA: 3.8",
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
      progressPercentage: "85%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ]
};

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Cloud Systems and Solutions Software Engineer",
      company: "Seagate",
      companylogo: require("./assets/images/seagate.png"),
      date: "June 2021 – September 2022",
      desc: "",
      descBullets: [
        "Developed telemetry collection service that enabled data management through common interfaces such as S3 (minIO & AWS) and Kafka (Azure).",
        "Defined REST endpoints for providing latest firmware updates in secure and extensible methods.",
        "Worked collaboratively across teams to deliver a deployment model for existing services to receive updates with no down time.",
        "Helped perform ScrumMaster duties including mediating between engineers, stakeholders, and leadership to develop quality work that complied with changing requirements."
      ]
    },
    {
      role: "Cloud Systems and Solutions Part Time",
      company: "Seagate",
      companylogo: require("./assets/images/seagate.png"),
      date: "August 2020 – April 2021",
      desc: "",
      descBullets: [
        "Continue to work on the Cloud Team to enhance device simulations for testing, development, and sales purposes.",
        "Integrating the device simulations app with the testing suite.",
        "Improving overall test coverage and infrastructure"
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
