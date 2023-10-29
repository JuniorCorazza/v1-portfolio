import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logoImage from "../constants/images/logo.png";
import { colors } from "../constants/colors";
import { useIsMobile } from "../hooks/isMobile";
import { animateScroll as scroll, Link } from "react-scroll";
import LanguageSelector from "../components/languageSelection";
import { TFunction } from "i18next";

const HeaderContent = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  transition: "opacity 0.6s",
});

const LogoImage = styled("img")({
  maxWidth: "auto",
  maxHeight: "60px",
  cursor: "pointer",
});

const HeaderLinks = styled("div")({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
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
    cursor: "pointer",
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

type HeaderProps = {
  t: TFunction;
};

const Header: React.FC<HeaderProps> = ({ t }) => {
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

  const handleLogoClick = () => {
    scroll.scrollToTop();
  };

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
        alignContent: "center",
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
        <LogoImage
          src={logoImage}
          alt="Logo"
          onClick={handleLogoClick}
        />
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
                  {t("header.about")}
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
                  {t("header.experience")}
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
                  {t("header.work")}
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
                  {t("header.contact")}
                </MobileMenuLink>
                <div
                  style={{
                    backgroundColor: colors.backgroundGrey,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    paddingBottom: "8px",
                  }}
                >
                  <LanguageSelector onLanguageClicked={closeMenu} />
                </div>
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
                {t("header.about")}
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
                {t("header.experience")}
              </HeaderLink>
              <HeaderLink
                to="work"
                duration={500}
                offset={-100}
                spy={true}
                smooth={true}
                hashSpy={true}
                activeStyle={{ backgroundColor: colors.headerActive }}
              >
                {t("header.work")}
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
                {t("header.contact")}
              </HeaderLink>
              <LanguageSelector />
            </HeaderLinks>
          )}
      </HeaderContent>
    </AppBar>
  );
};

export default Header;
