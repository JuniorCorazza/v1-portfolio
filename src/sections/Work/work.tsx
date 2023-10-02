import { useState } from "react";
import { styled } from "@mui/system";
import Section from "../../components/Section";
import jsLogo from "../../constants/images/js.png";
import tsLogo from "../../constants/images/ts.png";
import cssLogo from "../../constants/images/css.png";
import Text from "../../components/text";
import { IconButton } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { colors } from "../../constants/colors";
import { useIsMobile } from "../../hooks/isMobile";

const WorkWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "600px",
  flexDirection: "row",
  overflow: "hidden",
});

const FullWorkContainer = styled("div")({
  display: "flex",
  width: "85%",
  flexDirection: "column",
});

const WorkContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
  "&::before, &::after": {
    content: "''",
    flex: "0 0 calc(15% - 10px)",
  },
  "& > div": {
    flex: "0 0 calc(70% / 3)",
    marginRight: "20px",
    position: "relative",
    "& img": {
      width: "100%",
      height: "auto",
      marginBottom: "8px",
      transform: "scale(0.7)",
    },
    "& p": {
      marginBottom: "8px",
      display: "none",
    },
    "&.selected": {
      transform: "scale(1.2) translateY(-64px)",
      "& img": {
        transform: "scale(1)",
      },
      "& p": {
        display: "block",
      },
    },
  },
});

const WorkDescriptionContainer = styled("div")({
  width: "100%",
  textAlign: "center",
  marginTop: "32px",
  "&.selected": {
    width: "80%",
    margin: "0 auto",
  },
});

const WorkItem = styled("div")(({ isSelected }: { isSelected: boolean }) => ({
  filter: !isSelected ? "blur(5px)" : "blur(0)",
  "& img": {
    width: "80%",
    height: "auto",
    marginBottom: "8px",
  }
}));

const workItems = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur erat a efficitur.",
    image: jsLogo,
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur erat a efficitur.",
    image: tsLogo,
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur erat a efficitur.",
    image: cssLogo,
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur erat a efficitur.",
    image: tsLogo,
  },
];

const Work = () => {
  const isMobile = useIsMobile();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedDescription, setSelectedDescription] = useState<string>(
    workItems[0].description,
  );
  const [scrolling, setScrolling] = useState<boolean>(false);

  const handleImageSelect = (index: number, description: string) => {
    setSelectedImage(index);
    setSelectedDescription(description);
    setScrolling(true);
    setTimeout(() => {
      setScrolling(false);
    }, 300);
  };

  const getDisplayedItems = () => {
    const itemsToDisplay = [];
    for (let i = -1; i <= 1; i++) {
      const index = (selectedImage + i + workItems.length) % workItems.length;
      itemsToDisplay.push(workItems[index]);
    }
    return itemsToDisplay;
  };

  const scrollLeft = () => {
    let newIndex = selectedImage - 1;
    if (newIndex < 0) {
      newIndex = workItems.length - 1;
    }
    handleImageSelect(newIndex, workItems[newIndex].description);
  };

  const scrollRight = () => {
    let newIndex = selectedImage + 1;
    if (newIndex >= workItems.length) {
      newIndex = 0;
    }
    handleImageSelect(newIndex, workItems[newIndex].description);
  };

  return (
    <Section color="white">
      <WorkWrapper>
        {isMobile ? (
          // Render simplified mobile view
          <div>
            <WorkItem
              className={`selected ${scrolling ? "scrolling" : ""}`}
                                isSelected={true}
              style={{
                transform: "translateX(0)",
              }}
            >
              <img src={workItems[selectedImage].image} alt={workItems[selectedImage].title} />
              <Text fontFamily="Abhaya Libre" fontSize={60}>
                {workItems[selectedImage].title}
              </Text>
            </WorkItem>
            <WorkDescriptionContainer
              className={`selected ${scrolling ? "hidden" : ""}`}
            >
              <Text fontSize={22}>{selectedDescription}</Text>
            </WorkDescriptionContainer>
            <div>
              <IconButton onClick={scrollLeft}>
                <SvgIcon component={ArrowBackIos} fill={colors.textDark} />
              </IconButton>
              <IconButton onClick={scrollRight}>
                <SvgIcon component={ArrowForwardIos} fill={colors.textDark} />
              </IconButton>
            </div>
          </div>
        ) : (
          
          <>
            <IconButton onClick={scrollLeft}>
              <SvgIcon component={ArrowBackIos} fill={colors.textDark} />
            </IconButton>
            <FullWorkContainer>
              <WorkContainer>
                {getDisplayedItems().map((work, index) => (
                  <WorkItem
                    key={index}
                    isSelected={index === 1}
                    className={index === 1
                      ? "selected"
                      : scrolling
                      ? "scrolling"
                      : ""}
                    // onClick={() =>
                    //   handleImageSelect(index, workItems[index].description)
                    // }
                    style={{
                      transform: index === 0
                        ? `translateX(-33.33%)`
                        : index === 2
                        ? `translateX(33.33%)`
                        : `translateX(0)`,
                    }}
                  >
                    <img src={work.image} alt={work.title} />
                    <Text fontFamily="Abhaya Libre" fontSize={60}>
                      {work.title}
                    </Text>
                  </WorkItem>
                ))}
              </WorkContainer>
              <WorkDescriptionContainer
                className={`selected ${scrolling ? "hidden" : ""}`}
              >
                <Text fontSize={22}>{selectedDescription}</Text>
              </WorkDescriptionContainer>
            </FullWorkContainer>
            <IconButton onClick={scrollRight}>
              <SvgIcon component={ArrowForwardIos} fill={colors.textDark} />
            </IconButton>
          </>
        )}
      </WorkWrapper>
    </Section>
  );
};

export default Work;
