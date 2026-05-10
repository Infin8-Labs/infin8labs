import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate request body
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate environment variables
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_SEND_TO) {
    console.error('Missing environment variables:', {
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
      SMTP_SEND_TO: !!process.env.SMTP_SEND_TO,
    });
    return res.status(500).json({ message: 'Server configuration error: Missing email credentials' });
  }

  // Set up Nodemailer transport configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // HTML email to the recipient (admin)
  const htmlMessageToSelf = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #4CAF50;">New Contact Form Submission 📬</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4CAF50;">${email}</a></p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong> ${message}</p>
      <hr />
      <p>Received on: <strong>${new Date().toLocaleString()}</strong></p>
      <!-- Personal Contact Information Section -->
      <h3 style="color: #4CAF50;">Share my contact information 📞</h3>
      <a href="mailto:${email}?subject=Contact%20Request&body=Hi,%0D%0A%0D%0AIf%20you'd%20like%20to%20reach%20me%20directly,%20you%20can%20use%20the%20details%20below:%0D%0A%0D%0A📞%20Phone%20Number:%20%2B91%208885666478%0D%0A📧%20Email:%20maddulurimahesh128%40gmail.com%0D%0A🔗%20LinkedIn:%20https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmahesh-madduluri-8b0149317%0D%0A💬%20WhatsApp:%20https%3A%2F%2Fwa.me%2F918885666478"
          style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">
          Contact Me
      </a>
    </div>
  `;

  // HTML email to the sender (confirmation message)
  const htmlMessageToSender = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #4CAF50;">Thank You for Reaching Out!</h2>
      <p>Hello <strong>${name}</strong>,</p>
      <p>Thank you for contacting me. I have received your message and will get back to you shortly. Here's a copy of what you sent:</p>
      <p><strong>Your Message:</strong> ${message}</p>
      <hr />
      <p>Looking forward to connecting with you!</p>
      
      <footer style="color: #888; font-size: 12px; margin-top: 20px;">
        <p>Follow me on 
          <a href="https://www.linkedin.com/in/mahesh-madduluri-8b0149317/" style="color: #4CAF50;">LinkedIn</a> | 
          <a href="https://github.com/Mahesh-1282" style="color: #4CAF50;">GitHub</a> | 
          <a href="https://www.instagram.com/mahesh_madduluri_128/" style="color: #4CAF50;">Instagram</a></p>
      </footer>
    </div>
  `;

  // Email options for the recipient (admin)
  const mailOptionsToSelf = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_SEND_TO,
    subject: `New Contact Form Submission from ${name}`,
    html: htmlMessageToSelf,
  };

  // Email options for the sender (confirmation)
  const mailOptionsToSender = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Thank you for contacting me!',
    html: htmlMessageToSender,
  };

  try {
    // Send email to the recipient (admin)
    await transporter.sendMail(mailOptionsToSelf);
    
    // Send confirmation email to the sender
    await transporter.sendMail(mailOptionsToSender);

    res.status(200).json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Email backend server running on http://localhost:${PORT}`);
  });
}

export default app;
