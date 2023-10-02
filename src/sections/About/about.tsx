import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants/colors";
import Resume from "../../constants/CV.pdf";
import Text from "../../components/text";
import Button from "../../components/button";
import Grid from "@mui/material/Grid";
import Section from "../../components/Section";
import { useIsMobile } from "../../hooks/isMobile";
import Me from "../../constants/images/me.png"

const ContentContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flex: "0 0 70%",
  flexDirection: "column",
  textAlign: "center",
  position: "relative",
});

const LeftContent = styled("div")(({ isMobile }: { isMobile: boolean }) => ({
  marginBottom: "24px",
  textAlign: isMobile ? "center" : "left",
}));

const RightContent = styled("div")(({ isMobile }: { isMobile: boolean }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  justifySelf: "center",
  marginTop: isMobile ? "24px" : "0",
  marginLeft: !isMobile ? "16px":"0"
}));

const RightImageContainer = styled("div")({
  backgroundColor: colors.backgroundLight,
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  overflow: "hidden",
  position: "relative",
  marginBottom: "16px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
});

const RightImage = styled("img")({
  width: "85%",
  height: "85%",

});

const About: React.FC = () => {
  const isMobile = useIsMobile();

  const openResume = () => {
    window.open(Resume,'_blank');
  };

  return (
    <Section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: isMobile ? "column" : "row",
        margin: "0 auto",
      }}
      id="about"
    >
      <ContentContainer>
        <LeftContent isMobile={isMobile}>
          <Text fontFamily="Abhaya Libre" fontSize={120}>
            Who Am I?
          </Text>
          <Text
            fontWeight={300}
            textAlign={"left"}
            sx={{ marginBottom: "16px" }}
            fontSize={22}
          >
            I'm Junior, data engineer and full-stack developer. While I might
            spend my days diving into lines of code, I promise I'm not a robot
            (at least, not yet)!
          </Text>
          <Text
            fontWeight={300}
            textAlign={"left"}
            sx={{ marginBottom: "16px" }}
            fontSize={22}
          >
            You're probably wondering what a developer like me does in my spare
            time, right? Well, when I'm not busy debugging, you'll find me on
            the golf course, chasing that elusive hole-in-one. You see, golf and
            coding have something in common – they both require precision,
            patience, and an uncanny ability to find the one missing piece
            that's hiding in plain sight.
          </Text>
          <Text
            fontWeight={300}
            textAlign={"left"}
            sx={{ marginBottom: "16px" }}
            fontSize={22}
          >
            Whether I'm hacking away at my keyboard or hacking my way through
            the rough on the fairway, I approach every challenge with enthusiasm
            and a good dose of humor. After all, they say laughter is the best
            debugging tool, right?
          </Text>
          <Text
            fontWeight={300}
            textAlign={"left"}
            sx={{ marginBottom: "16px" }}
            fontSize={22}
          >
            So, if you're looking for a developer who can code circles around
            challenges and maybe even give you a few golf tips along the way,
            you've come to the right place.
          </Text>
          <Grid
            container
            direction="row"
            textAlign="left"
          >
            <Grid item sx={{ marginRight: "32px" }}>
              <Grid container direction="column">
                <Grid item>
                  <Text fontSize={50} fontWeight={200}>
                    889283
                  </Text>
                </Grid>
                <Grid item>
                  <Text fontSize={22}>Cups of coffee</Text>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ marginRight: "32px" }}>
              <Grid container direction="column">
                <Grid item>
                  <Text fontSize={50} fontWeight={200}>
                    889283
                  </Text>
                </Grid>
                <Grid item>
                  <Text fontSize={22}>Cups of coffee</Text>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ marginRight: "32px" }}>
              <Grid container direction="column">
                <Grid item>
                  <Text fontSize={50} fontWeight={200}>
                    889283
                  </Text>
                </Grid>
                <Grid item>
                  <Text fontSize={22}>Cups of coffee</Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </LeftContent>
      </ContentContainer>
      <RightContent isMobile={isMobile}>
        <RightImageContainer>
          <RightImage src={Me} alt="Example Image" />
        </RightImageContainer>
        <Button
          buttonText="DOWNLOAD RESUME"
          onClick={openResume}
        />
      </RightContent>
    </Section>
  );
};

export default About;
