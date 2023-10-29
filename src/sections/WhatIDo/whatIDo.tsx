import React from "react";
import { styled } from "@mui/system";
import Text from "@/components/text";
import Section from "@/components/Section";
import { useIsMobile } from "@/hooks/isMobile";
import { colors } from "@/constants/colors";
import Tag from "@/components/tags";
import { TFunction } from "i18next";

const ContainerRow = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignContent: "start",
});

const DescriptionContainer = styled("div")(
  (
    { isMobile, color1, color2 }: {
      isMobile: boolean;
      color1: string;
      color2: string;
    },
  ) => ({
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    borderRadius: "20px",
    padding: isMobile ? "32px 16px 32px 16px" : "32px 32px 32px 32px",
    margin: isMobile ? "0" : "32px",
    marginBottom: isMobile ? "32px" : 0,
    background: `linear-gradient(to left, ${color1}, ${color2})`,
    boxShadow: "4px 6px 12px rgba(0, 0, 0, 0.8)",
    boxSizing: "border-box",
    flex: "1",
    flexBasis: isMobile ? "100%" : "calc(50% - 64px)",
  }),
);

const HeaderContainer = styled("div")((
  { isMobile }: { isMobile: boolean },
) => ({
  display: "flex",
  marginBottom: "16px",
  height: isMobile ? "60px" : "120px",
}));

const TextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "16px",
});

const TagContainer = styled("div")({
  flexDirection: "row",
  marginTop: "auto",
  alignItems: "start",
});

type WhatIDoProps = {
  t: TFunction;
};

const WhatIDo: React.FC<WhatIDoProps> = ({ t }) => {
  const isMobile = useIsMobile();
  return (
    <Section
      style={{
        padding: isMobile ? "64px 16px 64px 16px" : "64px 64px 122px 64px",
      }}
    >
      <ContainerRow>
        <DescriptionContainer
          isMobile={isMobile}
          color1={colors.blue}
          color2={colors.headerActive}
        >
          <HeaderContainer isMobile={isMobile}>
            <Text
              fontFamily="Montserrat"
              fontSize={isMobile ? 22 : 32}
              color={colors.textLight}
            >
              {t("whatIDo.container1.title")}
            </Text>
          </HeaderContainer>
          <TextContainer>
            <Text fontSize={14} color={colors.textLight}>
              {t("whatIDo.container1.message")}
            </Text>
          </TextContainer>
          <TagContainer>
            <Tag text={t("whatIDo.container1.tag1")} />
            <Tag text={t("whatIDo.container1.tag3")} />
            <Tag text={t("whatIDo.container1.tag2")} />
            <Tag text={t("whatIDo.container1.tag4")} />
          </TagContainer>
        </DescriptionContainer>
        <DescriptionContainer
          isMobile={isMobile}
          color1={colors.headerActive}
          color2={colors.blue}
        >
          <HeaderContainer isMobile={isMobile}>
            <Text
              fontFamily="Montserrat"
              fontSize={isMobile ? 22 : 32}
              color={colors.textLight}
            >
              {t("whatIDo.container2.title")}
            </Text>
          </HeaderContainer>
          <TextContainer>
            <Text fontSize={14} color={colors.textLight}>
              {t("whatIDo.container2.message")}
            </Text>
          </TextContainer>
          <TagContainer>
            <Tag text={t("whatIDo.container2.tag1")} />
            <Tag text={t("whatIDo.container2.tag2")} />
            <Tag text={t("whatIDo.container2.tag3")} />
            <Tag text={t("whatIDo.container2.tag4")} />
          </TagContainer>
        </DescriptionContainer>
      </ContainerRow>
    </Section>
  );
};

export default WhatIDo;
