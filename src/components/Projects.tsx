import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";

const Projects = () => {
  const { t } = useTranslation();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState("");

  const items = [
    { title: t("projects_items.delivery_title"), desc: t("projects_items.delivery_desc") },
    { title: t("projects_items.ecommerce_title"), desc: t("projects_items.ecommerce_desc") },
    { title: t("projects_items.bots_title"), desc: t("projects_items.bots_desc") },
  ];

  const handleClick = (projectTitle: string) => {
    setAlertText(t("alert.invest", { project: projectTitle }));
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 5000);
  };

  return (
    <Container id="projects" className="py-5">
      <h2 className="mb-4">{t("projects_title")}</h2>

      {alertVisible && <Alert variant="info">{alertText}</Alert>}

      <Row>
        {items.map((p, i) => (
          <Col md={4} key={i} className="mb-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>{p.desc}</Card.Text>
                  <Button variant="primary" onClick={() => handleClick(p.title)}>
                    {t("view_project")}
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
