import { useState } from "react";
import { styled } from "@mui/system";
import Section from "@/components/Section";
import Text from "@/components/text";
import { IconButton } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { colors } from "@/constants/colors";
import { TFunction } from "i18next";
import Button from "@/components/button";
import { WorkItem } from "./work";

const WorkWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  minHeight: "55vh",
  flexDirection: "row",
});

const WorkDescriptionContainer = styled("div")({
  width: "100%",
  marginTop: "18px",
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
});

const WorkItemContainer = styled("div")({
  "& img": {
    width: "80%",
    height: "auto",
    marginBottom: "8px",
  },
});

type WorkProps = {
  workItems: WorkItem[];
  t: TFunction;
};

const WorkMobileVersion: React.FC<WorkProps> = ({ t, workItems }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleImageSelect = (
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const scrollLeft = () => {
    let newIndex = selectedIndex - 1;
    if (newIndex < 0) {
      newIndex = workItems.length - 1;
    }
    handleImageSelect(
      newIndex,
    );
  };

  const scrollRight = () => {
    let newIndex = selectedIndex + 1;
    if (newIndex >= workItems.length) {
      newIndex = 0;
    }
    handleImageSelect(
      newIndex,
    );
  };

  const onButtonClicked = () => {
    window.open(workItems[selectedIndex].link, "_blank");
  };

  return (
    <Section
      id="work"
      style={{ padding: "16px 12px" }}
      color="white"
    >
      <WorkWrapper>
        <IconButton onClick={scrollLeft}>
          <SvgIcon component={ArrowBackIos} fill={colors.textDark} />
        </IconButton>
        <div style={{ flexDirection: "column" }}>
          <WorkItemContainer>
            <img
              src={workItems[selectedIndex].image}
              alt={workItems[selectedIndex].title}
            />
            <Text fontFamily="Abhaya Libre" fontSize={24}>
              {t(`work.project${selectedIndex}.title`)}
            </Text>
          </WorkItemContainer>
          <WorkDescriptionContainer>
            <Text fontSize={14}>
              {t(`work.project${selectedIndex}.message`)}
            </Text>
            {workItems[selectedIndex].button && (
              <Button
                buttonText={t(`work.project${selectedIndex}.button`)}
                isMobile={true}
                onClick={onButtonClicked}
              />
            )}
          </WorkDescriptionContainer>
        </div>
        <IconButton onClick={scrollRight}>
          <SvgIcon component={ArrowForwardIos} fill={colors.textDark} />
        </IconButton>
      </WorkWrapper>
    </Section>
  );
};

export default WorkMobileVersion;
