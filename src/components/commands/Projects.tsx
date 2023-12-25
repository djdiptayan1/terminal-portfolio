import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "LingoFlow",
    desc: "English to Hindi translator powered by advanced Seq2Seq and NLP technology, championing privacy in language translation. Recognized 2nd in the Smart India Hackathon for innovation and expertise.",
    url: "https://github.com/djdiptayan1/Smart_India_Hackathon",
  },
  {
    id: 2,
    title: "Chatter",
    desc: "Revolutionize global connections: my Java-powered app offers lightning-fast chats, history preservation, and a sleek interface. Redefining interaction on a global scale!",
    url: "https://github.com/djdiptayan1/Chat_Application",
  },
  {
    id: 3,
    title: "Altium Workshop",
    desc: "Created a seamless Altium Workshop registration platform using React.js and Firebase for real-time data management, highlighting expertise in modern web app development and secure authentication.",
    url: "https://altium.djdiptayan.in/",
  },
  {
    id: 4,
    title: "Gemini",
    desc: "Swift app for intuitive Gemini Pro chat, powered by Google's language generation for interactive conversations.",
    url: "https://github.com/djdiptayan1/Gemini",
  },
];

export default Projects;
