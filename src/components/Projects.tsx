import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const items = [
  { title: "Delivery App", desc: "Django + React + PostgreSQL" },
  { title: "E-commerce", desc: "Stripe, Admin panel, carts" },
  { title: "Telegram Bots", desc: "Proxy + Bybit integration" },
];

const Projects = () => {
  return (
    <Container id="projects" className="py-5">
      <h2 className="mb-4">Projects</h2>
      <Row>
        {items.map((p, i) => (
          <Col md={4} key={i} className="mb-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <Card>
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>{p.desc}</Card.Text>
                  <Button variant="primary">Demo</Button>
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
