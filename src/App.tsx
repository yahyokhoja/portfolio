import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import StartupList from "./components/StartupList";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FoodDelivery from "./pages/startups/FoodDelivery";
import EducationPlatform from "./pages/startups/EducationPlatform"; 
import CryptoPanel from "./pages/startups/CryptoPanel"; 
import UAVFactory from "./pages/startups/UAVFactory";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AppNavbar />
              <div className="container mt-5" id="about">
                <AboutMe />
                <Projects />
                <StartupList />
                <ContactForm />
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/startups/uav-factory" element={<UAVFactory />} />
        <Route path="/startups/food-delivery" element={<FoodDelivery />} />
        <Route path="/startups/education-platform" element={<EducationPlatform />} />
        <Route path="/startups/crypto-panel" element={<CryptoPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
