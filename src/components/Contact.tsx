import './Contact.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.DEV ? 'http://localhost:5000/api/contact' : '/api/contact';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); // clear form
        setTimeout(() => setStatus('idle'), 5000); // reset status after 5s
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send message. Is the backend server running?');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="caption">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-input" 
                  placeholder="Your Name" 
                  required 
                  disabled={status === 'loading'}
                />
              </div>
              <div className="form-group">
                <label className="caption">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-input" 
                  placeholder="you@company.com" 
                  required 
                  disabled={status === 'loading'}
                />
              </div>
              <div className="form-group">
                <label className="caption">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="text-input" 
                  placeholder="+91 00000 00000" 
                  disabled={status === 'loading'}
                />
              </div>
              <div className="form-group">
                <label className="caption">Requirements / Project Details</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="text-input" 
                  rows={5} 
                  placeholder="Tell us about what you want to build..." 
                  required
                  disabled={status === 'loading'}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`button-primary submit-btn ${status === 'loading' ? 'sending' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className="loader-ring"></span>
                ) : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="success-message" style={{ color: '#4CAF50', marginTop: '16px', textAlign: 'center' }}>
                  Thanks for reaching out! We've sent a confirmation to your email.
                </p>
              )}
              {status === 'error' && (
                <p className="error-message" style={{ color: '#F44336', marginTop: '16px', textAlign: 'center' }}>
                  {errorMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
