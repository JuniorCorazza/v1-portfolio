import React, { useEffect, useState } from "react";
import Text from "@/components/text";
import Section from "@/components/Section";
import Button from "@/components/button";
import { useIsMobile } from "@/hooks/isMobile";
import ContactForm from "./contactForm";
import { styled } from "@mui/material";
import { colors } from "@/constants/colors";
import { TFunction } from "i18next";

const ContactContainer = styled("div")((
  { isMobile }: { isMobile: boolean },
) => ({
  textAlign: "center",
  borderRadius: "40px",
  padding: isMobile ? "24px 12px 24px 12px" : "64px 64px 64px 64px",
  margin: isMobile ? "0 0 64px 0" : "0 64px 182px 64px",
  background:
    `linear-gradient(to bottom, ${colors.headerActive}, ${colors.blue})`,
  boxShadow: "4px 6px 12px rgba(0, 0, 0, 0.8)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

type ContactProps = {
  t: TFunction;
};

const Contact: React.FC<ContactProps> = ({ t }) => {
  const isMobile = useIsMobile();
  const [sent, setSent] = useState<boolean>(false);
  const [contactFormOpen, setContactFormOpen] = useState<boolean>(false);
  const [confirmationText, setConfirmationText] = useState<
    string
  >();

  const onSend = (status: number) => {
    setSent(true);
    if (status === 200) {
      setContactFormOpen(false);
      setConfirmationText("sentSuccessfully");
    } else {
      setConfirmationText(
        "sentFailed",
      );
    }
  };

  const timeoutMessage = async () => {
    await new Promise((resolve) => setTimeout(resolve, 7000));
    setContactFormOpen(false);
    setConfirmationText(undefined);
  };

  useEffect(() => {
    if (sent) {
      timeoutMessage();
    }
  }, [sent]);

  return (
    <Section
      style={{ padding: isMobile ? "24px 24px" : "96px 64px 0 64px" }}
      id="contact"
    >
      <ContactContainer isMobile={isMobile}>
        <Text
          fontFamily="Abhaya Libre"
          fontSize={isMobile ? 30 : 80}
          color={colors.textLight}
        >
          {t("contact.title")}
        </Text>
        <Button
          buttonText={t("contact.button")}
          onClick={() => setContactFormOpen(!contactFormOpen)}
          isMobile={isMobile}
          fatText
        />
        {confirmationText && <Text>{t(`contact.${confirmationText}`)}</Text>}
        {contactFormOpen && <ContactForm onSend={onSend} t={t} />}
      </ContactContainer>
    </Section>
  );
};

export default Contact;
