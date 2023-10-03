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
  maxWidth: "auto",
  maxHeight: "60px",
});

const HeaderLinks = styled("div")({
  display: "flex",
});

const HeaderLink = styled(Link)({
  display: "flex",
  color: colors.white,
  fontSize: "20px",
  fontFamily: "Lato, sans-serif",
  fontWeight: 200,
  height: "60px",
  alignItems: "center",
  padding: "0 24px",
});

const HamburgerMenu = styled("div")({
  alignItems: "center",
  cursor: "pointer",
  display: "block",
});

const MobileMenu = styled("div")(
  (
    { isMenuOpen }: {
      isMenuOpen: boolean;
    },
  ) => ({
    position: "fixed",
    top: "60px",
    right: 0,
    width: "100%",
    height: isMenuOpen ? "auto" : 0,
    borderTop: isMenuOpen ? "0.1px solid white" : "none",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1000,
  }),
);

const MobileMenuLink = styled(Link)({
  padding: "12px",
  textAlign: "center",
  backgroundColor: colors.backgroundGrey,
  color: colors.white,
  width: "100%",
  textDecoration: "none",
  fontSize: "20px",
  fontFamily: "Lato, sans-serif",
  fontWeight: 200,
});

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              >
                <MobileMenuLink
                  to="about"
                  duration={500}
                  offset={-50}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  onClick={closeMenu}
                  activeStyle={{
                    backgroundColor: colors.headerActive,
                  }}
                >
                  ABOUT
                </MobileMenuLink>
                <MobileMenuLink
                  to="experience"
                  duration={500}
                  offset={-50}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  onClick={closeMenu}
                  activeStyle={{ backgroundColor: colors.headerActive }}
                >
                  EXPERIENCE
                </MobileMenuLink>
                <MobileMenuLink
                  to="work"
                  duration={500}
                  offset={-50}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  onClick={closeMenu}
                  activeStyle={{ backgroundColor: colors.headerActive }}
                >
                  WORK
                </MobileMenuLink>
                <MobileMenuLink
                  to="contact"
                  duration={500}
                  offset={-50}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  onClick={closeMenu}
                  activeStyle={{ backgroundColor: colors.headerActive }}
                >
                  CONTACT
                </MobileMenuLink>
              </MobileMenu>
            </>
          )
          : (
            <HeaderLinks>
              <HeaderLink
                to="about"
                duration={500}
                offset={-50}
                spy={true}
                smooth={true}
                hashSpy={true}
                activeStyle={{
                  backgroundColor: colors.headerActive,
                }}
              >
                ABOUT
              </HeaderLink>
              <HeaderLink
                to="experience"
                duration={500}
                offset={-50}
                spy={true}
                smooth={true}
                hashSpy={true}
                activeStyle={{ backgroundColor: colors.headerActive }}
              >
                EXPERIENCE
              </HeaderLink>
              <HeaderLink
                to="work"
                duration={500}
                offset={-50}
                spy={true}
                smooth={true}
                hashSpy={true}
                activeStyle={{ backgroundColor: colors.headerActive }}
              >
                WORK
              </HeaderLink>
              <HeaderLink
                to="contact"
                duration={500}
                offset={-50}
                spy={true}
                smooth={true}
                hashSpy={true}
                activeStyle={{ backgroundColor: colors.headerActive }}
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
