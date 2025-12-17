import { motion } from "framer-motion";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Container id="about" className="mt-5 pt-5">
      <Row className="align-items-center">
        <Col md={5}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://via.placeholder.com/400x400"
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
            <h2>{t("about")}</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6 }}>
              Я современный full-stack разработчик.  
              Работаю с React, TypeScript, Django, Flask, FastAPI,
              Docker, PostgreSQL. Люблю анимации и UI.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
