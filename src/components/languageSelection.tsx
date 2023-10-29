import { MouseEvent, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { i18n, SupportedLanguage } from "../localization";
import SwedishFlagLogo from "../constants/icons/swedish_flag.svg";
import EnglishFlagIcon from "../constants/icons/english_flag.svg";
import { ReactSVG } from "react-svg";
import { colors } from "../constants/colors";
import { useIsMobile } from "../hooks/isMobile";

type LanguageSelectorProps = {
  onLanguageClicked?: () => void;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = (
  { onLanguageClicked },
) => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const isMobile = useIsMobile();

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  const handleLanguageChange = (language: SupportedLanguage) => {
    setSelectedLanguage(language);
    setMenuAnchor(null);
    i18n.changeLanguage(language);
  };

  if (!isMobile) {
    const iconStyle = {
      color: colors.white,
    };

    const menuWidth = menuAnchor ? menuAnchor.clientWidth : undefined;

    return (
      <div>
        <Button
          onClick={handleOpenMenu}
          startIcon={<ArrowDropDownIcon style={iconStyle} />}
        >
          {selectedLanguage === "en"
            ? <ReactSVG src={EnglishFlagIcon} style={{ marginTop: "8px" }} />
            : <ReactSVG src={SwedishFlagLogo} style={{ marginTop: "8px" }} />}
        </Button>
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          style={{
            width: menuWidth,
            boxShadow: "none",
          }}
          slotProps={{
            paper: {
              style: { backgroundColor: "transparent", boxShadow: "none" },
            },
          }}
        >
          <MenuItem
            style={{
              display: selectedLanguage === "en" ? "none" : "block",
            }}
            onClick={() => handleLanguageChange("en")}
          >
            <ReactSVG
              src={EnglishFlagIcon}
              style={{ marginTop: "-8px", marginLeft: "-16px" }}
            />
          </MenuItem>
          <MenuItem
            style={{
              display: selectedLanguage === "sv" ? "none" : "block",
            }}
            onClick={() => handleLanguageChange("sv")}
          >
            <ReactSVG
              src={SwedishFlagLogo}
              style={{ marginTop: "-8px", marginLeft: "-16px" }}
            />
          </MenuItem>
        </Menu>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Button
        style={{
          display: selectedLanguage === "en" ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => {
          handleLanguageChange("en");
          onLanguageClicked && onLanguageClicked();
        }}
      >
        <ReactSVG src={EnglishFlagIcon} style={{ marginTop: "8px" }} />
      </Button>
      <Button
        style={{
          display: selectedLanguage === "sv" ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => {
          handleLanguageChange("sv");
          onLanguageClicked && onLanguageClicked();
        }}
      >
        <ReactSVG src={SwedishFlagLogo} style={{ marginTop: "8px" }} />
      </Button>
    </div>
  );
};

export default LanguageSelector;
