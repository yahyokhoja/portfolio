import { useState, FormEvent } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${values.name}! Сообщение отправлено.`);
  };

  return (
    <Container id="contact" className="mt-5" style={{ maxWidth: 600 }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Контакты
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Сообщение</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={values.message}
              onChange={(e) =>
                setValues({ ...values, message: e.target.value })
              }
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Отправить
          </Button>
        </Form>
      </motion.div>
    </Container>
  );
};

export default ContactForm;
