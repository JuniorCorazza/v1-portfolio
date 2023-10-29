import React from "react";
import { styled } from "@mui/system";
import { colors } from "@/constants/colors";
import Text from "@/components/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faSpotify,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { StyledComponentProps, SvgIcon } from "@mui/material";
import { RocketLaunch } from "@mui/icons-material";
import { animateScroll as scroll } from "react-scroll";
import { TFunction } from "i18next";
interface SocialMediaBoxProps extends StyledComponentProps {
  transformedColor: string;
}

const RocketContainer = styled("div")({
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  "&:hover .rotate-icon": {
    transform: "rotate(-45deg)",
  },
  "& .rotate-icon": {
    transition: "transform 0.7s ease-in-out",
  },
});

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

type FooterProps = {
  t: TFunction;
};

const Footer: React.FC<FooterProps> = ({ t }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
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
          transformedColor={colors.linkedin}
          href="https://www.linkedin.com/in/junior-corazza"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} color="white" size="lg" />
        </SocialMediaBox>
        <SocialMediaBox
          transformedColor={colors.github}
          href="https://github.com/JuniorCorazza"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} color="white" size="lg" />
        </SocialMediaBox>
        <SocialMediaBox
          transformedColor={colors.instagram}
          href="https://www.instagram.com/jcorazzaa/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
        </SocialMediaBox>
        <SocialMediaBox
          transformedColor={colors.whatsapp}
          href="https://wa.me/46707383386"
          target="_blank"
        >
          <FontAwesomeIcon icon={faWhatsapp} color="white" size="lg" />
        </SocialMediaBox>
        <SocialMediaBox
          transformedColor={colors.spotify}
          href="https://open.spotify.com/user/juncor"
          target="_blank"
        >
          <FontAwesomeIcon icon={faSpotify} color="white" size="lg" />
        </SocialMediaBox>
      </LinkContent>
      <RocketContainer onClick={scrollToTop}>
        <SvgIcon
          className="rotate-icon"
          sx={{
            paddingBottom: "8px",
            fontSize: "48px",
            fill: colors.textLight,
            cursor: "pointer",
          }}
          component={RocketLaunch}
        />
        <Text marginBottom={"4px"} color={colors.textLight} fontSize={"10px"}>
          {t("footer.toTheTop")}
        </Text>
      </RocketContainer>

      <Text color={colors.textLight} fontWeight={700} fontSize={"15px"}>
        Copyright 2023
      </Text>
      <a href="http://emmacorazza.se">
        <Text color={colors.textLight} fontSize={"10px"}>
          {t("footer.designedBy")}
        </Text>
      </a>
      <Text color={colors.textLight} fontSize={"10px"}>
        {t("footer.madeBy")}
      </Text>
    </FooterContainer>
  );
};

export default Footer;
