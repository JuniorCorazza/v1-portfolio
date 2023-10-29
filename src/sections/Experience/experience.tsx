import React, { useState } from "react";
import { styled } from "@mui/system";
import Text from "@/components/text";
import Section from "@/components/Section";
import Tooltip from "@mui/material/Tooltip";
import { colors } from "@/constants/colors";
import { useIsMobile } from "@/hooks/isMobile";
import { TFunction } from "i18next";
import TechniqueBox from "@/components/TechniqueBox";
import jsLogo from "@/constants/images/js.png";
import tsLogo from "@/constants/images/ts.png";
import cssLogo from "@/constants/images/css.png";
import htmlLogo from "@/constants/images/html.png";
import nodejsLogo from "@/constants/images/nodejs.png";
import postgresLogo from "@/constants/images/postgres.png";
import reactLogo from "@/constants/images/react.png";
import githubLogo from "@/constants/images/github.png";
import gcpLogo from "@/constants/images/gcp.png";
import terraformLogo from "@/constants/images/terraform.png";
import npmLogo from "@/constants/images/npm.png";
import csharpLogo from "@/constants/images/csharp.png";
import cppLogo from "@/constants/images/cpp.png";
import bootstrapLogo from "@/constants/images/bootstrap.png";
import expoLogo from "@/constants/images/expo.png";
import postmanLogo from "@/constants/images/postman.png";
import gitLogo from "@/constants/images/git.png";
import vscodeLogo from "@/constants/images/vscode.png";
import jestLogo from "@/constants/images/jest.png";
import figmaLogo from "@/constants/images/figma.png";
import threejsLogo from "@/constants/images/threejs.png";
import firebaseLogo from "@/constants/images/firebase.png";
import dockerLogo from "@/constants/images/docker.png";
import mysqlLogo from "@/constants/images/mysql.png";
import pythonLogo from "@/constants/images/python.png";
import { Zoom } from "@mui/material";

const backEndLogos = [
  { src: nodejsLogo, tooltip: "NodeJs" },
  { src: postgresLogo, tooltip: "PostgreSQL" },
  { src: mysqlLogo, tooltip: "MySQL" },
  { src: terraformLogo, tooltip: "Terraform" },
];

const languageLogos = [
  { src: jsLogo, tooltip: "JavaScript" },
  { src: tsLogo, tooltip: "TypeScript" },
  { src: csharpLogo, tooltip: "C#" },
  { src: cppLogo, tooltip: "C++" },
  { src: pythonLogo, tooltip: "Python" },
];

const frontEndLogos = [
  { src: cssLogo, tooltip: "CSS" },
  { src: htmlLogo, tooltip: "HTML" },
  { src: reactLogo, tooltip: "React & React Native" },
  { src: expoLogo, tooltip: "Expo / Expo Go" },
  { src: bootstrapLogo, tooltip: "Bootstrap" },
  { src: threejsLogo, tooltip: "Three.js" },
  { src: firebaseLogo, tooltip: "Firebase" },
];

const devOpsLogos = [
  { src: githubLogo, tooltip: "GitHub" },
  { src: gitLogo, tooltip: "Git" },
  { src: gcpLogo, tooltip: "Google Cloud Platform" },
  { src: npmLogo, tooltip: "npm" },
  { src: dockerLogo, tooltip: "Docker" },
];

const toolsLogos = [
  { src: postmanLogo, tooltip: "Postman" },
  { src: vscodeLogo, tooltip: "Visual Studio Code" },
  { src: figmaLogo, tooltip: "Figma" },
];

const testingLogos = [
  { src: jestLogo, tooltip: "Jest" },
];

const MainContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const CenteredContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "16px",
  alignItems: "flex-start",
  width: "100%",
});

const LogoGrid = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
});

const Logo = styled("img")({
  width: "64px",
  filter: "grayscale(100%)",
  transition: "filter 0.5s ease-in-out",
  "&:hover": {
    filter: "none",
  },
  margin: "8px",
});

const TooltipContent = styled("div")({
  color: colors.white,
  padding: "0 4px",
  fontSize: "14px",
  fontFamily: "Abhaya Libre",
});

type ExperienceProps = {
  t: TFunction;
};

