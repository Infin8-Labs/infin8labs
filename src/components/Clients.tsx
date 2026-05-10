import './Clients.css';
import { motion } from 'framer-motion';

const clients = [
  {
    name: "Digiwood Technologies",
    description: "Designed a Bank Analytic application and a secure login Authentication system using JWT tokens. Architected a data warehousing platform using Pandas to store data in PostgreSQL."
  },
  {
    name: "Koteswarao (CA)",
    description: "Developed an automated web scraping model and delivered several sophisticated data-related projects."
  },
  {
    name: "Sun Shine School",
    description: "Provided professional Canva designs, template editing, and branding materials."
  },
  {
    name: "Dhatre Academy",
    description: "Delivered professional-level subject training and consulting for their training institute."
  },
  {
    name: "Kumar (CA)",
    description: "Managed application filling services for various platforms, including PMEGP and tax filing systems."
  },
  {
    name: "Nipun IT",
    description: "Provided DBA Services managing MySQL databases, content modification projects, and complex data architecture."
  }
];

export default function Clients() {
  return (
    <section id="clients" className="clients section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="display-xl">Our Clients</h2>
          <p className="subhead">Trusted by institutions and enterprises to deliver robust solutions.</p>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <motion.div 
              key={index} 
              className="client-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="headline">{client.name}</h3>
              <p className="body-regular">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
