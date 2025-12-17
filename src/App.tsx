import AppNavbar from "./components/Navbar";
import Projects from "./components/Projects";
import { useTranslation } from "react-i18next";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


function App() {
  const { t } = useTranslation();

  return (
    <>
      <AppNavbar />
      <div className="container mt-5" id="about">
        <h1>{t("about")}</h1>
        <p>Краткая информация обо мне.</p>


      <AboutMe />
      <Projects />
      <ContactForm />
      <Footer/>

      </div>
      
   
    </>
  );
}

export default App;
