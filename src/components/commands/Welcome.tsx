import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
  _____   _         _                              
  |  __ \\ (_)       | |                             
  | |  | | _  _ __  | |_   __ _  _   _   __ _  _ __  
  | |  | || || '_ \\ | __| / _\` || | | | / _\` || '_ \\ 
  | |__| || || |_) || |_ | (_| || |_| || (_| || | | |
  |_____/ |_|| .__/  \\__| \\__,_| \\__, | \\__,_||_| |_|
             | |                 __/ |              
             |_|                |___/                               
  `}
        </PreName>

        <PreWrapper>
          <PreNameMobile>
            {`                              
____  _     _                   
|    \|_|___| |_ ___ _ _ ___ ___ 
|  |  | | . |  _| .'| | | .'|   |
|____/|_|  _|_| |__,|_  |__,|_|_|
        |_|         |___|        

          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.0.0)</div>

        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
