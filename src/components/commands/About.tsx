import {
  AboutWrapper,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Diptayan Jash</HighlightSpan>!
      </p>
      <p>
        Greetings! I'm Diptayan, a robotics aficionado currently pursuing a
        Computer Science & Engineering at SRM University. My journey is a
        captivating blend of technology and passion. From delving deep into
        microcontrollers by Texas Instruments, to seamlessly implementing MQTT
        protocols, and creating dynamic web applications using Flask and React,
        I thrive in the realm of embedded systems and web development. 
        <br />
        <br />
        Beyond the tech world, I'm an ardent foodie, avid gamer, and a cinema
        enthusiast. Join me on this exciting exploration where innovation meets
        creativity, all on my captivating portfolio website.
      </p>
    </AboutWrapper>
  );
};

export default About;
