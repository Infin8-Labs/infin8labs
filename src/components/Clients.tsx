import { useState, useEffect } from 'react';
import './Clients.css';
import { motion } from 'framer-motion';

const clients = [
  {
    name: "Digiwood Technologies",
    description: "Designed a Bank Analytic application and a secure login Authentication system using JWT tokens. Architected a data warehousing platform using Pandas to store data in PostgreSQL.",
    color: "var(--colors-gradient-violet)"
  },
  {
    name: "Koteswarao (CA)",
    description: "Developed an automated web scraping model and delivered several sophisticated data-related projects.",
    color: "var(--colors-gradient-magenta)"
  },
  {
    name: "Sun Shine School",
    description: "Provided professional Canva designs, template editing, and branding materials.",
    color: "var(--colors-gradient-orange)"
  },
  {
    name: "Dhatre Academy",
    description: "Delivered professional-level subject training and consulting for their training institute.",
    color: "var(--colors-gradient-coral)"
  },
  {
    name: "Kumar (CA)",
    description: "Managed application filling services for various platforms, including PMEGP and tax filing systems.",
    color: "var(--colors-semantic-success)"
  },
  {
    name: "Nipun IT",
    description: "Provided DBA Services managing MySQL databases, content modification projects, and complex data architecture.",
    color: "var(--colors-accent-blue)"
  }
];

export default function Clients() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 810);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="clients" className="clients section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="display-xl">Our Clients</h2>
          <p className="subhead">Trusted by institutions and enterprises to deliver robust solutions.</p>
        </div>

        {isMobile ? (
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {[...clients, ...clients].map((client, index) => (
                <div 
                  key={`marquee-${index}`} 
                  className="client-card"
                  style={{ '--hover-color': client.color } as React.CSSProperties}
                >
                  <div className="smoke-effect" style={{ background: client.color }}></div>
                  <div className="client-content">
                    <h3 className="headline">{client.name}</h3>
                    <p className="body-regular">{client.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="clients-grid">
            {clients.map((client, index) => (
              <motion.div 
                key={`grid-${index}`} 
                className="client-card"
                style={{ '--hover-color': client.color } as React.CSSProperties}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="smoke-effect" style={{ background: client.color }}></div>
                <div className="client-content">
                  <h3 className="headline">{client.name}</h3>
                  <p className="body-regular">{client.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
