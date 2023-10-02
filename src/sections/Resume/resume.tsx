import React from "react";
import { styled } from "@mui/system";
import Text from "../../components/text";
import { Button } from "@mui/material";
import { colors } from "../../constants/colors";

const ResumeSection = styled("section")({
  backgroundColor: "#666",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10%",
});

const Resume: React.FC = () => {
  return (
    <ResumeSection id="resume">
      <Text fontSize={45}>
        YOU WANT TO READ MORE ABOUT ME?
      </Text>
      <Button
        variant="outlined"
        sx={{
          color: colors.textLight,
          borderColor: colors.textLight,
          borderWidth: 2,
          fontSize: "30px",
          fontFamily: "Lato, sans-serif",
          marginTop: "32px",
          ":hover": { borderWidth: 2 },
        }}
      >
        YES OFC!
      </Button>
    </ResumeSection>
  );
};

export default Resume;
