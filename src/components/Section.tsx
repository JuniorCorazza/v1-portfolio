import React from "react";
import { styled } from "@mui/system";
import { colors } from "../constants/colors";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  id?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  color?: "white" | "silver";
  initialInView?: boolean;
}

const SectionStyle = styled("section")<{ color: "white" | "silver" }>(
  ({ color }) => ({
    justifyContent: "center",
    textAlign: "center",
    padding: "64px 64px 0 64px",
    display: "flex",
    backgroundColor: color === "silver"
      ? colors.backgroundLight
      : colors.background,
  }),
);

const Section: React.FC<SectionProps> = (
  { id, children, style, color = "white", initialInView },
) => {
  const [ref, inView] = useInView({
    trackVisibility: true,
    delay: 100,
    initialInView,
  });

  return (
    <SectionStyle color={color} style={style} id={id}>
      <motion.div
        ref={ref}
        style={{ display: "flex" }}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </SectionStyle>
  );
};

export default Section;
