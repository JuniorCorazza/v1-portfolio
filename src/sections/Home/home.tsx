import React from "react";
import { Container, IconButton, styled, SvgIcon } from "@mui/material";
import HomeImage from "../../constants/images/welcome.png";
import Text from "../../components/text";
import { colors } from "../../constants/colors";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useIsMobile } from "../../hooks/isMobile";

const HomeSection = styled("section")({
  backgroundImage: `url('${HomeImage}')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  minHeight: "75vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
});

const RowsContainer = styled("div")(({ isMobile }: { isMobile: boolean }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: isMobile ? "center" : "flex-end",
}));

const FirstRow = styled(Text)({
  color: colors.textLight,
  textAlign: "center",
});

const SecondRow = styled(Text)({
  fontFamily: "Abhaya Libre",
  color: colors.textLight,
  textAlign: "center",
});
const ButtonContainer = styled("div")({
  position: "absolute",
  bottom: "24px",
  left: "50%",
  transform: "translateX(-50%)",
});

const ArrowDownButton = styled(IconButton)({
  color: colors.textLight,
  transition: `color 0.5s`,
  "&:hover": {
    backgroundColor: "transparent",
    color: colors.textDark,
  },
});

const Home: React.FC = () => {


  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <HomeSection id="home">
      <Container>
        <RowsContainer isMobile={isMobile}>
          <FirstRow sx={{ fontSize: isMobile ? "48px" : "100px" }}>
            FULLSTACK DEVELOPER
          </FirstRow>
          <SecondRow sx={{ fontSize: isMobile ? "24px" : "50px" }}>
            JUNIOR CORAZZA
          </SecondRow>
        </RowsContainer>
      </Container>
      <ButtonContainer>
        <ArrowDownButton disableRipple onClick={scrollToAbout}>
          <SvgIcon sx={{ fontSize: "48px" }} component={KeyboardArrowDown} />
        </ArrowDownButton>
      </ButtonContainer>
    </HomeSection>
  );
};

export default Home;
