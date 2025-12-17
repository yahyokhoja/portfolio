import { Container } from "react-bootstrap";
import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-dark text-light py-5 mt-5"
    >
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        {/* Социальные сети */}
        <div className="d-flex gap-3 mb-3 mb-md-0">
          <a href="https://github.com/yahyokhoja" target="_blank" rel="noreferrer">
            <Github color="white" size={24} />
          </a>
          <a href="https://linkedin.com/in/yahyokhoja" target="_blank" rel="noreferrer">
            <Linkedin color="white" size={24} />
          </a>
          <a href="https://wa.me/992929281129" target="_blank" rel="noreferrer">
            <MessageCircle color="white" size={24} />
          </a>
        </div>

        {/* Контакты */}
        <div className="d-flex flex-column flex-md-row gap-3 text-center text-md-start">
          <a href="tel:+992929281129" className="text-light text-decoration-none d-flex align-items-center gap-1">
            <Phone size={18} /> +992929281129
          </a>
          <a href="mailto:yahuokhoja@gmail.com" className="text-light text-decoration-none d-flex align-items-center gap-1">
            <Mail size={18} /> yahuokhoja@gmail.com
          </a>
        </div>

      </Container>
    </motion.footer>
  );
};

export default Footer;
