import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logoImage from "../constants/images/logo.png";
import { colors } from "../constants/colors";
import { useIsMobile } from "../hooks/isMobile";
import { Link } from "react-scroll";
import { useScrollSpy } from "../hooks/useScrollSpy";

const HeaderContent = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "opacity 0.6s",
});

const LogoLink = styled("a")({
  display: "flex",
  alignItems: "center",
});

const LogoImage = styled("img")({
  maxWidth: "100px",
  maxHeight: "60px",
  width: "auto",
  height: "auto",
});

const HeaderLinks = styled("div")({
  display: "flex",
  gap: "48px",
  flex: 1,
  justifyContent: "flex-end",
  marginRight: "48px",
});

const HeaderLink = styled(Link)(
  ({ isActive }: { isActive: boolean }) => ({
    color:  colors.white,
    textDecoration: "none",
    fontSize: "20px",
    fontFamily: "Lato, sans-serif",
    fontWeight: 200,
    backgroundColor: isActive ? "#000" : "transparent"
  }),
);

const HamburgerMenu = styled("div")({
  alignItems: "center",
  cursor: "pointer",
  display: "block",
});

const MobileMenu = styled("div")(
  (
    { isMenuOpen, backgroundColor }: {
      isMenuOpen: boolean;
      backgroundColor: string;
    },
  ) => ({
    position: "fixed",
    top: "60px",
    right: 0,
    width: "100%",
    height: isMenuOpen ? "auto" : 0,
    borderTop: isMenuOpen ? "0.1px solid white" : "none",
    paddingBottom: "8px",
    overflow: "hidden",
    backgroundColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1000,
    transition: "height 0.6s",
  }),
);

const MobileMenuLink = styled(Link)(
  ({ isActive }: { isActive: boolean }) => ({
    color:  colors.white,
    textDecoration: "none",
    fontSize: "20px",
    fontFamily: "Lato, sans-serif",
    fontWeight: 200,
    margin: "10px",

    backgroundColor: isActive ? "#000" : colors.white
  }),
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const targetIds = ["home", "about", "experience", "work", "contact"];
  const currentSection = useScrollSpy(targetIds, isMobile ? 0 : -60);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 90) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar
      style={{
        transition: "background-color 0.6s, height 0.6s",
        justifyContent: "center",
        backgroundColor: isMobile
          ? colors.backgroundGrey
          : isScrolled
          ? colors.backgroundGrey
          : "transparent",
        boxShadow: isScrolled ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        height: isMobile ? "60px" : isScrolled ? "60px" : "100px",
      }}
    >
      <HeaderContent>
        <LogoLink href="/">
          <LogoImage src={logoImage} alt="Logo" />
        </LogoLink>
        {isMobile
          ? (
            <>
              <HamburgerMenu onClick={toggleMenu}>
                <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
              </HamburgerMenu>
              <MobileMenu
                isMenuOpen={isMenuOpen}
                backgroundColor={colors.backgroundGrey}
              >
                <MobileMenuLink
                  to="about"
                  onClick={closeMenu}
                  isActive={currentSection === "about"}
                >
                  ABOUT
                </MobileMenuLink>
                <MobileMenuLink
                  to="experience"
                  onClick={closeMenu}
                  isActive={currentSection === "experience"}
                >
                  EXPERIENCE
                </MobileMenuLink>
                <MobileMenuLink
                  to="work"
                  onClick={closeMenu}
                  isActive={currentSection === "work"}
                >
                  WORK
                </MobileMenuLink>
                <MobileMenuLink
                  to="contact"
                  onClick={closeMenu}
                  isActive={currentSection === "contact"}
                >
                  CONTACT
                </MobileMenuLink>
              </MobileMenu>
            </>
          )
          : (
            <HeaderLinks>
              <HeaderLink
              smooth={true} 
              duration={500}
                to="about"
                isActive={currentSection === "about"}
              >
                ABOUT
              </HeaderLink>
              <HeaderLink
              smooth={true} 
              duration={500}
                to="experience"
                isActive={currentSection === "experience"}
              >
                EXPERIENCE
              </HeaderLink>
              <HeaderLink
              smooth={true} 
              duration={500}
                to="work"
                isActive={currentSection === "work"}
              >
                WORK
              </HeaderLink>
              <HeaderLink
              smooth={true} 
              duration={500}
                to="contact"
                isActive={currentSection === "contact"}
              >
                CONTACT
              </HeaderLink>
            </HeaderLinks>
          )}
      </HeaderContent>
    </AppBar>
  );
};

export default Header;
