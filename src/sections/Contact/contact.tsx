import React from "react";
import Text from "../../components/text";
import Section from "../../components/Section";
import Button from "../../components/button";
import { useIsMobile } from "../../hooks/isMobile";
// import ContactForm from "./contactForm";

const Contact: React.FC = () => {
  const isMobile = useIsMobile();
  // const [sentSuccessful, setSentSuccessful] = useState<boolean>(false);
  // const [contactFormOpen, setContactFormOpen] = useState<boolean>(false);
  // const [confirmationTextVisible, setConfirmationTextVisible] = useState<boolean>(false);

  // const onSentSuccessful = () => {

  //     setContactFormOpen(false);
  //     setConfirmationTextVisible(true)

  // }

  // useEffect(() => {
  // }, [sentSuccessful])

  return (
    <Section
      style={{ padding: isMobile ? "92px 64px" : "180px 262px" }}
      id="contact"
      color="silver"
    >
      <Text
        fontFamily="Abhaya Libre"
        fontSize={isMobile ? 30 : 60}
      >
        CONTACT
      </Text>
      <Text
        fontSize={isMobile ? 18 : 24}
      >
        Stay connected for more exciting developments and projects. Feel free to
        reach out if you have any questions or collaboration ideas. Looking
        forward to connecting with you!
      </Text>
      <Button
        buttonText="SAY HELLO!"
        // onClick={() => setContactFormOpen(!contactFormOpen)}
        onClick={() => console.log("clicked")}
        isMobile={isMobile}
        fatText
      />
      {
        /* {confirmationTextVisible && (<Text>afaf</Text>)}
      {contactFormOpen && (
        <ContactForm onSend={onSentSuccessful}/>
      )} */
      }
    </Section>
  );
};

export default Contact;
