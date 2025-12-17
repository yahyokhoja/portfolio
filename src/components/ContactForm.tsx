import { useRef, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { sendForm } from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      await sendForm(
        "service_x5pvn3p", // Service ID
        "template_pq0o3ze",       // Template ID
        form.current,
        "fnokvXQm-SIvAKx55" // Public Key
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
        Contact Me
      </motion.h2>

      {status === "success" && <Alert variant="success">Message sent successfully!</Alert>}
      {status === "error" && <Alert variant="danger">Failed to send message. Check your IDs.</Alert>}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Your Name" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Your Email" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="title" placeholder="Subject" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} name="message" placeholder="Your Message" required />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">Send Message</Button>
        </Form>
      </motion.div>
    </Container>
  );
};

export default ContactForm;
