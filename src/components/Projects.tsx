import './Projects.css';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

// Using local generated images or placeholders
import mmImg from '/project_mm.png';
import snapImg from '/project_snap.png';
import snaponnImg from '/project_snaponn.png';

const projects = [
  {
    title: "SnapOnWheels",
    category: "Full Stack & Hardware",
    description: "A fully automated photo booth application for events, parties, and college fests.",
    link: "https://snaponwheels.in/",
    image: snapImg
  },
  {
    title: "MM Website",
    category: "Corporate Portfolio",
    description: "Premium end-to-end company portfolio with interactive Designs.",
    link: "https://mm-website-gules.vercel.app/",
    image: mmImg
  },
  {
    title: "SnapOnn",
    category: "Online Payment Platform",
    description: "Secure and seamless digital payment infrastructure and wallet integrations.",
    link: "https://snaponn.vercel.app/",
    image: snaponnImg
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [bursting, setBursting] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="projects section-padding" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="display-xl">Featured Work</h2>
          <p className="subhead">Selected projects showcasing our expertise in design and engineering.</p>
        </div>

        <div className="projects-list">
          <AnimatePresence initial={false}>
            {displayedProjects.map((project, index) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-row"
                key={project.title}
                layout
                initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                exit={{ opacity: 0, height: 0, overflow: 'hidden', margin: 0, padding: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="project-info">
                  <span className="caption project-category">{project.category}</span>
                  <h3 className="display-md">{project.title}</h3>
                  <p className="body-regular">{project.description}</p>
                </div>
                <div className="project-visual">
                  <motion.div className="project-image-wrapper" style={{ y: index % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], [-50, 50]) }}>
                    <img src={project.image} alt={project.title} />
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        <div className="projects-action">
          <motion.div 
            className="glowing-button-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={`glowing-backdrop ${bursting ? 'burst' : ''}`}></div>
            <a 
              href="#projects" 
              className="button-primary glowing-button"
              onClick={(e) => {
                e.preventDefault();
                setBursting(true);
                setTimeout(() => setBursting(false), 800);

                if (!showAll) {
                  setShowAll(true);
                  setTimeout(() => {
                    window.scrollBy({ top: 400, behavior: 'smooth' });
                  }, 200);
                } else {
                  const section = document.getElementById('projects');
                  if (section) {
                    const top = section.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                  setTimeout(() => {
                    setShowAll(false);
                  }, 400);
                }
              }}
            >
              {showAll ? "View Less" : "View All Projects"}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
