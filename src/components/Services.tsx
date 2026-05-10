import { useState, useEffect } from 'react';
import './Services.css';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [bursting, setBursting] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 810);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const initialCount = isMobile ? 2 : 6;
  const displayedServices = !showAll ? services.slice(0, initialCount) : services;

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="display-xl">What we do</h2>
          <p className="subhead">End-to-end services powered by cutting edge technology.</p>
        </div>
        
        <div className="services-grid">
          <AnimatePresence>
            {displayedServices.map((svc, index) => (
              <motion.div 
                key={svc.title}
                className={`service-card ${svc.color !== 'surface' ? 'gradient-spotlight-' + svc.color : 'surface-card'}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1, height: 'auto' }}
                exit={{ opacity: 0, scale: 0.9, height: 0, padding: 0, margin: 0, overflow: 'hidden', transition: { duration: 0.4 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="service-icon">{svc.icon}</div>
                <h3 className="headline">{svc.title}</h3>
                <p className="body-regular">{svc.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {services.length > initialCount && (
          <div className="projects-action" style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--spacing-xl)' }}>
            <motion.div 
              className="glowing-button-wrapper"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className={`glowing-backdrop ${bursting ? 'burst' : ''}`}></div>
              <button 
                type="button"
                className="button-primary glowing-button"
                style={{ cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '15px' }}
                onClick={(e) => {
                  e.preventDefault();
                  setBursting(true);
                  setTimeout(() => setBursting(false), 800);

                  if (!showAll) {
                    setShowAll(true);
                    setTimeout(() => {
                      window.scrollBy({ top: 400, behavior: 'smooth' });
                    }, 100);
                  } else {
                    const lenisWindow = window as unknown as { __lenis?: { scrollTo: (target: string, options?: object) => void } };
                    if (lenisWindow.__lenis) {
                      lenisWindow.__lenis.scrollTo('#services', { offset: -80, duration: 1.5 });
                    } else {
                      const section = document.getElementById('services');
                      if (section) {
                        const top = section.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top, behavior: 'smooth' });
                      }
                    }
                    setShowAll(false);
                  }
                }}
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
