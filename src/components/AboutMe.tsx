import { motion } from "framer-motion";
import { Row, Col, Image, Container } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container id="about" className="py-5" style={{ marginTop: "80px" }}>
      <Row className="align-items-center">
        <Col md={5}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/avatar.jpg"
              roundedCircle
              fluid
            />
          </motion.div>
        </Col>
        <Col md={7}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>About Me</h2>
            <p>
              Я современный full-stack разработчик. Работаю с React, TypeScript, Django, Flask, FastAPI, Docker и PostgreSQL. Люблю создавать UI и анимации.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
