// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import springLogo from './assets/tech_logo/spring.png';
import jspLogo from './assets/tech_logo/jsp.png';
import jdbcLogo from './assets/tech_logo/jdbc.jpeg';
import servletLogo from './assets/tech_logo/servlets.png';
import mavenLogo from './assets/tech_logo/Maven.png';
import gradleLogo from './assets/tech_logo/gradle.png';
import junitLogo from './assets/tech_logo/Junit.png';
import msexcelLogo from './assets/tech_logo/MSExcel.png';
import eclipseLogo from './assets/tech_logo/eclipse.png';
import netbeansLogo from './assets/tech_logo/Netbeans.jpeg';
import mockitoLogo from './assets/tech_logo/mockito.png';

//databse section logo's
import oracleLogo from './assets/tech_logo/oracle.png';
import sqlLogo from './assets/tech_logo/sql.png';

// Education Section Logo's
import bdsLogo from './assets/education_logo/bds.jpeg';
import mietLogo from './assets/education_logo/miet.png';

// // Project Section Logo's
import electronicPortal from './assets/work_logo/electronicPortal.png';
import todoLogo from './assets/work_logo/to-do.png';
import serverlessLogo from './assets/work_logo/serverless.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring', logo: springLogo },
      { name: 'Springboot', logo: springbootLogo },
      { name: 'JSP', logo: jspLogo },
      { name: 'Servlet', logo: servletLogo },
      { name: 'JDBC', logo: jdbcLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Basic Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Eclipse', logo: eclipseLogo },
      { name: 'NetBeans', logo: netbeansLogo },
      { name: 'Junit', logo: junitLogo },
      { name: 'MS Excel', logo: msexcelLogo },
      { name: 'Maven', logo: mavenLogo },
      { name: 'Gradle', logo: gradleLogo },
      { name: 'Mockito', logo: mockitoLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'Oracle', logo: oracleLogo },
      { name: 'SQL', logo: sqlLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
];

  export const education = [
    {
      id: 0,
      img: mietLogo,
      school: "MIET, Meerut",
      date: "Nov 2020 - Aug 2024",
      grade: "75%",
      desc: "I completed my Bachelor's degree in Computer Science from MIET Institue of Engineering and Technology, Meerut. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at my College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 1,
      img: bdsLogo,
      school: "BDS International School, Meerut",
      date: "Apr 2018 - March 2020",
      grade: "79%",
      desc: "I completed my class 12 education from BDS International School, Meerut, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Online Electronic Portal",
      description:
        "Developed a full-stack Product Management Portal using JSP, Servlets, JDBC, and MVC with secure admin login and session management. Built optimized CRUD operations for 100+ products, improving DB response time by 25%. Designed a responsive UI using HTML, CSS, and JavaScript, reducing page-load issues by 30%, and implemented input validation, role-based access control, and robust error handling for higher system stability.",
      image: electronicPortal,
      tags: ["Java","JDBC","Servlet","JSP","HTML", "CSS", "JavaScript"],
      github: "https://github.com/AYUSH54285/FULL-STACK-JAVA/tree/master/JAVA/OnlineElectronicPortal",
      webapp: "",
    },
    {
      id: 1,
      title: "To-do WebApp",
      description:
        "I developed a fully responsive To-Do List web application using HTML, CSS (Bootstrap 5), and JavaScript, integrating the Dummy JSON API to simulate real-time CRUD operations for managing over 200 tasks. The application includes features such as client-side search, date filtering, pagination, and offline data persistence through Local Storage, improving task retrieval speed and overall user efficiency by 35%. To enhance the user experience, I incorporated loading indicators, error states, form validation, and smooth UI interactions, which collectively reduced the bounce rate during testing by 20%.",
      image: todoLogo,
      tags: ["HTML", "CSS", "JavaScript","Bootstrap","API"],
      github: "https://github.com/AYUSH54285/TODO-WEB-APP/tree/main",
      webapp: "https://todo-web-app2025.netlify.app/",
    },
    {
      id: 2,
      title: "Serverless Web Application",
      description:
        "I developed a scalable serverless web application using AWS Lambda, S3, CloudFront, Route 53, and DynamoDB, enabling fully automated backend workflows with 99.9% uptime. The cloud architecture was designed to be cost-efficient and highly available, with global content delivery through CloudFront, reducing latency by 40% for distributed users. I also implemented AWS CloudWatch dashboards and alerting systems to monitor application activity, track user visits, and optimize system performance, resulting in a 50% improvement in operational visibility.",
      image: serverlessLogo,
      tags: ["AWS Lambda","DynamoDB","S3", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AYUSH54285/Serverless_Web_Application_AWS_Project",
      webapp: "",
    },
  ];  

