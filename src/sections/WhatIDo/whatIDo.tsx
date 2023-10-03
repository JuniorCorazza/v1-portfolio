import React from "react";
import { styled } from "@mui/system";
import Text from "../../components/text";
import Section from "../../components/Section";
import { useIsMobile } from "../../hooks/isMobile";

const ContainerRow = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  marginBottom: "64px",
});

const Container = styled("div")(({ isMobile }: { isMobile: boolean }) => ({
  background: `linear-gradient(to bottom, #8C8C8C, #D9D9D9)`,
  padding: isMobile ? "32px 16px 64px 16px" : "96px 32px 128px 32px",
  borderRadius: "8px",
  margin: "8px",
  textAlign: "center",
  flex: "0 0 calc(33.333% - 16px)",
  minWidth: "280px",
  boxSizing: "border-box",
}));

const WhatIDo: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <Section>
      <Text
        fontFamily="Abhaya Libre"
        fontSize={isMobile ? 30 : 60}
      >
        WHAT I DO
      </Text>
      <ContainerRow>
        <Container isMobile={isMobile}>
          <Text
            fontFamily="Abhaya Libre"
            fontSize={isMobile ? 15 : 28}
            fontWeight={700}
          >
            WEB DEVELOPMENT
          </Text>
          <Text fontSize={isMobile ? 10 : 20}>
            I specialize in web development, crafting user-friendly and
            interactive websites with clean code.
          </Text>
        </Container>
        <Container isMobile={isMobile}>
          <Text
            fontFamily="Abhaya Libre"
            fontSize={isMobile ? 15 : 28}
            fontWeight={700}
          >
            WEB DEVELOPMENT
          </Text>
          <Text fontSize={isMobile ? 10 : 20}>
            I specialize in web development, crafting user-friendly and
            interactive websites with clean code.
          </Text>
        </Container>
        <Container isMobile={isMobile}>
          <Text
            fontFamily="Abhaya Libre"
            fontSize={isMobile ? 15 : 28}
            fontWeight={700}
          >
            WEB DEVELOPMENT
          </Text>
          <Text fontSize={isMobile ? 10 : 20}>
            I specialize in web development, crafting user-friendly and
            interactive websites with clean code.
          </Text>
        </Container>
      </ContainerRow>
    </Section>
  );
};

export default WhatIDo;
