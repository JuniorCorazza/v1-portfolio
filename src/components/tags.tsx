import { styled } from "@mui/material";
import Text from "./text";
import { colors } from "@/constants/colors";

const TagContainer = styled("div")({
  border: "1px solid white",
  padding: "4px 8px",
  borderRadius: "20px",
  margin: "0 8px 8px 0",
  color: "white",
  backgroundColor: "transparent",
  display: "inline-block",
});
type TagProps = {
  text: string;
};
const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <TagContainer>
      <Text color={colors.textLight} fontSize={12} fontFamily="Montserrat">
        {text}
      </Text>
    </TagContainer>
  );
};

export default Tag;
