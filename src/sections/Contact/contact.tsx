import React from "react";
import Text from "../../components/text";
import Section from "../../components/Section";
import Button from "../../components/button";
// import ContactForm from "./contactForm";

const Contact: React.FC = () => {
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
    <Section id="contact" color="silver">
      <Text
        fontFamily="Abhaya Libre"
        fontSize={70}
      >
        CONTACT
      </Text>
      <Text
        fontWeight={200}
        fontSize={30}
      >
        Stay connected for more exciting developments and projects. Feel free to
        reach out if you have any questions or collaboration ideas. Looking
        forward to connecting with you!
      </Text>
      <Button
        style={{ margin: "64px 64px" }}
        buttonText="SAY HELLO!"
        // onClick={() => setContactFormOpen(!contactFormOpen)}
        onClick={() => console.log("clicked")
        }
        fatText
      />
{/* {confirmationTextVisible && (<Text>afaf</Text>)}
      {contactFormOpen && (
        <ContactForm onSend={onSentSuccessful}/>
      )} */}
    </Section>
  );
};

export default Contact;
