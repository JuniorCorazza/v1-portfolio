import React from "react";
import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from "@mui/material";
import { colors } from "../constants/colors";

interface TextFieldProps extends Omit<MUITextFieldProps, "classes"> {
  buttonText?: string;
  onClick?: () => void;
  fatText?: boolean;
}

const TextField: React.FC<TextFieldProps> = (
  { buttonText, onClick, fatText },
) => {
  return (
    <MUITextField
      sx={{
        backgroundColor: colors.button,
        fontSize: 25,
        fontWeight: fatText ? 500 : 200,
        fontFamily: "Abhaya Libre",
        color: colors.textLight,
        boxShadow: "4px 4px 6px rgba(0, 0, 0, 1)",
      }}
      onClick={onClick}
    >
      {buttonText}
    </MUITextField>
  );
};

export default TextField;