const Experience: React.FC<ExperienceProps> = ({ t }) => {
  const isMobile = useIsMobile();
  const [openLanguageLogos, setOpenLanguageLogos] = useState(
    Array(languageLogos.length).fill(false),
  );
  const [openBackEndLogos, setOpenBackEndLogos] = useState(
    Array(backEndLogos.length).fill(false),
  );
  const [openFrontEndLogos, setOpenFrontEndLogos] = useState(
    Array(frontEndLogos.length).fill(false),
  );
  const [openToolsLogos, setOpenToolsLogos] = useState(
    Array(toolsLogos.length).fill(false),
  );
  const [openDevOpsLogos, setOpenDevOpsLogos] = useState(
    Array(devOpsLogos.length).fill(false),
  );
  const [openTestingLogos, setOpenTestingLogos] = useState(
    Array(testingLogos.length).fill(false),
  );

  const handleTooltipToggle = (
    index: number,
    isOpen: boolean,
    logosType: string,
  ) => {
    if (logosType === "language") {
      const newOpen = [...openLanguageLogos];
      newOpen[index] = isOpen;
      setOpenLanguageLogos(newOpen);
    } else if (logosType === "frontEnd") {
      const newOpen = [...openFrontEndLogos];
      newOpen[index] = isOpen;
      setOpenFrontEndLogos(newOpen);
    } else if (logosType === "backEnd") {
      const newOpen = [...openBackEndLogos];
      newOpen[index] = isOpen;
      setOpenBackEndLogos(newOpen);
    } else if (logosType === "tools") {
      const newOpen = [...openToolsLogos];
      newOpen[index] = isOpen;
      setOpenToolsLogos(newOpen);
    } else if (logosType === "devOps") {
      const newOpen = [...openDevOpsLogos];
      newOpen[index] = isOpen;
      setOpenDevOpsLogos(newOpen);
    } else if (logosType === "testing") {
      const newOpen = [...openTestingLogos];
      newOpen[index] = isOpen;
      setOpenTestingLogos(newOpen);
    }
  };

  return (
    <Section
      id="experience"
      style={{
        marginBottom: isMobile ? "64px" : "128px",
      }}
    >
      <MainContainer>
        <Text
          fontFamily="Abhaya Libre"
          fontSize={isMobile ? 24 : 60}
          style={{ marginBottom: "32px", display: "flex" }}
        >
          {t("experience.title")}
        </Text>

        <CenteredContainer>
          <TechniqueBox title={t("experience.languages")} isMobile={isMobile}>
            <LogoGrid>
              {languageLogos.map((logo, index) => (
                <Tooltip
                  key={index}
                  title={<TooltipContent>{logo.tooltip}</TooltipContent>}
                  arrow
                  open={openLanguageLogos[index]}
                  onClose={() => {
                    handleTooltipToggle(index, false, "language");
                  }}
                  onOpen={() => {
                    !isMobile
                      ? handleTooltipToggle(index, true, "language")
                      : null;
                  }}
                  TransitionComponent={Zoom}
                  TransitionProps={{ timeout: 400 }}
                >
                  <Logo
                    key={index}
                    src={logo.src}
                    alt={`Logo ${index + 1}`}
                    onClick={() => {
                      isMobile
                        ? handleTooltipToggle(
                          index,
                          !openLanguageLogos[index],
                          "language",
                        )
                        : null;
                    }}
                  />
                </Tooltip>
              ))}
            </LogoGrid>
          </TechniqueBox>

          <TechniqueBox title={t("experience.frontEnd")} isMobile={isMobile}>
            <LogoGrid>
              {frontEndLogos.map((logo, index) => (
                <Tooltip
                  key={index}
                  title={<TooltipContent>{logo.tooltip}</TooltipContent>}
                  arrow
                  open={openFrontEndLogos[index]}
                  onClose={() => {
                    handleTooltipToggle(index, false, "frontEnd");
                  }}
                  onOpen={() => {
                    !isMobile
                      ? handleTooltipToggle(index, true, "frontEnd")
                      : null;
                  }}
                  TransitionComponent={Zoom}
                  TransitionProps={{ timeout: 400 }}
                >
                  <Logo
                    key={index}
                    src={logo.src}
                    alt={`Logo ${index + 1}`}
                    onClick={() => {
                      isMobile
                        ? handleTooltipToggle(
                          index,
                          !openFrontEndLogos[index],
                          "frontEnd",
                        )
                        : null;
                    }}
                  />
                </Tooltip>
              ))}
            </LogoGrid>
          </TechniqueBox>

          <TechniqueBox title={t("experience.devOps")} isMobile={isMobile}>
            <LogoGrid>
              {devOpsLogos.map((logo, index) => (
                <Tooltip
                  key={index}
                  title={<TooltipContent>{logo.tooltip}</TooltipContent>}
                  arrow
                  open={openDevOpsLogos[index]}
                  onClose={() => {
                    handleTooltipToggle(index, false, "devOps");
                  }}
                  onOpen={() => {
                    !isMobile
                      ? handleTooltipToggle(index, true, "devOps")
                      : null;
                  }}
                  TransitionComponent={Zoom}
                  TransitionProps={{ timeout: 400 }}
                >
                  <Logo
                    key={index}
                    src={logo.src}
                    alt={`Logo ${index + 1}`}
                    onClick={() => {
                      isMobile
                        ? handleTooltipToggle(
                          index,
                          !openDevOpsLogos[index],
                          "devOps",
                        )
                        : null;
                    }}
                  />
                </Tooltip>
              ))}
            </LogoGrid>
          </TechniqueBox>

          <TechniqueBox title={t("experience.tools")} isMobile={isMobile}>
            <LogoGrid>
              {toolsLogos.map((logo, index) => (
                <Tooltip
                  key={index}
                  title={<TooltipContent>{logo.tooltip}</TooltipContent>}
                  arrow
                  open={openToolsLogos[index]}
                  onClose={() => {
                    handleTooltipToggle(index, false, "tools");
                  }}
                  onOpen={() => {
                    !isMobile
                      ? handleTooltipToggle(index, true, "tools")
                      : null;
                  }}
                  TransitionComponent={Zoom}
                  TransitionProps={{ timeout: 400 }}
                >
                  <Logo
                    key={index}
                    src={logo.src}
                    alt={`Logo ${index + 1}`}
                    onClick={() => {
                      isMobile
                        ? handleTooltipToggle(
                          index,
                          !openToolsLogos[index],
                          "tools",
                        )
                        : null;
                    }}
                  />
                </Tooltip>
              ))}
            </LogoGrid>
          </TechniqueBox>

          <TechniqueBox title={t("experience.backEnd")} isMobile={isMobile}>
            <LogoGrid>
              {backEndLogos.map((logo, index) => (
                <Tooltip
                  key={index}
                  title={<TooltipContent>{logo.tooltip}</TooltipContent>}
                  arrow
                  open={openBackEndLogos[index]}
                  onClose={() => {
                    handleTooltipToggle(index, false, "backEnd");
                  }}
                  onOpen={() => {
                    !isMobile
                      ? handleTooltipToggle(index, true, "backEnd")
                      : null;
                  }}
                  TransitionComponent={Zoom}
                  TransitionProps={{ timeout: 400 }}
                >
                  <Logo
                    key={index}
                    src={logo.src}
                    alt={`Logo ${index + 1}`}
                    onClick={() => {
                      isMobile
                        ? handleTooltipToggle(
                          index,
                          !openBackEndLogos[index],
                          "backEnd",
                        )
                        : null;
                    }}
                  />
                </Tooltip>
              ))}
            </LogoGrid>
          </TechniqueBox>

          <TechniqueBox title={t("experience.testing")} isMobile={isMobile}>
            <LogoGrid>
              {testingLogos.map((logo, index) => (
                <Tooltip
                  key={index}
                  title={<TooltipContent>{logo.tooltip}</TooltipContent>}
                  arrow
                  open={openTestingLogos[index]}
                  onClose={() => {
                    handleTooltipToggle(index, false, "testing");
                  }}
                  onOpen={() => {
                    !isMobile
                      ? handleTooltipToggle(index, true, "testing")
                      : null;
                  }}
                  TransitionComponent={Zoom}
                  TransitionProps={{ timeout: 400 }}
                >
                  <Logo
                    key={index}
                    src={logo.src}
                    alt={`Logo ${index + 1}`}
                    onClick={() => {
                      isMobile
                        ? handleTooltipToggle(
                          index,
                          !openTestingLogos[index],
                          "testing",
                        )
                        : null;
                    }}
                  />
                </Tooltip>
              ))}
            </LogoGrid>
          </TechniqueBox>
        </CenteredContainer>
      </MainContainer>
    </Section>
  );
};

export default Experience;
