import { useRef, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { sendForm } from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      await sendForm(
        "service_x5pvn3p",
        "template_pq0o3ze",
        form.current,
        "fnokvXQm-SIvAKx55"
      );
      setStatus("success");
      form.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <Container id="contact" className="py-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        {t("contact_title")}
      </motion.h2>

      {status === "success" && (
        <Alert variant="success">{t("contact_success")}</Alert>
      )}
      {status === "error" && (
        <Alert variant="danger">{t("contact_error")}</Alert>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>{t("contact_name")}</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder={t("contact_name_ph") as string}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>{t("contact_email")}</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder={t("contact_email_ph") as string}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>{t("contact_subject")}</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder={t("contact_subject_ph") as string}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>{t("contact_message")}</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              placeholder={t("contact_message_ph") as string}
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            {t("contact_send")}
          </Button>
        </Form>
      </motion.div>
    </Container>
  );
};

export default ContactForm;
