import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";

import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import { useIsMobile } from "@/hooks/isMobile";

import { send as sendEmail } from "@emailjs/browser";
import Button from "@/components/button";
import { TFunction } from "i18next";

const StyledContainer = styled(Container)({
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

type ContactFormProps = {
  t: TFunction;
  onSend: (status: number) => void;
};

const ContactForm: React.FC<ContactFormProps> = ({ t, onSend }) => {
  const isMobile = useIsMobile();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const email = await sendEmail(
        "service_3cjetjc",
        "template_vxmikce",
        formData,
        "d1s0HS5bt8JSNVYyb",
      );

      onSend(email.status);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <StyledContainer>
      <form
        style={{
          display: "flex",
          width: isMobile ? "100%" : "70%",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label={t("contact.contactForm.name")}
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          sx={{ marginBottom: "8px", borderColor: "" }}
        />
        <TextField
          label={t("contact.contactForm.email")}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          sx={{ marginBottom: "8px" }}
        />
        <TextField
          label={t("contact.contactForm.number")}
          name="number"
          type="tel"
          value={formData.number}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "8px" }}
        />
        <TextField
          label={t("contact.contactForm.message")}
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          sx={{ marginBottom: "8px" }}
        />
        <Button
          buttonText={t("contact.contactForm.button")}
          type="submit"
          isMobile={isMobile}
        />
      </form>
    </StyledContainer>
  );
};

export default ContactForm;
