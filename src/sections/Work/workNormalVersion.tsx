/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Text from "@/components/text";
import { TFunction } from "i18next";
import Slider, { CustomArrowProps } from "react-slick";
import Button from "@/components/button";
import { WorkItem } from "./work";
import { IconButton, styled, SvgIcon } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { colors } from "@/constants/colors";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkDescriptionContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

type WorkProps = {
  workItems: WorkItem[];
  t: TFunction;
};

const WorkNormalVersion: React.FC<WorkProps> = ({ t, workItems }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [ref, inView] = useInView({
    trackVisibility: true,
    delay: 100,
  });

  const NextArrow = (
    { currentSlide, slideCount, onClick, ...props }: CustomArrowProps,
  ) => (
    <div {...props}>
      <IconButton onClick={onClick}>
        <SvgIcon component={ArrowForwardIos} fill={colors.textDark} />
      </IconButton>
    </div>
  );
  const PrevArrow = (
    { currentSlide, slideCount, onClick, ...props }: CustomArrowProps,
  ) => (
    <div {...props}>
      <IconButton onClick={onClick}>
        <SvgIcon component={ArrowBackIos} fill={colors.textDark} />
      </IconButton>
    </div>
  );

  const onButtonClicked = () => {
    window.open(workItems[activeSlide].link, "_blank");
  };

  return (
    <div
      id="work"
      style={{
        padding: "0 64px",
        minHeight: "700px",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <Slider
          speed={500}
          infinite={true}
          afterChange={(currentSlide: number) => {
            setActiveSlide(currentSlide);
          }}
          centerMode
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          slidesToShow={1}
          // slidesToShow={3}
        >
          {workItems.map((item, index) => (
            <div key={index}>
              <img
                style={{
                  transform: "scale(1.6) translateY(20%)",
                }}
                // style={{
                //   filter: activeSlide !== index ? "blur(5px)" : "none",
                //   transform: activeSlide === index
                //     ? `scale(1.6) translateY(20%)`
                //     : "translateY(5%)",
                //   transition: "transform 0.7s",
                // }}
                height={180}
                width={180}
                src={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </Slider>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <WorkDescriptionContainer>
            <Text fontFamily="Abhaya Libre" fontSize={60}>
              {t(`work.project${activeSlide}.title`)}
            </Text>
            <Text fontSize={22}>
              {t(`work.project${activeSlide}.message`)}
            </Text>
            {workItems[activeSlide].button && (
              <Button
                buttonText={t(`work.project${activeSlide}.button`)}
                isMobile={false}
                onClick={onButtonClicked}
              />
            )}
          </WorkDescriptionContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkNormalVersion;
