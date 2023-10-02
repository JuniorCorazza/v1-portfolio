import React from "react";
import { styled } from "@mui/system";
import Text from "../../components/text";
import Section from "../../components/Section";
import jsLogo from "../../constants/images/js.png";
import tsLogo from "../../constants/images/ts.png";
import cssLogo from "../../constants/images/css.png";
import htmlLogo from "../../constants/images/html.png";
import nodejsLogo from "../../constants/images/nodejs.png";
import postgresLogo from "../../constants/images/postgres.png";
import reactLogo from "../../constants/images/react.png";
import githubLogo from "../../constants/images/githublogo.png";
import gcpLogo from "../../constants/images/gcp.png";
import terraformLogo from "../../constants/images/terraform.png";
import Tooltip from "@mui/material/Tooltip";
import { colors } from "../../constants/colors";
import { useIsMobile } from "../../hooks/isMobile";

const CenteredContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0px 64px",
});

const LogoGrid = styled("div")(({ isMobile }: { isMobile: boolean }) => ({
  display: "grid",
  gap: "16px",
  justifyContent: "center",
  alignItems: "center",
  gridTemplateColumns: isMobile ? "repeat(auto-fill, minmax(calc(50% - 8px), 1fr))" : "repeat(auto-fill, minmax(90px, 1fr))", 
  padding: "0 8px",
}));

const Logo = styled("img")(({ isMobile }: { isMobile: boolean }) => ({
  width: isMobile ? "80%" : "100%",
  height: "auto",
  filter: "grayscale(100%)",
  transition: "filter 0.5s ease-in-out",
  "&:hover": {
    filter: "none",
  },
}));
const TooltipContent = styled("div")({
  color: colors.white,
  padding: "0 4px",
  fontSize: "14px",
  fontFamily: "Roboto slab",
});

const Experience: React.FC = () => {
  const isMobile = useIsMobile();

  const logos = [
    { src: jsLogo, tooltip: "JavaScript" },
    { src: tsLogo, tooltip: "TypeScript" },
    { src: cssLogo, tooltip: "CSS" },
    { src: htmlLogo, tooltip: "HTML" },
    { src: nodejsLogo, tooltip: "NodeJs" },
    { src: postgresLogo, tooltip: "PostGres" },
    { src: reactLogo, tooltip: "React & React Native" },
    { src: githubLogo, tooltip: "GitHub" },
    { src: gcpLogo, tooltip: "Google Cloud Platform" },
    { src: terraformLogo, tooltip: "Terraform" },
  ];

  return (
    <Section id="experience" color="silver">
      <Text
        fontFamily="Abhaya Libre"
        fontSize={45}
        style={{ margin: "32px 0" }}
      >
        SOME TECHNIQUES I HAVE WORKED WITH
      </Text>
      <CenteredContainer>
        <LogoGrid isMobile={isMobile}>
          {logos.map((logo, index) => (
            <Tooltip
              key={index}
              title={<TooltipContent>{logo.tooltip}</TooltipContent>}
              arrow
            >
              <Logo key={index} src={logo.src} alt={`Logo ${index + 1}`} isMobile={isMobile} />
            </Tooltip>
          ))}
        </LogoGrid>
      </CenteredContainer>
    </Section>
  );
};

export default Experience;
