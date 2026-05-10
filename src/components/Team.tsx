import './Team.css';
import { motion } from 'framer-motion';

import maheshImg from '/team_mahesh.png';
import sumanthImg from '/team_sumanth.png';
import srinivasImg from '/team_srinivas.png';
import rajagopiiImg from '/team_raja.png';

const team = [
  {
    name: "Mahesh Madduluri",
    role: "Full Stack Developer & Data Engineer",
    linkedin: "https://www.linkedin.com/in/mahesh-madduluri-8b0149317/",
    bio: "Data Engineer specializing in Apache Spark, Databricks, Delta Lake, and AWS S3. Deep experience designing medallion architecture pipelines and streaming ingestion systems, along with full-stack web development. Application Developement, Data Warehousing, Data Engineering, Cloud Computing, AI/ML and Digital Marketing.",
    image: maheshImg
  },
  {
    name: "Sumanth Madduluri",
    role: "Full-Stack Developer & Data Engineer",
    linkedin: "https://www.linkedin.com/in/sumanth-madduluri-a30b8b24b/",
    bio: "Freelance Full-Stack Developer with expertise in both front-end and back-end technologies. Skilled in marketing, digital marketing, sales, and relationship development.",
    image: sumanthImg
  },
  {
    name: "Kammineni Srinivas",
    role: "Java Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/kamminenisrinivas/",
    bio: "Java Full Stack Developer with 2+ years of experience building scalable backend systems and intuitive frontend applications in AdTech and SaaS using Spring Boot, MySQL, Vue.js, and AWS.",
    image: srinivasImg
  },
  {
    name: "Raja Gopi Koilakuntla",
    role: "Finance Consultant",
    linkedin: "https://www.linkedin.com/in/raja-gopi-koilakunta-68a823218/",
    bio: "Seasoned Finance professional with a strong foundation in Financial Planning and Analysis (FP&A), financial reporting, and strategic planning.",
    image: rajagopiiImg
  }
];

export default function Team() {
  return (
    <section id="team" className="team section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="display-xl">Meet the Team</h2>
          <p className="subhead">The engineers, designers, and strategists behind Infin8 Labs.</p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3 className="headline">{member.name}</h3>
                <span className="caption team-role">{member.role}</span>
                <p className="body-sm">{member.bio}</p>
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="linkedin-link">
                  LinkedIn Profile ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
