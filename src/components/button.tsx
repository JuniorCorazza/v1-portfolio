import React from "react";
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";
import { colors } from "../constants/colors";

interface ButtonProps extends MUIButtonProps {
  buttonText: string;
  onClick: () => void;
  fatText?: boolean;
  isMobile: boolean;
}

const Button: React.FC<ButtonProps> = (
  { buttonText, onClick, style, fatText, isMobile },
) => {
  return (
    <MUIButton
      sx={{
        backgroundColor: colors.button,
        fontSize: isMobile ? 14: 25,
        fontWeight: fatText ? 500 : 200,
        fontFamily: "Abhaya Libre",
        color: colors.textLight,
        border: "1px solid black",
        boxShadow: "4px 4px 6px rgba(0, 0, 0, 1)",
        padding: "4px 16px",
        margin: isMobile ? "16px 32px" : "64px 64px",
        ...style,
      }}
      onClick={onClick}
    >
      {buttonText}
    </MUIButton>
  );
};

export default Button;
