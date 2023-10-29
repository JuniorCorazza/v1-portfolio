import { styled } from "@mui/material";
import Text from "./text";
import { colors } from "@/constants/colors";

const TechniqueBoxContainer = styled("div")((
  { isMobile }: { isMobile: boolean },
) => ({
  border: `2px solid ${colors.blue}`,
  display: "flex",
  flexDirection: "column",
  borderRadius: "4px",
  margin: "0 8px 8px 0",
  minWidth: isMobile ? "100%" : "30%",
}));

const TitleContainer = styled("div")({
  background:
    `linear-gradient(to bottom, ${colors.headerActive}, ${colors.blue})`,
  padding: "6px 8px",
  marginBottom: "8px",
});

const IconContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  padding: "8px",
});

type TechniqueBoxProps = {
  title: string;
  isMobile: boolean;
  children?: React.ReactNode;
};

const TechniqueBox: React.FC<TechniqueBoxProps> = (
  { title, isMobile, children },
) => {
  return (
    <TechniqueBoxContainer isMobile={isMobile}>
      <TitleContainer>
        <Text
          color={colors.textLight}
          fontSize={isMobile ? 12 : 16}
          fontFamily="Montserrat"
        >
          {title}
        </Text>
      </TitleContainer>
      <IconContainer>{children}</IconContainer>
    </TechniqueBoxContainer>
  );
};

export default TechniqueBox;
