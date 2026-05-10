import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="top-nav glass-effect">
      <div className="container nav-content">
        <div className="logo body-sm">
          <strong>INFIN8 LABS</strong>
        </div>
        <div className="nav-links body-sm">
          <a href="#services">Services</a>
          <a href="#projects">Work</a>
          <a href="#clients">Clients</a>
          <a href="#team">Team</a>
        </div>
        <div className="nav-actions">
          <button className="button-icon-circular" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="button-primary">Get in Touch</a>
        </div>
      </div>
    </nav>
  );
}
