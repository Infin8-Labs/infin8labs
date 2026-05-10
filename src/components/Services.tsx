import './Services.css';
import { motion } from 'framer-motion';
import { Code, Aperture, Headphones, BookOpen, Sparkles, DollarSign, PenTool, Users } from 'lucide-react';

const services = [
  {
    title: "Project Development",
    description: "Customized software solutions, website development, and data-driven web scraping tools.",
    icon: <Code size={24} />,
    color: "violet"
  },
  {
    title: "OpenAI & Emerging Tech",
    description: "Specialized courses and integration of AI tools like ChatGPT, Gemini, and Agentic workflows.",
    icon: <Sparkles size={24} />,
    color: "magenta"
  },
  {
    title: "Snap On Wheels",
    description: "A fully automated photo booth application for events, parties, and college fests.",
    icon: <Aperture size={24} />,
    color: "orange"
  },
  {
    title: "Comprehensive Training",
    description: "Courses on Python, Java, HTML, and frameworks like Django and REST API.",
    icon: <BookOpen size={24} />,
    color: "coral"
  },
  {
    title: "Finance & Tally",
    description: "Bookkeeping services, tax filing, and training on financial tools.",
    icon: <DollarSign size={24} />,
    color: "violet"
  },
  {
    title: "Customer Support",
    description: "Around-the-clock support and assistance for all your queries and technical issues.",
    icon: <Headphones size={24} />,
    color: "magenta"
  },
  {
    title: "Creative Multimedia",
    description: "High-quality content creation, video production, and modern website design.",
    icon: <PenTool size={24} />,
    color: "orange"
  },
  {
    title: "Collaborative Culture",
    description: "A supportive environment fostering creativity, innovation, and long-term partnerships.",
    icon: <Users size={24} />,
    color: "coral"
  }
];

export default function Services() {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="display-xl">What we do</h2>
          <p className="subhead">End-to-end services powered by cutting edge technology.</p>
        </div>
        
        <div className="services-grid">
          {services.map((svc, index) => (
            <motion.div 
              key={index}
              className={`service-card ${svc.color !== 'surface' ? 'gradient-spotlight-' + svc.color : 'surface-card'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">{svc.icon}</div>
              <h3 className="headline">{svc.title}</h3>
              <p className="body-regular">{svc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
