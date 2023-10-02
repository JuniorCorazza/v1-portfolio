import React from "react";
import { Typography, TypographyProps } from "@mui/material";
import { colors } from "../constants/colors";

const defaultProps: TypographyProps = {
  color: colors.textDark,
  fontFamily: "Lato, sans serif",
  fontWeight: 400,
};

interface TextProps extends TypographyProps {
  fontFamily?: "Abhaya Libre" | "Lato, sans serif";
}

const Text: React.FC<TextProps> = (props) => {
  const mergedProps = { ...defaultProps, ...props };

  return <Typography {...mergedProps} />;
};

export default Text;
