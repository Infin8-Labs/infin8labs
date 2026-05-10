import './Hero.css';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero section-padding">
      {/* Animated Background Waves */}
      <div className="hero-background">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      
      <div className="container hero-content">
        <motion.h1 
          className="display-xxl hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We build digital<br/>excellence.
        </motion.h1>
        
        <motion.p 
          className="subhead hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Infin8 Labs delivers end-to-end software solutions, from custom web development and automated AI agents to enterprise data engineering.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a href="#projects" className="button-primary">View Our Work</a>
          <a href="#contact" className="button-secondary">Contact Us</a>
        </motion.div>
      </div>
    </section>
  );
}
