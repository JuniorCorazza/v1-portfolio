import React from "react";
import { styled } from "@mui/system";
import { colors } from "../constants/colors";

interface SectionProps {
  id?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  color?: "white" | "silver";
}

const SectionStyle = styled("section")<{ color: "white" | "silver" }>(
  ({ color }) => ({
    justifyContent: "center",
    textAlign: "center",
    padding: "32px 64px",
    backgroundColor: color === "silver"
      ? colors.backgroundLight
      : colors.background,
  }),
);

const Section: React.FC<SectionProps> = (
  { id, children, style, color = "white" },
) => {
  return (
    <SectionStyle color={color} style={style} id={id}>
      {children}
    </SectionStyle>
  );
};

export default Section;
