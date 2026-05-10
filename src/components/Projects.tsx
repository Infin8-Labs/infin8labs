import './Projects.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
    description: "Premium end-to-end company portfolio with interactive 3D elements.",
    link: "https://mm-website-gules.vercel.app/",
    image: mmImg
  },
  {
    title: "SnapOnn",
    category: "Data Analytics",
    description: "Automated web scraping and data pipeline architecture.",
    link: "https://snaponn.vercel.app/",
    image: snaponnImg
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" className="projects section-padding" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="display-xl">Featured Work</h2>
          <p className="subhead">Selected projects showcasing our expertise in design and engineering.</p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="project-row" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
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
        </div>
      </div>
    </section>
  );
}
