import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants/colors";
import Text from "../../components/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faSpotify,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { StyledComponentProps, SvgIcon } from "@mui/material";
import { RocketLaunch } from "@mui/icons-material";
import Scroll, { Link } from "react-scroll";

interface SocialMediaBoxProps extends StyledComponentProps {
  transformedColor: string;
}

const FooterContainer = styled("footer")({
  backgroundColor: colors.backgroundGrey,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "15%",
  padding: "24px 0",
});

const LinkContent = styled(`div`)({
  display: "flex",
  alignItems: "center",
  marginBottom: "12px",
  height: "38px",
});

const SocialMediaBox = styled("a")<SocialMediaBoxProps>((
  { transformedColor },
) => ({
  width: "38px",
  height: "38px",
  backgroundColor: colors.socialButtons,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  margin: "0 3px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
    backgroundColor: transformedColor,
  },
}));

const Footer: React.FC = () => {
  const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <LinkContent>
        <SocialMediaBox
          transformedColor={colors.facebook}
          href="https://www.facebook.com/jrcorazza1/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} color="white" size="lg" />
        </SocialMediaBox>
        <SocialMediaBox
          transformedColor={colors.twitter}
          href="https://twitter.com"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} color="white" size="lg" />
        </SocialMediaBox>
        <SocialMediaBox
          transformedColor={colors.linkedin}
          href="https://www.linkedin.com/in/junior-corazza"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} color="white" size="lg" />
        </SocialMediaBox>
        <SocialMediaBox
          transformedColor={colors.github}
          href="https://twitter.com"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} color="white" size="lg" />
        </SocialMediaBox>
        <SocialMediaBox
          transformedColor={colors.instagram}
          href="https://twitter.com"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
        </SocialMediaBox>
        <SocialMediaBox
          transformedColor={colors.whatsapp}
          href="https://www.instagram.com/jcorazzaa/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faWhatsapp} color="white" size="lg" />
        </SocialMediaBox>
        <SocialMediaBox
          transformedColor={colors.spotify}
          href="https://twitter.com"
          target="_blank"
        >
          <FontAwesomeIcon icon={faSpotify} color="white" size="lg" />
        </SocialMediaBox>
      </LinkContent>

      <Link
        smooth={true}
        duration={1500}
        delay={500}
        to={""}
        onClick={scrollToTop}
        color={colors.textLight}
      >
        <SvgIcon sx={{ fontSize: "48px", fill:colors.textLight }} component={RocketLaunch} />
      </Link>
      <Text marginBottom={"4px"} color={colors.textLight} fontSize={"10px"}>
        Bring me to the top!
      </Text>

      <Text color={colors.textLight} fontWeight={700} fontSize={"15px"}>
        Copyright 2023
      </Text>
      <Text color={colors.textLight} fontSize={"10px"}>
        Designed by Emma Corazza
      </Text>
      <Text color={colors.textLight} fontSize={"10px"}>
        Made by Junior Corazza
      </Text>
    </FooterContainer>
  );
};

export default Footer;
