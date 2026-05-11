import { useState, useEffect, useRef } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 810);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const scrollContainer = scrollRef.current;
    const group = groupRef.current;
    if (!scrollContainer || !group) return;

    let animationId: number;
    let isTouching = false;
    
    // Gap is 15px (var(--spacing-md))
    const gap = 15;

    const handleTouchStart = () => { isTouching = true; };
    const handleTouchEnd = () => { 
      setTimeout(() => { isTouching = false; }, 800); 
    };

    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    scrollContainer.addEventListener('touchend', handleTouchEnd);
    scrollContainer.addEventListener('mousedown', handleTouchStart);
    scrollContainer.addEventListener('mouseup', handleTouchEnd);
    scrollContainer.addEventListener('mouseleave', handleTouchEnd);

    const step = () => {
      if (!isTouching && scrollContainer && group) {
        scrollContainer.scrollLeft += 1;
        const resetPoint = group.offsetWidth + gap;
        if (scrollContainer.scrollLeft >= resetPoint) {
          scrollContainer.scrollLeft -= resetPoint;
        }
      }
      animationId = requestAnimationFrame(step);
    };
    
    animationId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
      scrollContainer.removeEventListener('mousedown', handleTouchStart);
      scrollContainer.removeEventListener('mouseup', handleTouchEnd);
      scrollContainer.removeEventListener('mouseleave', handleTouchEnd);
    };
  }, [isMobile]);

  return (
    <section id="clients" className="clients section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="display-xl">Our Clients</h2>
          <p className="subhead">Trusted by institutions and enterprises to deliver robust solutions.</p>
        </div>

        {isMobile ? (
          <div className="marquee-wrapper" ref={scrollRef}>
            <div className="marquee-content">
              <div className="marquee-group" ref={groupRef}>
                {clients.map((client, index) => (
                  <div 
                    key={`group1-${index}`} 
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
              <div className="marquee-group">
                {clients.map((client, index) => (
                  <div 
                    key={`group2-${index}`} 
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
