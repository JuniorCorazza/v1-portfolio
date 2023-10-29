import React from "react";
import { styled } from "@mui/system";

import Resume from "@/constants/Resumé.pdf";
import Text from "@/components/text";
import Button from "@/components/button";
import Grid from "@mui/material/Grid";
import Section from "@/components/Section";
import { useIsMobile } from "@/hooks/isMobile";
import Me from "@/constants/images/me1.png";
import WhatIDo from "../WhatIDo/whatIDo";
import { TFunction } from "i18next";

const LeftContent = styled("div")(({ isMobile }: { isMobile: boolean }) => ({
  marginBottom: "24px",
  marginRight: isMobile ? "0" : "64px",
  textAlign: isMobile ? "center" : "left",
}));

const RightContent = styled("div")(({ isMobile }: { isMobile: boolean }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: isMobile ? "32px" : "98px",
}));

const RightImage = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "20px",
  boxShadow: "6px 6px 12px rgba(0, 0, 0, 0.6)",
});

type AboutProps = {
  t: TFunction;
};

const About: React.FC<AboutProps> = ({ t }) => {
  const isMobile = useIsMobile();

  const openResume = () => {
    window.open(Resume, "_blank");
  };

  return (
    <>
      <Section
        id="about"
        initialInView
        style={{
          padding: isMobile ? "16px 32px 32px 32px" : "64px 64px 0 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <LeftContent isMobile={isMobile}>
            <Text fontFamily="Abhaya Libre" fontSize={isMobile ? 40 : 100}>
              {t("about.title")}
            </Text>
            <Text
              fontWeight={300}
              sx={{ marginBottom: "16px" }}
              fontSize={isMobile ? 16 : 22}
            >
              {t("about.paragraph1")}
            </Text>
            <Text
              fontWeight={300}
              sx={{ marginBottom: "16px" }}
              fontSize={isMobile ? 16 : 22}
            >
              {t("about.paragraph2")}
            </Text>
            <Text
              fontWeight={300}
              sx={{ marginBottom: "16px" }}
              fontSize={isMobile ? 16 : 22}
            >
              {t("about.paragraph3")}
            </Text>
            <Text
              fontWeight={300}
              sx={{ marginBottom: "16px" }}
              fontSize={isMobile ? 16 : 22}
            >
              {t("about.paragraph4")}
            </Text>
            <Grid
              container
              direction="row"
              textAlign={isMobile ? "center" : "left"}
              justifyContent={isMobile ? "center" : "left"}
            >
              <Grid item sx={{ marginRight: isMobile ? "16px" : "32px" }}>
                <Grid container direction="column">
                  <Grid item>
                    <Text fontSize={isMobile ? 26 : 50} fontWeight={200}>
                      6923
                    </Text>
                  </Grid>
                  <Grid item>
                    <Text fontSize={isMobile ? 14 : 22}>
                      {t("about.coffee")}
                    </Text>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ marginRight: isMobile ? "16px" : "32px" }}>
                <Grid container direction="column">
                  <Grid item>
                    <Text fontSize={isMobile ? 26 : 50} fontWeight={200}>
                      88928
                    </Text>
                  </Grid>
                  <Grid item>
                    <Text fontSize={isMobile ? 14 : 22}>
                      {t("about.debugged")}
                    </Text>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ marginRight: isMobile ? "16px" : "32px" }}>
                <Grid container direction="column">
                  <Grid item>
                    <Text fontSize={isMobile ? 26 : 50} fontWeight={200}>
                      91238
                    </Text>
                  </Grid>
                  <Grid item>
                    <Text fontSize={isMobile ? 14 : 22}>
                      {t("about.bugs")}
                    </Text>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </LeftContent>

          <RightContent isMobile={isMobile}>
            <div style={{ marginBottom: "28px" }}>
              <RightImage src={Me} alt="Example Image" />
            </div>
            <Button
              buttonText={t("about.button")}
              onClick={openResume}
              isMobile={isMobile}
              largeButton
              darkBackground
            />
          </RightContent>
        </div>
      </Section>
      <WhatIDo t={t} />
    </>
  );
};

export default About;
