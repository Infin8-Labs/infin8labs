import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer section-padding">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo body-sm">
            <strong>INFIN8 LABS</strong>
          </div>
          <p className="caption">Building digital excellence.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-col">
            <span className="caption col-title">Services</span>
            <a href="#services">Web Development</a>
            <a href="#services">Data Engineering</a>
            <a href="#services">AI Integrations</a>
            <a href="#services">Finance Solutions</a>
          </div>
          
          <div className="footer-col">
            <span className="caption col-title">Company</span>
            <a href="#projects">Work</a>
            <a href="#clients">Clients</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-col">
            <span className="caption col-title">Socials</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter (X)</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p className="micro">© {new Date().getFullYear()} Infin8 Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
