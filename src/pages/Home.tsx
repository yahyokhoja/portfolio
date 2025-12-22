import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import StartupList from "../components/StartupList";
import ContactForm from "../components/ContactForm";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-5">
      <AboutMe />
      <Projects />
      <StartupList />
      <ContactForm />
    </Container>
  );
};

export default Home;
