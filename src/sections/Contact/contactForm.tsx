import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import {useIsMobile} from "../../hooks/isMobile";

import sgMail from "@sendgrid/mail";
sgMail.setApiKey("YOUR_SENDGRID_API_KEY");

const StyledContainer = styled(Container)(({ isMobile }: { isMobile: boolean }) => ({
  width: "100%",
  maxWidth: isMobile ? "100%" : "600px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledForm = styled("form")(({ isMobile }: { isMobile: boolean }) => ({
  width: "100%",
  maxWidth: isMobile ? "100%" : "600px",
}));

const StyledButton = styled(Button)({
  marginTop: "16px",
});

type ContactFormProps = {
    onSend: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({onSend}) => {
  const isMobile = useIsMobile();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    onSend()

    const emailContent = {
      to: "juncor94@gmail.com",
      from: formData.email,
      subject: `Contact Form Submission from ${formData.name}`,
      text: formData.message,
    };
    console.log(emailContent);
    

    // try {
    //   // Send email using SendGrid
    //   await sgMail.send(emailContent);

    //   // Clear form data and show success message
    //   setFormData({
    //     name: "",
    //     email: "",
    //     phoneNumber: "",
    //     message: "",
    //   });
    //   alert("Email sent successfully!");
    // } catch (error) {
    //   console.error("Error sending email:", error);
    //   alert("An error occurred while sending the email. Please try again later.");
    // }
  };

  return (
    <StyledContainer isMobile={isMobile}>
      <StyledForm onSubmit={handleSubmit} isMobile={isMobile}>
        <TextField
          label="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          sx={{marginBottom: "8px"}}
        />
        <TextField
        
          label="Your email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          sx={{marginBottom: "8px"}}
        />
        <TextField
          label="Your phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          sx={{marginBottom: "8px"}}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          sx={{marginBottom: "8px"}}
        />
        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
        >
          Send
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default ContactForm;
