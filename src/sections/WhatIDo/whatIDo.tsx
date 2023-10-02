import React from "react";
import { styled } from "@mui/system";
import Text from "../../components/text";
import Section from "../../components/Section";

const ContainerRow = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  marginBottom: "64px",
});

const Container = styled("div")({
  background: `linear-gradient(to bottom, #8C8C8C, #D9D9D9)`,
  padding: "96px 32px 128px 32px",
  borderRadius: "8px",
  margin: "8px",
  textAlign: "center",
  flex: "0 0 calc(33.333% - 16px)",
  minWidth: "280px",
  boxSizing: "border-box",
});

const WhatIDo: React.FC = () => {
  return (
    <Section>
      <Text
        fontFamily="Abhaya Libre"
        fontSize={70}
        style={{ margin: "32px 0" }}
      >
        WHAT I DO
      </Text>
      <ContainerRow>
        <Container>
          <Text fontFamily="Abhaya Libre" fontSize={28} fontWeight={700}>
            WEB DEVELOPMENT
          </Text>
          <Text fontSize={20}>
            I specialize in web development, crafting user-friendly and
            interactive websites with clean code.
          </Text>
        </Container>
        <Container>
          <Text fontFamily="Abhaya Libre" fontSize={28} fontWeight={700}>
            WEB DEVELOPMENT
          </Text>
          <Text fontSize={20}>
            I specialize in web development, crafting user-friendly and
            interactive websites with clean code.
          </Text>
        </Container>
        <Container>
          <Text fontFamily="Abhaya Libre" fontSize={28} fontWeight={700}>
            WEB DEVELOPMENT
          </Text>
          <Text fontSize={20}>
            I specialize in web development, crafting user-friendly and
            interactive websites with clean code.
          </Text>
        </Container>
      </ContainerRow>
    </Section>
  );
};

export default WhatIDo;
