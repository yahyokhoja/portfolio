import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface Project {
  title: string;
  text: string;
}

const Projects = () => {
  const { t } = useTranslation();

  const items: Project[] = [
    { title: "Project 1", text: "React сайт" },
    { title: "Project 2", text: "Django backend" },
    { title: "Project 3", text: "Full-stack приложение" },
  ];

  return (
    <Container id="projects" style={{ marginTop: 40 }}>
      <h2 className="text-center mb-4">{t("projects")}</h2>
      <Row>
        {items.map((p) => (
          <Col md={4} key={p.title}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.text}</Card.Text>
                <Button>Demo</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
