import './Contact.css';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-lg">Let's build<br/>something.</h2>
            <p className="subhead">Ready to start your next project? We're here to help you achieve digital excellence.</p>
            
            <div className="contact-details">
              <div>
                <span className="caption">Email Us</span>
                <p className="body-lg">infin8labs.support@gmail.com</p>
              </div>
              <div>
                <span className="caption">Call Us</span>
                <p className="body-lg">8885666478</p>
              </div>
              <div>
                <span className="caption">Visit Us</span>
                <p className="body-lg">Madhapur, Hyderabad, Telangana, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for your inquiry! We'll get back to you soon.");
            }}>
              <div className="form-group">
                <label className="caption">Name</label>
                <input type="text" className="text-input" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label className="caption">Email</label>
                <input type="email" className="text-input" placeholder="you@company.com" required />
              </div>
              <div className="form-group">
                <label className="caption">Requirements / Project Details</label>
                <textarea className="text-input" rows={5} placeholder="Tell us about what you want to build..." required></textarea>
              </div>
              <button type="submit" className="button-primary submit-btn">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
